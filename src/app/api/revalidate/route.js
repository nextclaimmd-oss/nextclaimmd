import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";


const REVALIDATION_SECRET = process.env.REVALIDATION_SECRET || "nextclaimrevalidation";

export async function POST(req) {
  // 1. Secret Validation
  const { searchParams } = new URL(req.url);

  if (searchParams.get("secret") !== REVALIDATION_SECRET) {
    // If the secret doesn't match, block the request immediately.
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  try {
    // 2. Parse the Webhook Body
    const body = await req.json();
    const slug = body?.slug;
    const type = body?.type;

    if (!slug || !type) {
      return NextResponse.json(
        { message: "Missing required properties: slug or type in webhook body" },
        { status: 400 }
      );
    }

    // 3. Define Paths to Revalidate
    // Static paths (like index, list pages) that might reference the updated content
    const staticPaths = [
      "/",
      "/blogs",
      "/services",
      "/careers",
      "/contact",
      "/about",
    ];

    // Map Sanity document type (e.g., 'blogs') to the dynamic route structure
    const pathMap = {
      services: `/services/${slug}`,
      blogs: `/blogs/${slug}`,
    };

    const dynamicPath = pathMap[type];

    if (!dynamicPath) {
        // If it's an unmapped type (like a site config), we will only revalidate static paths
        console.warn(`Webhook received for unmapped type: ${type}. Only static paths will be revalidated.`);
    }

    // 4. Execute Revalidation
    const pathsToRevalidate = dynamicPath
      ? [dynamicPath, ...staticPaths] // Revalidate the dynamic page AND all static list pages
      : staticPaths; // Only revalidate static pages if no dynamic path is found

    // Use await revalidatePath for each path to ensure the cache is fully cleared
    for (const path of pathsToRevalidate) {
      await revalidatePath(path);
    }

    // 5. Success Response
    return NextResponse.json({
      revalidated: true,
      paths: pathsToRevalidate,
      message: `Successfully revalidated ${pathsToRevalidate.length} paths for type: ${type}.`,
    });
  } catch (err) {
    console.error("Revalidation error:", err);
    // 6. Error Response
    return NextResponse.json(
      { message: "Error revalidating", error: err.message },
      { status: 500 }
    );
  }
}