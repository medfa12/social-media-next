import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { NavItem } from "./nav-item";
import Image from "next/image";
import { ImageIcon } from "@radix-ui/react-icons";
import AuthProvider from "./AuthProvider";
import { SignInButton } from "@/components/AuthButtons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
    <html lang="en" className="h-full bg-gray-50">
    <body className="h-full bg-gray-50">
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-[60px] items-center border-b px-5">
              <Link
                className="flex items-center gap-2 font-semibold"
                href="/"
              >
                <img className="h-4 w-4"  src="/logo.png" alt='logo' />
                <span className="">MSPACE</span>
              </Link>
            </div>
            <div className="flex-1 overflow-auto py-2">
              <nav className="grid items-start px-4 text-sm font-medium">
                <NavItem href="/about">
                  <img alt="about" src="/abouticon.png" className="h-4 w-4" ></img>
                  about
                </NavItem>
                <NavItem href="/blog">
                  <img src="/blogicon.png" alt="Blog" className="h-4 w-4" />
                  Blog
                </NavItem>
                <NavItem href="/users">
                  <img src="/usersicon.png" alt="Users" className="h-4 w-4" />
                  users
                </NavItem>
                <div className="absolute bottom-10">
                <SignInButton />
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          {/* <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 justify-between lg:justify-end">
            <Link
              className="flex items-center gap-2 font-semibold lg:hidden"
              href="/"
            >
              
              <span className="">Myspace</span>
            </Link>
            
          </header> */}
          {children}
        </div>
      </div>

    </body>
  </html>
  </AuthProvider>
  );
}
