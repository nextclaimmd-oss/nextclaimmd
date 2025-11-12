import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req) {
  const secret = "mySuperSecretKey123"; // Change this to match your webhook secret
  const { searchParams } = new URL(req.url);

  // Verify the secret
  if (searchParams.get("secret") !== secret) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const slug = body?.slug?.current;
    const type = body?._type;

    if (!type) {
      return NextResponse.json({ message: "Missing type" }, { status: 400 });
    }

    // Static pages you always want revalidated
    const staticPaths = ["/", "/about", "/contact", "/careers"];

    // Map Sanity document types to their frontend routes
    const pathMap = {
      services: slug ? `/services/${slug}` : "/services",
      blogs: slug ? `/blogs/${slug}` : "/blogs",
      home: "/",
    };

    // Determine which path to revalidate
    const dynamicPath = pathMap[type] || null;

    // Collect all paths to revalidate
    const revalidatedPaths = [...staticPaths];
    if (dynamicPath) revalidatedPaths.push(dynamicPath);

    // Revalidate each one
    for (const path of revalidatedPaths) {
      await revalidatePath(path);
    }

    return NextResponse.json({
      revalidated: true,
      paths: revalidatedPaths,
    });
  } catch (err) {
    console.error("Revalidation error:", err);
    return NextResponse.json(
      { message: "Error revalidating", error: err.message },
      { status: 500 }
    );
  }
}
