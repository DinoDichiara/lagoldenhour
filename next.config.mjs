/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/lagoldenhour", // cambia "beauty" por la ruta que quieras
  images: {
    unoptimized: true, // requerido con output: export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

export default nextConfig;
