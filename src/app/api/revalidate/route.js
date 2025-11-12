import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

// ⚠️ IMPORTANT: Get the secret key from environment variables.
const REVALIDATION_SECRET = "nextclaimrevalidation"

export async function POST(req) {
  // 1. Secret Validation
  const { searchParams } = new URL(req.url);

  if (searchParams.get("secret") !== REVALIDATION_SECRET) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  try {
    // 2. Parse the Webhook Body (Assuming Sanity sends: { "slug": slug.current, "type": _type })
    const body = await req.json();
    const slug = body?.slug; // Defined for dynamic types (blogs, services)
    const type = body?.type;

    if (!type) {
        return NextResponse.json(
            { message: "Missing required property: type in webhook body" },
            { status: 400 }
        );
    }

    // 3. Map Sanity Document Type to Next.js Path
    const pathMap = {
      // Dynamic Pages (need a specific slug)
      services: `/services/${slug}`,
      blogs: `/blogs/${slug}`,

      // Static Pages (revalidate the specific path)
      home: '/',
      about: '/about',
      careers: '/careers',
      contact: '/contact',
      
      // Add other top-level types here if they exist (e.g., 'settings')
    };

    let pathsToRevalidate = [];

    // --- Dynamic Content Logic (Blogs/Services) ---
    if (type === 'services' || type === 'blogs') {
      if (!slug) {
        return NextResponse.json(
          { message: `Missing slug for dynamic type: ${type}. Revalidation requires a slug.` },
          { status: 400 }
        );
      }
      
      // 1. Revalidate the specific detail page (e.g., /blogs/my-slug)
      pathsToRevalidate.push(pathMap[type]); 
      
      // 2. Revalidate the list/index page (e.g., /blogs) which now reflects the change
      pathsToRevalidate.push(`/${type}`); 
    } 
    // --- Static Content Logic (Home/About/etc.) ---
    else if (pathMap[type]) {
      // 1. Revalidate the specific static page (e.g., /about)
      pathsToRevalidate.push(pathMap[type]);
    } 
    // --- Fallback for Unhandled Types ---
    else {
      // For general site updates (e.g., footers, navs), revalidate the root only
      console.warn(`Webhook received for unmapped type: ${type}. Revalidating root '/'.`);
      pathsToRevalidate.push('/');
    }

    // 4. Execute Revalidation
    if (pathsToRevalidate.length > 0) {
        for (const path of pathsToRevalidate) {
          await revalidatePath(path);
        }
    } else {
        return NextResponse.json({ revalidated: false, message: "No path was found to revalidate." }, { status: 200 });
    }
    
    // 5. Success Response
    return NextResponse.json({
      revalidated: true,
      paths: pathsToRevalidate,
      message: `Successfully revalidated ${pathsToRevalidate.length} path(s) for type: ${type}.`,
    });

  } catch (err) {
    console.error("Revalidation error:", err);
    // 6. Error Response
    return NextResponse.json(
      { message: "Error during revalidation", error: err.message },
      { status: 500 }
    );
  }
}