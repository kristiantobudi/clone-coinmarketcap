/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['nextjs.org','images.unsplash.com', 'tailwindui.com', 'via.placeholder.com', 's2.coinmarketcap.com','s3.coinmarketcap.com'],
        dangerouslyAllowSVG: true,
    }
};

export default nextConfig;
