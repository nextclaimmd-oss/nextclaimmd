import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req) {
  const SECRET = "nextclaimrevalidation";
  const { searchParams } = new URL(req.url);

  if (searchParams.get("secret") !== SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const doc = body?.document || body || {};
    const type = doc?._type || body?._type || null;
    const slug = doc?.slug?.current || doc?.slug || null;

    const pathMap = {
      home: ["/"],
      about: ["/about"],
      contact: ["/contact"],
      careers: ["/careers"],
      services: ["/services"],
      blogs: ["/blogs"],
    };

    const pathsToRevalidate = [];

    if (type === "service" && slug) {
      pathsToRevalidate.push(`/services/${slug}`);
      pathsToRevalidate.push("/services");
    } else if (type === "blog" && slug) {
      pathsToRevalidate.push(`/blogs/${slug}`);
      pathsToRevalidate.push("/blogs");
    } else if (pathMap[type]) {
      pathsToRevalidate.push(...pathMap[type]);
    } else {
      pathsToRevalidate.push("/");
    }

    for (const path of pathsToRevalidate) {
      await revalidatePath(path);
      console.log(`✅ Revalidated: ${path}`);
    }

    return NextResponse.json({
      revalidated: true,
      paths: pathsToRevalidate,
    });
  } catch (error) {
    console.error("❌ Revalidation error:", error);
    return NextResponse.json(
      { message: "Error during revalidation", error: error.message },
      { status: 500 }
    );
  }
}
