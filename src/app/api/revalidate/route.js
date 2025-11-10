import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const SECRET = "myrevalidatesecret";
  const { searchParams } = new URL(req.url);

  // ✅ Verify secret
  if (searchParams.get("secret") !== SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ message: 'Invalid JSON body' }, { status: 400 });
    }

    // Determine type and slug from Sanity payload
    const type = body?._type || body?.type || body?.document?._type || null;
    const slug = body?.slug || null;

    // Map static pages
    const staticPathMap = {
      home: "/",
      careers: "/careers",
      about: "/about",
      contact: "/contact",
    };

    // Map dynamic pages
    const dynamicPathMap = {
      services: `/services/${slug}`,
      blogs: `/blogs/${slug}`,
    };

    let pathsToRevalidate = [];

    if (staticPathMap[type]) {
      // Static page
      pathsToRevalidate.push(staticPathMap[type]);
    } else if (dynamicPathMap[type]) {
      // Dynamic page
      if (!slug) {
        return NextResponse.json({ message: 'Missing slug for dynamic page', status: 400 });
      }
      pathsToRevalidate.push(dynamicPathMap[type]);
    } else {
      // Fallback: revalidate all static pages
      pathsToRevalidate = Object.values(staticPathMap);
    }

    // Revalidate paths
    for (const path of pathsToRevalidate) {
      await revalidatePath(path);
      console.log(`✅ Revalidated: ${path}`);
    }

    return NextResponse.json({
      revalidated: true,
      paths: pathsToRevalidate,
      message: 'Revalidation completed successfully.'
    });

  } catch (err) {
    console.error('❌ Revalidation error:', err);
    return NextResponse.json(
      { message: 'Error revalidating', error: err.message },
      { status: 500 }
    );
  }
}
