import { NextResponse } from 'next/server';

export async function POST(req, res) {
  try {
    const secret = 'myrevalidatesecret'
    const { searchParams } = new URL(req.url);

    // ✅ Check secret
    if (searchParams.get('secret') !== secret) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
    }

    const body = await req.json();
    if (!body) return NextResponse.json({ message: 'Missing body' }, { status: 400 });

    const { slug, type } = body;
    if (!type) return NextResponse.json({ message: 'Missing type' }, { status: 400 });

    // ✅ Static pages
    const staticPaths = ['/', '/about', '/contact', '/careers'];

    // ✅ Dynamic paths
    let dynamicPath = null;
    if (type === 'service') dynamicPath = `/services/${slug}`;
    if (type === 'blog') dynamicPath = `/blogs/${slug}`;
    if (type === 'static') dynamicPath = slug; // e.g., "/about"

    // Combine paths
    const pathsToRevalidate = dynamicPath ? [...staticPaths, dynamicPath] : [...staticPaths];

    // ✅ Trigger revalidation
    for (const path of pathsToRevalidate) {
      await res.revalidate(path);
    }

    return NextResponse.json({
      revalidated: true,
      paths: pathsToRevalidate,
    });
  } catch (err) {
    console.error('Revalidation error:', err);
    return NextResponse.json({ message: 'Error revalidating', error: err.message }, { status: 500 });
  }
}
