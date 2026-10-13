import type { Metadata } from "next";
import { Preferences } from "@/components/preferences";
import { Header, Footer } from "@/components/shell";
import "./globals.css";
import "./sidebar.css";
import "./dashboard.css";
import "./refinements.css";
export const metadata: Metadata = {
  title: {
    default: "Sainbayar — Developer & Software Tester",
    template: "%s | Sainbayar",
  },
  description:
    "Sainbayar’s portfolio: web development, software testing, projects, and a journey from Mongolia to Japan.",
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
          <div id="site-frame" className="site-frame">
            <main id="main-content" className="main-container" tabIndex={-1}>
              {children}
            </main>
            <Footer />
          </div>
        </Preferences>
      </body>
    </html>
  );
}
