import { Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";

const FONT = Zen_Maru_Gothic({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
	metadataBase: new URL('https://master--hapilabo-d.netlify.app/'),
	title: 'ライバー事務所「ハピラボ」',
	description: 'ライバー事務所「ハピラボ」',
	openGraph: {
		type: 'website',
		url: 'https://master--hapilabo-d.netlify.app/',
		title: 'ライバー事務所「ハピラボ」',
		description: 'ライバー事務所「ハピラボ」',
		images: [
			{
				url: '/OGP1.webp',
				width: 1200,
				height: 630,
				alt: 'ライバー事務所「ハピラボ」',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'ライバー事務所「ハピラボ」',
		description: 'ライバー事務所「ハピラボ」',
		images: ['/OGP1.webp'],
	},
};


export default function RootLayout({ children }) {
    return (
        <html lang="ja">
            <body className={FONT.className}>{children}</body>
        </html>
    );
}
