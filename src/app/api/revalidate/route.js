import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req) {
  const SECRET = "nextclaimrevalidation"; 
  const { searchParams } = new URL(req.url);

  // ✅ 1. Verify secret key
  if (searchParams.get("secret") !== SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const docType = body._type;
    const slug = body.slug?.current;

    // ✅ 2. Revalidate static pages
    const staticPages = ["/", "/about", "/contact", "/careers", "/services", "/blogs"];
    staticPages.forEach((path) => revalidatePath(path));

    // ✅ 3. Revalidate dynamic pages (services + blogs)
    if (docType === "services" && slug) {
      revalidatePath(`/services/${slug}`);
    }

    if (docType === "blogs" && slug) {
      revalidatePath(`/blogs/${slug}`);
    }

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    console.error("Revalidation error:", err);
    return NextResponse.json({ message: "Error during revalidation" }, { status: 500 });
  }
}
