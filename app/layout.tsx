import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kitulu PAG Church",
  description:
    "Welcome to Kitulu PAG Church - A place of worship, fellowship, and growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <AnimatePresence mode="wait">
          <main className="flex-grow">{children}</main>
        </AnimatePresence>
        <Footer />
      </body>
    </html>
  );
}
