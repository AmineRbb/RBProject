// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./footer/footer";
import SideBar from "./component/sidebar";
import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RBB Project",
  description: "Site des tournois",
  icons: {
    icon: "/logoRBB.png"
  }
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className="flex flex-col md:flex-row h-screen w-full">
          <div className="w-full md:w-1/4">
            <SideBar />
          </div>
          <div className="flex flex-col flex-grow w-full md:w-3/4">
            <div className="flex-grow bg-gray-100">
              {children}
            </div>
            <footer className="mt-auto">
              <Footer />
            </footer>
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
