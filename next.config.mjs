/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",
  images: {
    unoptimized: true, // wajib jika kamu pakai <Image />
  },
};

export default nextConfig;
