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
        <div className="min-h-screen flex flex-col">
          <div className="md:hidden">
            <SideBar />
          </div>
          
          <div className="flex flex-1">
            <div className="hidden md:block md:w-1/4">
              <SideBar />
            </div>
            
            <main className="flex-1 flex flex-col w-full md:w-3/4">
              <div className="flex-1 bg-gray-100 pt-16 md:pt-0">
                {children}
              </div>
              
              <Footer />
            </main>
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
