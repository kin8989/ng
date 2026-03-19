import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	devIndicators: false,
	output: 'standalone',
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'fimi-dev.s3.amazonaws.com'
			},
			{
				protocol: 'https',
				hostname: 'cdn-icons-png.flaticon.com'
			},
			{
				protocol: 'https',
				hostname: 'img.youtube.com'
			}
		]
	},
	redirects: async () => [
		{
			source: '/',
			destination: '/',
			permanent: true
		}
	]
}

export default nextConfig
