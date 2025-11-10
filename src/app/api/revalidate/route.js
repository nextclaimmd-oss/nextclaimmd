export const runtime = 'edge'; // Important

export async function POST(req) {
  try {
    const secret = "myrevalidatesecret"
    const { searchParams } = new URL(req.url);

    if (searchParams.get('secret') !== secret) {
      return new Response(JSON.stringify({ message: 'Invalid secret' }), { status: 401 });
    }

    const body = await req.json().catch(() => null);
    if (!body) return new Response(JSON.stringify({ message: 'Missing body' }), { status: 400 });

    const { slug, type } = body;
    if (!type) return new Response(JSON.stringify({ message: 'Missing type' }), { status: 400 });

    // Static pages
    const staticPages = ['/', '/careers', '/about', '/contact'];

    // Determine dynamic path
    let dynamicPath = null;
    if (type === 'services') dynamicPath = `/services/${slug}`;
    if (type === 'blogs') dynamicPath = `/blogs/${slug}`;
    if (type === 'static') dynamicPath = slug; // slug for static pages

    // Combine paths
    const pathsToRevalidate = dynamicPath ? [...staticPages, dynamicPath] : [...staticPages];

    // Revalidate all paths
    for (const path of pathsToRevalidate) {
      await fetch(new URL(path, req.url), { method: 'POST', headers: { 'x-revalidate': 'true' } });
    }

    return new Response(JSON.stringify({
      revalidated: true,
      paths: pathsToRevalidate,
      message: 'Revalidation successful'
    }), { status: 200 });

  } catch (err) {
    console.error('Revalidation failed:', err);
    return new Response(JSON.stringify({ message: 'Error revalidating', error: err.message }), { status: 500 });
  }
}
