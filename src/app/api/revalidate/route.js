// /app/api/revalidate/route.js
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req) {
  const secret = "nextclaimrevalidate"; // your secret key
  const { searchParams } = new URL(req.url);

  // 1️⃣ Validate secret
  if (searchParams.get("secret") !== secret) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const type = body?.type;
    const slug = body?.slug;

    console.log("🔔 Webhook received:", { type, slug });

    // 2️⃣ Static paths to always revalidate
    const staticPaths = ["/", "/about", "/careers", "/contact"];

    // 3️⃣ Map document types to frontend routes
    const pathMap = {
      services: slug ? `/services/${slug}` : "/services",
      blogs: slug ? `/blogs/${slug}` : "/blogs",
      home: "/",
      about: "/about",
      careers: "/careers",
      contact: "/contact",
    };

    // 4️⃣ Get the path to revalidate
    const targetPath = pathMap[type];

    if (!targetPath) {
      return NextResponse.json(
        { message: `No revalidation rule for type: ${type}` },
        { status: 400 }
      );
    }

    // 5️⃣ Revalidate both dynamic and static paths
    const pathsToRevalidate = [targetPath, ...staticPaths];

    for (const path of pathsToRevalidate) {
      await revalidatePath(path);
      console.log(`✅ Revalidated: ${path}`);
    }

    return NextResponse.json({
      revalidated: true,
      paths: pathsToRevalidate,
    });
  } catch (err) {
    console.error("❌ Revalidation error:", err);
    return NextResponse.json(
      { message: "Error during revalidation", error: err.message },
      { status: 500 }
    );
  }
}
