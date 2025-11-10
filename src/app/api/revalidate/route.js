// app/api/revalidate/route.js
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req) {
  const SECRET = "myrevalidatesecret";
  const { searchParams } = new URL(req.url);

  // 1️⃣ Verify secret
  if (searchParams.get("secret") !== SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    const body = await req.json();

    if (!body || !body.type) {
      return NextResponse.json({ message: "Missing type in payload" }, { status: 400 });
    }

    const { type, slug } = body;

    let path = "";

    // 2️⃣ Handle static pages
    if (["home", "careers", "about", "contact"].includes(type)) {
      switch (type) {
        case "home":
          path = "/";
          break;
        case "careers":
          path = "/careers";
          break;
        case "about":
          path = "/about";
          break;
        case "contact":
          path = "/contact";
          break;
      }
    } 
    // 3️⃣ Handle dynamic pages
    else if (["services", "blogs"].includes(type)) {
      if (!slug) {
        return NextResponse.json({ message: "Missing slug for dynamic page", status: 400 });
      }
      path = `/${type}/${slug}`;
    } 
    else {
      return NextResponse.json({ message: "Unknown type", status: 400 });
    }

    // 4️⃣ Revalidate the path
    await revalidatePath(path);
    console.log(`✅ Revalidated: ${path}`);

    return NextResponse.json({ revalidated: true, path, message: "Revalidation successful" });

  } catch (err) {
    console.error("❌ Revalidation error:", err);
    return NextResponse.json({ message: "Error revalidating", error: err.message }, { status: 500 });
  }
}
