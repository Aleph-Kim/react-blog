import "./globals.css";
import Link from "next/link";

export const metadata: { title: string } = {
    title: 'react blog'
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko" data-theme="dark">
            <body>
                <div className="navbar bg-base-100 flex justify-between">
                    <Link href="/" className="btn btn-ghost text-xl">홈</Link>
                    <Link href="/write" className="btn btn-ghost text-xl">글 작성</Link>
                </div>
                <div className="p-5">
                    {children}
                </div>
            </body>
        </html>
    );
}
