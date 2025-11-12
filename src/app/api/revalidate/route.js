// /app/api/revalidate/route.js
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // ✅ Secret to validate the webhook
    const secret = "nextclaimrevalidation";

    // ✅ Construct absolute URL for Vercel / local
    const { searchParams } = new URL(
      req.url,
      process.env.NEXT_PUBLIC_BASE_URL || "https://nextclaimmd.vercel.app"
    );

    // ✅ Check secret
    if (searchParams.get("secret") !== secret) {
      console.warn("Invalid token in webhook call");
      return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    }

    // ✅ Parse request body
    const body = await req.json();
    const slug = body?.slug;
    const type = body?.type;

    console.log("Webhook received:", body);

    if (!slug || !type) {
      console.error("Missing slug or type in webhook");
      return NextResponse.json({ message: "Missing slug or type" }, { status: 400 });
    }

    // ✅ Define static paths to revalidate
    const staticPaths = ["/", "/blogs", "/services", "/careers", "/contact", "/about"];

    // ✅ Map type to dynamic path
    const pathMap = {
      blogs: `/blogs/${slug}`,      // matches /app/blogs/[slug]/page.js
      services: `/services/${slug}` // matches /app/services/[slug]/page.js
    };

    const dynamicPath = pathMap[type];

    if (!dynamicPath) {
      console.error("Invalid type in webhook:", type);
      return NextResponse.json({ message: "Invalid type" }, { status: 400 });
    }

    // ✅ Revalidate all relevant paths
    const revalidatedPaths = [dynamicPath, ...staticPaths];

    for (const path of revalidatedPaths) {
      console.log("Revalidating path:", path);
      await revalidatePath(path); // Important to await
    }

    console.log("Revalidation successful for paths:", revalidatedPaths);

    return NextResponse.json({
      revalidated: true,
      paths: revalidatedPaths,
      message: "Revalidation successful"
    });

  } catch (err) {
    console.error("Error in revalidation route:", err);
    return NextResponse.json(
      { message: "Error revalidating", error: err.message },
      { status: 500 }
    );
  }
}
