import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";
import Navigation from '@/components/Navigation'
import { Providers } from "./providers";
import Footer from '@/components/Footer'
import { siteConfig } from "@/config/site";
import { fontSans, fontText } from "@/config/fonts";
import CartProvider from '../config/CartProvider';

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontText.className,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <CartProvider>
            <div className="relative flex flex-col h-screen">
            
            <Navigation />

            <main className="">
              {children}
            </main>
            
            <Footer />

          </div>
          </CartProvider>
        </Providers>
      </body>
    </html>
  );
}
