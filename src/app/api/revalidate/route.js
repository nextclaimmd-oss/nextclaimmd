// src/app/api/revalidate/route.js
import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";

// Environment variable - set this in Vercel (or your host) and also use it in Sanity webhook config
const SANITY_WEBHOOK_SECRET = "nextclaimrevalidation"

async function readRaw(req) {
  // Next.js Request exposes .text() to get raw body
  return await req.text();
}

export async function POST(request) {
  try {
    if (!SANITY_WEBHOOK_SECRET) {
      console.error("SANITY_WEBHOOK_SECRET is missing");
      return NextResponse.json({ error: "server misconfigured" }, { status: 500 });
    }

    const rawBody = await readRaw(request);
    const signatureHeader =
      request.headers.get(SIGNATURE_HEADER_NAME) ||
      request.headers.get("sanity-signature") ||
      request.headers.get("x-sanity-signature");

    // Verify the request came from Sanity
    const signatureIsValid = await isValidSignature(rawBody, signatureHeader, SANITY_WEBHOOK_SECRET);
    if (!signatureIsValid) {
      console.warn("Invalid webhook signature");
      return NextResponse.json({ error: "invalid signature" }, { status: 401 });
    }

    // Parse the incoming payload (Sanity sends JSON)
    const body = JSON.parse(rawBody);

    // Try common places for slug/type depending on your webhook configuration
    const doc = body?.document || body?.result || body?.projection || body;
    const docType = doc?._type || doc?.type || body?.type;
    const slug =
      doc?.slug?.current || // common in content schemas
      doc?.slug ||
      (doc?.slug && typeof doc.slug === "string" ? doc.slug : undefined) ||
      body?.slug;

    // Map doc types to paths you want to revalidate
    // Adjust the mapping to match your routes and content model.
    // Example:
    const revalidated = [];

    if (slug && docType) {
      // Example: blog posts at /blog/[slug]
      if (docType === "post" || docType === "blog") {
        const path = `/blog/${slug}`;
        await revalidatePath(path);
        revalidated.push(path);

        // Optionally revalidate a list index or tag
        // await revalidatePath("/blog");
        // await revalidateTag("blog-list");
      }

      // Example: services at /services/[slug]
      else if (docType === "service") {
        const path = `/services/${slug}`;
        await revalidatePath(path);
        revalidated.push(path);
      }

      // Example: generic pages
      else if (docType === "page") {
        const path = `/${slug}`;
        await revalidatePath(path);
        revalidated.push(path);
      }

      // Add more mappings for your content types...
    } else {
      // If no slug available, you can revalidate by tag or by known routes
      // If you tag caches in your app with fetch(..., { next: { tags: ['posts'] } })
      if (docType) {
        // revalidateTag is useful for collections (it will revalidate pages that use that tag)
        await revalidateTag(docType);
        revalidated.push(`tag:${docType}`);
      }
    }

    return NextResponse.json({ ok: true, revalidated });
  } catch (err) {
    console.error("Webhook handler error:", err);
    return NextResponse.json({ error: "internal error" }, { status: 500 });
  }
}
