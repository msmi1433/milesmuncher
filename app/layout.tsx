import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import { headers } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MilesMate",
  description:
    "Use our simple search tool to find out where your air miles and points can take you!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const nonce = headers().get("x-nonce");
  return (
    <html lang="en">
      <body id="top" nonce={nonce!} className={`${inter.className} h-screen`}>
        <NavBar />
        <main className="min-h-screen flex flex-col justify-center py-5 px-4 xl:px-32 lg:px-32 bg-bgWhite">
          {children}
        </main>
      </body>
    </html>
  );
}
