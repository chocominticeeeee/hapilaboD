import { Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";

const FONT = Zen_Maru_Gothic({ subsets: ["latin"], weight: ["400"] });

const metaTitle = "ライバー事務所「ハピラボ」  スキマ時間にライブ配信！ ";
const metaDescription = "【ハピラボ】は、家事・育児を頑張るあなたを応援するライブ配信事務所です。";

export const metadata = {
    metadataBase: new URL("https://master--hapilabo-d.netlify.app/"),
    title: metaTitle,
    description: metaDescription,
    openGraph: {
        type: "website",
        url: "https://master--hapilabo-d.netlify.app/",
        title: metaTitle,
        description: metaDescription,
        images: [
            {
                url: "/OGP1.webp",
                width: 1200,
                height: 630,
                alt: "ライバー事務所「ハピラボ」",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: metaTitle,
        description: metaDescription,
        images: ["/OGP1.webp"],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="ja">
            <body className={FONT.className}>{children}</body>
        </html>
    );
}
