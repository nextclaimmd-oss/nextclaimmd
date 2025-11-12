// /app/api/revalidate/route.js
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const secret = 'mySuperSecretKey123'; // same as in your webhook URL
  const { searchParams } = new URL(req.url);

  // 🔐 Check webhook secret
  if (searchParams.get('secret') !== secret) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const slug = body?.slug;
    const type = body?._type; // note: use _type from Sanity projection

    if (!type) {
      return NextResponse.json({ message: 'Missing type' }, { status: 400 });
    }

    // 🧱 Static pages you always want to revalidate
    const staticPaths = ['/', '/services', '/blogs', '/careers', '/about', '/contact'];

    // 🧭 Dynamic path map
    const pathMap = {
      services: slug ? `/services/${slug}` : '/services',
      blogs: slug ? `/blogs/${slug}` : '/blogs',
    };

    // Determine which dynamic path to revalidate
    const dynamicPath = pathMap[type];

    // 🧩 Combine all relevant paths
    const revalidatedPaths = [];

    // Revalidate the main affected path
    if (dynamicPath) {
      await revalidatePath(dynamicPath);
      revalidatedPaths.push(dynamicPath);
    }

    // Revalidate static pages (optional)
    for (const path of staticPaths) {
      await revalidatePath(path);
      revalidatedPaths.push(path);
    }

    console.log('✅ Revalidated paths:', revalidatedPaths);

    return NextResponse.json({
      revalidated: true,
      paths: revalidatedPaths,
    });
  } catch (err) {
    console.error('❌ Revalidation error:', err);
    return NextResponse.json(
      { message: 'Error revalidating', error: err.message },
      { status: 500 }
    );
  }
}
