// /app/api/revalidate/route.js
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const secret = "nextclaimrevalidation";

    // Always construct URL with base
    const { searchParams } = new URL(req.url, process.env.NEXT_PUBLIC_BASE_URL || "https://nextclaimmd.vercel.app");

    // ✅ Validate secret
    if (searchParams.get("secret") !== secret) {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    }

    const body = await req.json();
    const slug = body?.slug;
    const type = body?.type;

    if (!slug || !type) {
      return NextResponse.json({ message: "Missing slug or type" }, { status: 400 });
    }

    // ✅ Define your static and dynamic paths
    const staticPaths = ["/", "/blogs", "/services", "/careers", "/contact", "/about"];

    const pathMap = {
      blogs: `/blogs/${slug}`,
      services: `/services/${slug}`,
    };

    const dynamicPath = pathMap[type];

    if (!dynamicPath) {
      return NextResponse.json({ message: "Invalid type" }, { status: 400 });
    }

    // ✅ Revalidate each path
    const revalidatedPaths = [dynamicPath, ...staticPaths];
    for (const path of revalidatedPaths) {
      await revalidatePath(path);
    }

    return NextResponse.json({
      revalidated: true,
      paths: revalidatedPaths,
      message: "Revalidation successful",
    });
  } catch (err) {
    console.error("Revalidation error:", err);
    return NextResponse.json(
      { message: "Error revalidating", error: err.message },
      { status: 500 }
    );
  }
}
