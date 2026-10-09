import type { Metadata } from "next";
import { Preferences } from "@/components/preferences";
import { Header, Footer } from "@/components/shell";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "Sainbayar — Developer & Creative Thinker",
    template: "%s | Sainbayar",
  },
  description:
    "Sainbayar’s personal space on the internet. Thoughtful code, meaningful experiences, and a curious mind.",
  applicationName: "Sainbayar Portfolio",
  icons: { icon: "/icon.svg" },
};
const themeScript = `(function(){try{var t=localStorage.getItem('portfolio-theme-v1');document.documentElement.dataset.theme=t==='light'?'light':'dark'}catch(e){}})()`;
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <div id="top" aria-hidden="true" />
        <Preferences>
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <Header />
          <main id="main-content" className="main-container">
            {children}
          </main>
          <Footer />
        </Preferences>
      </body>
    </html>
  );
}
