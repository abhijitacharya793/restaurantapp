import type { Metadata } from "next";
import { Inter, Cormorant_Infant, Josefin_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "frontend1",
  description: "Created by @katsuro",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-app-purple`}>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Infant:wght@300;400;500;700&family=Josefin+Sans:wght@100;300;400;500;700&display=swap"
          rel="stylesheet"
        ></link>
        {children}
      </body>
    </html>
  );
}
