import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hello World by Chase Albritton",
  description: "An animated experience to 'Hello World'",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <link
          rel="icon"
          href="/images/helloWorld.png"
          sizes="any"
        />
      </body>
    </html>
  );
}
