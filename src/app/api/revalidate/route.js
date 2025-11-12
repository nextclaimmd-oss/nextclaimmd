import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache'; // ✅ needed import

const REVALIDATE_SECRET = process.env.SANITY_REVALIDATE_SECRET || "mySuperSecretKey123";

export async function POST(request) {
  try {
    const body = await request.json();

    const secret = request.nextUrl.searchParams.get('secret');
    if (secret !== REVALIDATE_SECRET) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
    }

    const { _type, slug } = body;

    switch (_type) {
      case 'services':
        if (slug?.current) revalidatePath(`/services/${slug.current}`);
        revalidatePath('/services');
        break;

      case 'blogs':
        if (slug?.current) revalidatePath(`/blogs/${slug.current}`);
        revalidatePath('/blogs');
        break;

      case 'home':
        revalidatePath('/');
        break;

      case 'careers':
      case 'about':
      case 'contact':
        revalidatePath(`/${_type}`);
        break;

      default:
        revalidatePath('/');
    }

    return NextResponse.json({ revalidated: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
}
