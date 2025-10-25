/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https", // Sanity's assets are served over HTTPS.
          hostname: "cdn.sanity.io", // This is the hostname for Sanity's CDN.
          port: "", // Sanity doesn't use a custom port.
          pathname: "/images/**", // Sanity's images follow this path structure.
        },
      ],
    },
};

export default nextConfig;
