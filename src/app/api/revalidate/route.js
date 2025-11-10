import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    // ✅ 1. Verify the secret
    const secret = 'myrevalidatesecret'
    const { searchParams } = new URL(req.url);

    if (searchParams.get('secret') !== secret) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
    }

    // ✅ 2. Parse JSON body safely
    const body = await req.json().catch(() => null);

    if (!body) {
      return NextResponse.json({ message: 'Invalid JSON body' }, { status: 400 });
    }

    const { slug, type } = body;

    if (!slug || !type) {
      return NextResponse.json({ message: 'Missing slug or type' }, { status: 400 });
    }

    // ✅ 3. Define static and dynamic paths
    const staticPaths = ['/', '/careers', '/about', '/contact'];
    const pathMap = {
      service: `/services/${slug}`,
      blog: `/blogs/${slug}`,
    };

    const dynamicPath = pathMap[type];

    if (!dynamicPath) {
      return NextResponse.json({ message: 'Invalid type' }, { status: 400 });
    }

    // ✅ 4. Revalidate both dynamic and static paths
    const revalidatedPaths = [dynamicPath, ...staticPaths];

    for (const path of revalidatedPaths) {
      await revalidatePath(path);
    }

    // ✅ 5. Respond with success
    return NextResponse.json({
      revalidated: true,
      paths: revalidatedPaths,
      message: 'Revalidation completed successfully.',
    });
  } catch (err) {
    console.error('❌ Revalidation error:', err);
    return NextResponse.json(
      { message: 'Error revalidating', error: err.message },
      { status: 500 }
    );
  }
}
