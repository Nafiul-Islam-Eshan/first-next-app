/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  // https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAzL3JtNTk3ZGVzaWduLWMtY2hvbmctMDAxLmpwZw.jpg
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.rawpixel.com',
        port: '',
        pathname: '/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAzL3JtNTk3ZGVzaWduLWMtY2hvbmctMDAxLmpwZw.jpg',
        search: '',
      },
    ],
  },
};

export default nextConfig;
