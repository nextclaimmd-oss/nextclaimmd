// /app/api/revalidate/route.js
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req) {
  const secret = "nextclaimrevalidate"; // use your own secret key
  const { searchParams } = new URL(req.url);

  // 1️⃣ Verify secret key
  if (searchParams.get("secret") !== secret) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  try {
    // 2️⃣ Parse body from Sanity webhook
    const body = await req.json();
    const slug = body?.slug;
    const type = body?.type;

    if (!type) {
      return NextResponse.json({ message: "Missing type" }, { status: 400 });
    }

    // 3️⃣ Define static pages that should always be refreshed
    const staticPaths = ["/", "/careers", "/about", "/contact"];

    // 4️⃣ Map Sanity document types to dynamic routes
    const pathMap = {
      services: `/services/${slug}`,
      blogs: `/blogs/${slug}`,
      home: "/",
      careers: "/careers",
      about: "/about",
      contact: "/contact",
    };

    const dynamicPath = pathMap[type];

    // 5️⃣ Build final list of paths to revalidate
    const revalidatedPaths = dynamicPath
      ? [dynamicPath, ...staticPaths]
      : staticPaths;

    // 6️⃣ Revalidate each path
    for (const path of revalidatedPaths) {
      await revalidatePath(path);
      console.log(`✅ Revalidated: ${path}`);
    }

    return NextResponse.json({
      revalidated: true,
      paths: revalidatedPaths,
    });
  } catch (err) {
    console.error("❌ Revalidation error:", err);
    return NextResponse.json(
      { message: "Error during revalidation", error: err.message },
      { status: 500 }
    );
  }
}
