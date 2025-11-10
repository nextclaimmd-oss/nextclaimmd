import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const SECRET = "myrevalidatesecret";
  const { searchParams } = new URL(req.url);

  // 1️⃣ Verify secret
  if (searchParams.get("secret") !== SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    const body = await req.json();

    const type = body?.type || body?._type || null;
    const slug = body?.slug || null;

    if (!type) {
      return NextResponse.json({ message: "Missing type in payload" }, { status: 400 });
    }

    // 2️⃣ Map static pages
    const staticPages = {
      home: "/",
      careers: "/careers",
      about: "/about",
      contact: "/contact",
    };

    // 3️⃣ Map dynamic pages
    const dynamicPages = {
      services: slug ? `/services/${slug}` : null,
      blogs: slug ? `/blogs/${slug}` : null,
    };

    // 4️⃣ Decide which path to revalidate
    let pathToRevalidate = null;

    if (staticPages[type]) {
      pathToRevalidate = staticPages[type];
    } else if (dynamicPages[type]) {
      pathToRevalidate = dynamicPages[type];
    } else {
      return NextResponse.json({ message: "Unknown type or missing slug for dynamic page", status: 400 });
    }

    // 5️⃣ Revalidate the path
    await revalidatePath(pathToRevalidate);
    console.log(`✅ Revalidated: ${pathToRevalidate}`);

    return NextResponse.json({
      revalidated: true,
      path: pathToRevalidate,
      message: "Revalidation successful",
    });
  } catch (err) {
    console.error("❌ Revalidation error:", err);
    return NextResponse.json({ message: "Error revalidating", error: err.message }, { status: 500 });
  }
}
