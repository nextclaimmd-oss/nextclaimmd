import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

import { createClient } from "next-sanity";

if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
  console.warn("❌ Missing NEXT_PUBLIC_SANITY_PROJECT_ID");
}

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "ocfze6yd" ,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-02-19",
  useCdn: true,
});
