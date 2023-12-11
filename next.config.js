/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['m.media-amazon.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ytimg.com',
            },
        ],
    },    
};

module.exports = nextConfig
