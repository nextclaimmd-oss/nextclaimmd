import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const secret = 'myrevalidatesecret'
    const { searchParams } = new URL(req.url);

    // 1️⃣ Verify secret
    if (searchParams.get('secret') !== secret) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
    }

    // 2️⃣ Parse body
    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ message: 'Invalid JSON body' }, { status: 400 });
    }

    const { slug, type } = body;

    if (!type) {
      return NextResponse.json({ message: 'Missing type' }, { status: 400 });
    }

    // 3️⃣ Define static paths
    const staticPaths = ['/', '/about', '/contact', '/careers'];

    // 4️⃣ Map dynamic paths
    const pathMap = {
      service: slug ? `/services/${slug}` : null,
      blog: slug ? `/blogs/${slug}` : null,
      static: slug || null, // allows revalidating a static page by sending type='static' and slug='/page'
    };

    const dynamicPath = pathMap[type];

    if (type !== 'static' && !dynamicPath) {
      return NextResponse.json({ message: 'Invalid slug for type', type, slug }, { status: 400 });
    }

    // 5️⃣ Revalidate static + dynamic paths
    const pathsToRevalidate = dynamicPath ? [...staticPaths, dynamicPath] : [...staticPaths];

    for (const path of pathsToRevalidate) {
      await revalidatePath(path);
    }

    return NextResponse.json({
      revalidated: true,
      paths: pathsToRevalidate,
      message: 'Revalidation completed successfully',
    });
  } catch (err) {
    console.error('Revalidation error:', err);
    return NextResponse.json(
      { message: 'Error revalidating', error: err.message },
      { status: 500 }
    );
  }
}
