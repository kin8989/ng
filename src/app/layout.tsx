import '../styles/globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

const montserrat = localFont({
	src: [
		{
			path: './font/Montserrat-Thin.ttf',
			weight: '100',
			style: 'normal'
		},
		{
			path: './font/Montserrat-ThinItalic.ttf',
			weight: '100',
			style: 'italic'
		},
		{
			path: './font/Montserrat-ExtraLight.ttf',
			weight: '200',
			style: 'normal'
		},
		{
			path: './font/Montserrat-ExtraLightItalic.ttf',
			weight: '200',
			style: 'italic'
		},
		{
			path: './font/Montserrat-Light.ttf',
			weight: '300',
			style: 'normal'
		},
		{
			path: './font/Montserrat-LightItalic.ttf',
			weight: '300',
			style: 'italic'
		},
		{
			path: './font/Montserrat-Regular.ttf',
			weight: '400',
			style: 'normal'
		},
		{
			path: './font/Montserrat-Italic.ttf',
			weight: '400',
			style: 'italic'
		},
		{
			path: './font/Montserrat-Medium.ttf',
			weight: '500',
			style: 'normal'
		},
		{
			path: './font/Montserrat-MediumItalic.ttf',
			weight: '500',
			style: 'italic'
		},
		{
			path: './font/Montserrat-SemiBold.ttf',
			weight: '600',
			style: 'normal'
		},
		{
			path: './font/Montserrat-SemiBoldItalic.ttf',
			weight: '600',
			style: 'italic'
		},
		{
			path: './font/Montserrat-Bold.ttf',
			weight: '700',
			style: 'normal'
		},
		{
			path: './font/Montserrat-BoldItalic.ttf',
			weight: '700',
			style: 'italic'
		},
		{
			path: './font/Montserrat-ExtraBold.ttf',
			weight: '800',
			style: 'normal'
		},
		{
			path: './font/Montserrat-ExtraBoldItalic.ttf',
			weight: '800',
			style: 'italic'
		},
		{
			path: './font/Montserrat-Black.ttf',
			weight: '900',
			style: 'normal'
		},
		{
			path: './font/Montserrat-BlackItalic.ttf',
			weight: '900',
			style: 'italic'
		}
	],
	variable: '--font-montserrat',
	display: 'swap',
	preload: true
})

const baseUrl = 'https://fimi.tech'
const description =
	'nextgrowth sales platform, power by FIMI. Copyright © FIMI Tech Co., Ltd, all right reserved.'

export const metadata: Metadata = {
	title: {
		default: 'nextgrowth',
		template: 'nextgrowth x %s'
	},
	description,
	metadataBase: new URL(baseUrl),
	openGraph: {
		title: { default: 'nextgrowth', template: 'nextgrowth x %s' },
		description,
		url: baseUrl,
		images: [
			{
				url: '/metadata/og.png',
				width: 1200,
				height: 630,
				alt: 'Đăng ký tài khoản'
			}
		]
	},
	twitter: {
		card: 'summary_large_image',
		title: { default: 'nextgrowth', template: 'nextgrowth x %s' },
		description,
		images: ['/metadata/og.png']
	},
	icons: {
		icon: [
			{
				media: '(prefers-color-scheme: light)',
				url: '/favico/favicon.ico'
			},
			{
				media: '(prefers-color-scheme: dark)',
				url: '/favico/favicon.ico'
			}
		]
	},
	robots: {
		index: true,
		follow: true,
		googleBot: { index: true, follow: true }
	},
	keywords: [
		'nextgrowth',
		'đăng ký tài khoản',
		'vay tiêu dùng',
		'affiliate marketing'
	]
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='en'
			translate='no'
			className={`${montserrat.variable} ${montserrat.className}`}
		>
			<body>{children}</body>
		</html>
	)
}
