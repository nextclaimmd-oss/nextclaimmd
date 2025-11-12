import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

const REVALIDATE_SECRET = process.env.SANITY_REVALIDATE_SECRET || "mySuperSecretKey123";

export async function POST(request) {
  try {
    // Verify secret token
    const secret = request.nextUrl.searchParams.get("secret");
    if (secret !== REVALIDATE_SECRET) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    const body = await request.json();
    const { _type, slug } = body;

    console.log("🔔 Revalidation request received for:", _type, slug?.current);

    // Revalidate logic for your pages
    switch (_type) {
      case "home":
        revalidatePath("/");
        break;

      case "services":
        revalidatePath("/services");
        if (slug?.current) revalidatePath(`/services/${slug.current}`);
        break;

      case "blogs":
        revalidatePath("/blogs");
        if (slug?.current) revalidatePath(`/blogs/${slug.current}`);
        break;

      case "careers":
      case "about":
      case "contact":
        revalidatePath(`/${_type}`);
        break;

      default:
        console.warn("⚠️ Unhandled document type:", _type);
        revalidatePath("/");
    }

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    console.error("❌ Revalidation error:", err);
    return NextResponse.json({ message: "Error revalidating", error: err.message }, { status: 500 });
  }
}
