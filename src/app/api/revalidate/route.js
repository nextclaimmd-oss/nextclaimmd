// /app/api/revalidate/route.js
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req) {
  const SECRET = "nextclaimrevalidation"; // replace with your secret or use env var
  const { searchParams } = new URL(req.url);

  // check secret in query param
  if (searchParams.get("secret") !== SECRET) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  try {
    const body = await req.json();

    // Accept multiple possible payload shapes from Sanity/webhooks
    const slugCandidate =
      body?.slug ||
      body?.slug?.current ||
      body?.document?.slug?.current ||
      body?.result?.slug?.current ||
      body?.document?._id ||
      body?.result?._id;

    const typeCandidate =
      body?.type ||
      body?._type ||
      body?.document?._type ||
      body?.result?._type;

    // optional: allow a "page" param for static page revalidation
    const pageName = body?.page || body?.pagename || body?.pageName;

    // static pages to always revalidate when content changes
    const staticPaths = ["/", "/about", "/contact", "/careers", "/services", "/blogs"];

    // If the webhook is explicitly for a static single page (like "home" or "about")
    if (pageName) {
      // normalize basic names to paths
      const pageMap = {
        home: "/",
        about: "/about",
        contact: "/contact",
        careers: "/careers",
        services: "/services",
        blogs: "/blogs",
      };

      const path = pageMap[pageName] ?? `/${pageName}`;
      await revalidatePath(path);
      return NextResponse.json({ revalidated: true, paths: [path] });
    }

    // Validate presence of type and slug for dynamic revalidations
    const type = typeCandidate?.toString();
    const slug = slugCandidate?.toString();

    // If neither type/page nor slug present, just revalidate main static pages
    if (!type && !slug) {
      // Revalidate all main static pages
      const revalidated = [];
      for (const p of staticPaths) {
        await revalidatePath(p);
        revalidated.push(p);
      }
      return NextResponse.json({ revalidated: true, paths: revalidated });
    }

    // map types to dynamic paths
    const pathMap = {
      services: (s) => `/services/${s}`,
      blogs: (s) => `/blogs/${s}`,
      // extend here if you have /tours, /trekking etc.
      // tour: (s) => `/tours/${s}`,
      // trekking: (s) => `/trekking/${s}`,
    };

    const mapper = pathMap[type];

    if (!mapper) {
      // If unknown type, still revalidate top-level static pages
      const revalidated = [];
      for (const p of staticPaths) {
        await revalidatePath(p);
        revalidated.push(p);
      }
      return NextResponse.json({
        revalidated: true,
        note: "Unknown type; revalidated main static pages instead",
        paths: revalidated,
      });
    }

    if (!slug) {
      return NextResponse.json({ message: "Missing slug for dynamic revalidation" }, { status: 400 });
    }

    // Build list: dynamic page + main static pages (await each)
    const dynamicPath = mapper(slug);
    const revalidatedPaths = [dynamicPath, ...staticPaths];

    for (const path of revalidatedPaths) {
      await revalidatePath(path);
    }

    return NextResponse.json({ revalidated: true, paths: revalidatedPaths });
  } catch (err) {
    console.error("Revalidation error:", err);
    return NextResponse.json({ message: "Error revalidating", error: err?.message ?? String(err) }, { status: 500 });
  }
}
