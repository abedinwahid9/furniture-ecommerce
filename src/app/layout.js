import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProviderCom from "@/components/share/ThemeProviderCom/ThemeProviderCom";

import Header from "@/components/share/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Furniture BD",
  description: "furniture BD shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProviderCom>
          <div className="container mx-auto robotoFont">
            <Header>{children}</Header>
          </div>
        </ThemeProviderCom>
      </body>
    </html>
  );
}
