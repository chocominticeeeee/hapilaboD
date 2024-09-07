import { Zen_Maru_Gothic } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const FONT = Zen_Maru_Gothic({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
    title: "はぴラボ",
    description: "ライバー事務所　はぴラボ",
};

export default function RootLayout({ children }) {
    return (
        <html lang="ja">
            <Head>
                <meta property="og:title" content="はぴラボ" />
                <meta property="og:description" content="ライバー事務所「はぴラボ」" />
                <meta property="og:image" content="https://example.com/og-image.jpg" />
                <meta property="og:url" content="https://master--hapilabo-d.netlify.app/" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@your_twitter_handle" />
            </Head>
            <body className={FONT.className}>{children}</body>
        </html>
    );
}
