import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

const SECRET = "mySuperSecretKey123"; // Must match your Sanity webhook secret

export async function POST(req) {
  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("secret");

    if (token !== SECRET) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    const body = await req.json();
    const type = body?._type;
    const slug = body?.slug?.current; // Only dynamic pages have slug

    if (!type) {
      return NextResponse.json({ message: "Missing _type in body" }, { status: 400 });
    }

    // Static pages
    const staticPaths = ["/", "/about", "/contact", "/careers"];

    // Map types to paths
    const pathMap = {
      home: "/",
      services: slug ? `/services/${slug}` : "/services",
      blogs: slug ? `/blogs/${slug}` : "/blogs",
      about: "/about",
      contact: "/contact",
      careers: "/careers",
    };

    const dynamicPath = pathMap[type];
    const pathsToRevalidate = [...staticPaths];
    if (dynamicPath && !pathsToRevalidate.includes(dynamicPath)) {
      pathsToRevalidate.push(dynamicPath);
    }

    // Revalidate all relevant paths
    for (const path of pathsToRevalidate) {
      await revalidatePath(path);
    }

    console.log("✅ Revalidated paths:", pathsToRevalidate);

    return NextResponse.json({ revalidated: true, paths: pathsToRevalidate });
  } catch (err) {
    console.error("❌ Revalidation error:", err);
    return NextResponse.json(
      { message: "Error revalidating", error: err.message },
      { status: 500 }
    );
  }
}
