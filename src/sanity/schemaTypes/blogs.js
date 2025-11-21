export const blogs = {
  name: "blogs",
  title: "Blogs",
  type: "document",
  fields: [
       {
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      
    },
    {
      name: "Metadescription",
      title: "Meta Description",
      type: "text",
      description:
        "Short description for SEO (recommended: 140 to 160 characters)",
     
    },
    {
      name: "title",
      title: "Blog Title",
      type: "string",
      description: "Enter the main title of the blog post.",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      description: "Automatically generated from the blog title.",
    },
    {
      name: "mainImage",
      title: "Blog Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Upload the main image shown at the top of the blog.",
    },
    {
      name: "overview",
      title: "Blog Overview",
      type: "array",
      of: [{ type: "block" }],
      description: "A short summary or introduction for the blog post.",
    },
    {
      name: "content",
      title: "Blog Content",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alternative Text",
              type: "string",
              description: "Describe the image for accessibility and SEO.",
            },
          ],
        },
      ],
      description: "Main body content of the blog (supports text and images).",
    },
  ],
};
