// app/api/revalidate/route.js
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req) {
  const SECRET = "myrevalidatesecret";
  const { searchParams } = new URL(req.url);

  // Verify secret
  if (searchParams.get("secret") !== SECRET) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  try {
    const body = await req.json();

    // Sanity sends either {_type: "..."} or {document: {_type: "..."}}
    const type =
      body?._type || body?.type || body?.document?._type || null;

    // Map your Sanity document types to actual routes
    const pathMap = {
      home: "/",
      services: "/services",
      blogs: "/blogs",
      careers: "/careers",
      about: "/about",
      contact: "/contact",
      
    };

   
    const targetPath = pathMap[type];

    // Otherwise revalidate all static pages as fallback
    const pathsToRevalidate = targetPath
      ? [targetPath]
      : Object.values(pathMap);

    // Revalidate each path
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
