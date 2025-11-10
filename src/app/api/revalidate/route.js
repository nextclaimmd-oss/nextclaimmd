export const runtime = 'edge'; // Important for Edge API

export async function POST(req) {
  try {
    const secret = process.env.REVALIDATE_SECRET;
    const { searchParams } = new URL(req.url);

    // 1️⃣ Check secret
    if (searchParams.get('secret') !== secret) {
      return new Response(JSON.stringify({ message: 'Invalid secret' }), { status: 401 });
    }

    // 2️⃣ Parse JSON body
    const body = await req.json().catch(() => null);
    if (!body) return new Response(JSON.stringify({ message: 'Missing body' }), { status: 400 });

    const { slug, type } = body;
    if (!type) return new Response(JSON.stringify({ message: 'Missing type' }), { status: 400 });

    // 3️⃣ Map static pages
    const staticPageMap = {
      home: '/',
      about: '/about',
      careers: '/careers',
      contact: '/contact',
    };

    // 4️⃣ Determine which path to revalidate
    let pathToRevalidate = null;

    if (type === 'services') pathToRevalidate = `/services/${slug}`;
    else if (type === 'blogs') pathToRevalidate = `/blogs/${slug}`;
    else if (staticPageMap[type]) pathToRevalidate = staticPageMap[type];

    if (!pathToRevalidate) {
      return new Response(JSON.stringify({ message: 'Invalid type or slug missing' }), { status: 400 });
    }

    // 5️⃣ Trigger Next.js on-demand revalidation
    await fetch(new URL(pathToRevalidate, req.url), {
      method: 'POST',
      headers: { 'x-revalidate': 'true' },
    });

    // 6️⃣ Respond
    return new Response(
      JSON.stringify({
        revalidated: true,
        path: pathToRevalidate,
        message: 'Revalidation successful',
      }),
      { status: 200 }
    );

  } catch (err) {
    console.error('Revalidation failed:', err);
    return new Response(JSON.stringify({ message: 'Error revalidating', error: err.message }), { status: 500 });
  }
}
