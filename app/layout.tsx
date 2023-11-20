import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

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
  return (
    <html lang="en">
      <body
        id="top"
        className={`flex flex-col justify-center${inter.className} py-5 px-4 xl:p-16 h-screen bg-bgWhite`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
