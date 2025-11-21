export const contact = {
    name: "contact",
    title: "Contact",
    type: "document",
    fields:[
 {
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      description: 'Main heading for the contact section (e.g. "Get in Touch With Us")',
    },
    {
      name: "sectionSubtitle",
      title: "Section Subtitle",
      type: "text",
      rows: 3,
      description: "Short description shown under the heading.",
    },
    {
      name: "contactItems",
      title: "Contact Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
              description: "Heading for the contact item (e.g., Phone, Email, Head Office).",
            },
            {
              name: "detail",
              title: "Detail",
              type: "string",
              description: "Information or value (e.g., +92 347 1234567 or support@example.com).",
            },
            {
              name: "icon",
              title: "Icon",
              type: "string",
              description:
                "Enter the Lucide icon name (e.g., 'Phone', 'Mail', 'MapPin', 'Globe'). Use names from lucide-react.",
            },
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "detail",
              icon: "icon",
            },
            prepare({ title, subtitle, icon }) {
              return {
                title: `${title} (${icon || "No Icon"})`,
                subtitle,
              };
            },
          },
        },
      ],
    },
     {
      name: "secondTitle",
      title: "Second Title",
      type: "string",
      description: 'Second Title Near Contact Form")',
    },
    {
      name: "description",
      title: "Section Subtitle",
      type: "text",
      rows: 3,
      description: "Description Below second title near Contact Form",
    },
    {
      name: "number",
      title: "Phone Number",
      type: "string",
      description: 'Phone Number Below Second title',
    },
    {
      name: "emailAddress",
      title: "Section Title",
      type: "string",
      description: 'Email Address Below Second Title")',
    },
    {
      name: 'facebook',
      title: 'Facebook URL',
      type: 'url',
    },
    {
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url',
    },
    {
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
    }
    ]
}