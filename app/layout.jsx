import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col border-2 border-red-500">
        <nav className="bg-black text-white flex p-3 space-x-3 justify-evenly">
          {" "}
          {/* navigation bar*/}
          <Link href="/">Home</Link>
          <Link href="https://www.google.com/maps">map</Link>
          <Link href="/create">+</Link>
          <Link href="/messages">messages</Link>
          <Link href="/profile">profile</Link>
        </nav>
        <main className="flex-1 border-2 border-blue-500">{children}</main>{" "}
        {/* homepage*/}
      </body>
    </html>
  );
}
