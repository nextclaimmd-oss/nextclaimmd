// /app/api/revalidate/route.js
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const secret = 'myrevalidatesecret'; // 🧠 change this to any strong secret key
  const { searchParams } = new URL(req.url);

  // ✅ Step 1: Verify secret
  if (searchParams.get('secret') !== secret) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const slug = body?.slug;
    const type = body?.type; // e.g., "service" or "blog"

    if (!slug || !type) {
      return NextResponse.json({ message: 'Missing slug or type' }, { status: 400 });
    }

    // ✅ Step 2: Define static paths to revalidate
    const staticPaths = ['/', '/careers', '/about', '/contact'];

    // ✅ Step 3: Define how dynamic paths are mapped
    const pathMap = {
      service: `/services/${slug}`,
      blog: `/blogs/${slug}`,
    };

    const dynamicPath = pathMap[type];

    if (!dynamicPath) {
      return NextResponse.json({ message: 'Invalid type' }, { status: 400 });
    }

    // ✅ Step 4: Revalidate both the dynamic and static paths
    const revalidatedPaths = [dynamicPath, ...staticPaths];

    for (const path of revalidatedPaths) {
      await revalidatePath(path);
    }

    return NextResponse.json({ revalidated: true, paths: revalidatedPaths });
  } catch (err) {
    console.error('Revalidation error:', err);
    return NextResponse.json(
      { message: 'Error revalidating', error: err.message },
      { status: 500 }
    );
  }
}
