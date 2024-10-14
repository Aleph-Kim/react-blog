import "./globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko" data-theme="dark">
            <body>
                {children}
            </body>
        </html>
    );
}
