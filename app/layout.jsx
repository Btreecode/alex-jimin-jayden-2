import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "../components/nav";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const noto = Noto_Sans({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={noto.className}>
      <body className="h-screen flex flex-col border-2">
        <main className="flex-1 border-2 overflow-y-auto">{children}</main>
        <Navigation />
      </body>
    </html>
  );
}
