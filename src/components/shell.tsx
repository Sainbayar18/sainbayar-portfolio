"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { profile } from "@/lib/portfolio";
import { usePreferences } from "./preferences";
const nav = [
  { href: "/", en: "Home", mn: "Нүүр" },
  { href: "/projects", en: "Projects", mn: "Төслүүд" },
  { href: "/experience", en: "Experience", mn: "Туршлага" },
  { href: "/about", en: "About", mn: "Миний тухай" },
  { href: "/contact", en: "Contact", mn: "Холбогдох" },
];
export function Header() {
  const { locale, theme, t, toggleLocale, toggleTheme } = usePreferences();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const escape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, [open]);
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link
          href="/"
          className="wordmark"
          aria-label="Sainbayar home"
          onClick={() => setOpen(false)}
        >
          <span className="brand-symbol">
            s<span>✳</span>
          </span>
          <span>
            sainbayar<span className="accent">.</span>
          </span>
        </Link>
        <nav
          aria-label={t({ en: "Main navigation", mn: "Үндсэн цэс" })}
          className={open ? "main-nav is-open" : "main-nav"}
          id="main-nav"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                item.href === "/contact" ? "mobile-contact" : undefined
              }
              aria-current={
                (
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href)
                )
                  ? "page"
                  : undefined
              }
              onClick={() => setOpen(false)}
            >
              {item[locale]}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="language-button"
            onClick={toggleLocale}
            aria-label={
              locale === "en" ? "Switch to Mongolian" : "Англи хэл рүү солих"
            }
          >
            {locale.toUpperCase()}
            <span className="language-divider">/</span>
            <span className="muted">{locale === "en" ? "MN" : "EN"}</span>
          </button>
          <button
            className="icon-button theme-button"
            onClick={toggleTheme}
            aria-label={t({
              en:
                theme === "dark"
                  ? "Switch to light theme"
                  : "Switch to dark theme",
              mn:
                theme === "dark"
                  ? "Цайвар theme сонгох"
                  : "Бараан theme сонгох",
            })}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Link
            href="/contact"
            className="header-contact"
            onClick={() => setOpen(false)}
          >
            {t({ en: "Let’s talk", mn: "Холбогдох" })}
            <ArrowUpRight size={17} />
          </Link>
          <button
            className="icon-button mobile-toggle"
            aria-expanded={open}
            aria-controls="main-nav"
            aria-label={t({
              en: open ? "Close menu" : "Open menu",
              mn: open ? "Цэс хаах" : "Цэс нээх",
            })}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}
export function Footer() {
  const { t } = usePreferences();
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <p className="eyebrow">
            {t({
              en: "HAVE SOMETHING IN MIND?",
              mn: "ХАМТДАА БҮТЭЭХ САНАА БАЙНА УУ?",
            })}
          </p>
          <Link href="/contact" className="footer-cta">
            {t({ en: "Let’s make it happen.", mn: "Хамтдаа хэрэгжүүлье." })}
            <ArrowUpRight />
          </Link>
        </div>
        <div className="footer-socials">
          <a
            href={profile.upwork.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Upwork <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <a href={profile.utest.url} target="_blank" rel="noopener noreferrer">
            uTest <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          {profile.github ? (
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              GitHub <ArrowUpRight size={14} />
            </a>
          ) : null}
          {profile.linkedin ? (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn <ArrowUpRight size={14} />
            </a>
          ) : null}
          <span className="footer-monogram">
            S<span>✳</span>
          </span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>
          {t({
            en: "Built with intention. And Next.js.",
            mn: "Сэтгэл шингээж, Next.js-ээр бүтээв.",
          })}
        </span>
        <a href="#top">{t({ en: "Back to top", mn: "Дээш буцах" })} ↑</a>
      </div>
    </footer>
  );
}
