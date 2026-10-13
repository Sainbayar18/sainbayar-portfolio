"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  FolderKanban,
  House,
  MapPin,
  Menu,
  Milestone,
  Moon,
  Send,
  Sun,
  UserRound,
  X,
} from "lucide-react";
import { profile } from "@/lib/portfolio";
import { usePreferences } from "./preferences";

const navigation = [
  { href: "/", en: "Home", mn: "Нүүр", icon: House },
  { href: "/projects", en: "Projects", mn: "Төслүүд", icon: FolderKanban },
  { href: "/experience", en: "Experience", mn: "Туршлага", icon: Milestone },
  { href: "/about", en: "About", mn: "Миний тухай", icon: UserRound },
  { href: "/contact", en: "Contact", mn: "Холбогдох", icon: Send },
];

function Wordmark({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <Link
      href="/"
      className="wordmark"
      aria-label="Sainbayar home"
      onClick={onNavigate}
    >
      <span className="brand-symbol">
        s<span>✳</span>
      </span>
      <span>
        sainbayar<span className="accent">.</span>
      </span>
    </Link>
  );
}

export function Sidebar() {
  const { locale, theme, t, toggleLocale, toggleTheme } = usePreferences();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const mobile = window.matchMedia("(max-width: 860px)");
    if (!mobile.matches) return;
    const toggleButton = toggleRef.current;
    const frame = document.getElementById("site-frame");
    const previousOverflow = document.body.style.overflow;
    const previousInert = frame?.inert ?? false;
    document.body.style.overflow = "hidden";
    if (frame) frame.inert = true;

    const focusable = () =>
      Array.from(
        panelRef.current?.querySelectorAll<HTMLElement>(
          "a[href], button:not([disabled])",
        ) ?? [],
      ).filter((element) => element.getClientRects().length > 0);
    const focusFrame = window.requestAnimationFrame(() => focusable()[0]?.focus());
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
      }
      if (event.key !== "Tab") return;
      const elements = focusable();
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (!first || !last) return;
      if (!panelRef.current?.contains(document.activeElement)) {
        event.preventDefault();
        first.focus();
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    const resized = () => {
      if (!mobile.matches) setOpen(false);
    };
    window.addEventListener("keydown", keydown);
    mobile.addEventListener("change", resized);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      if (frame) frame.inert = previousInert;
      window.removeEventListener("keydown", keydown);
      mobile.removeEventListener("change", resized);
      if (mobile.matches) toggleButton?.focus();
    };
  }, [open]);

  return (
    <>
      <header className="mobile-topbar" inert={open}>
        <Wordmark />
        <button
          ref={toggleRef}
          className="sidebar-menu-toggle"
          aria-label={t({ en: "Open menu", mn: "Цэс нээх" })}
          aria-expanded={open}
          aria-controls="portfolio-sidebar"
          onClick={() => setOpen(true)}
        >
          <span>{t({ en: "Menu", mn: "Цэс" })}</span>
          <Menu size={20} aria-hidden="true" />
        </button>
      </header>
      {open ? (
        <button
          className="sidebar-backdrop"
          aria-hidden="true"
          tabIndex={-1}
          onClick={() => setOpen(false)}
        />
      ) : null}
      <aside
        ref={panelRef}
        id="portfolio-sidebar"
        className={open ? "portfolio-sidebar is-open" : "portfolio-sidebar"}
        aria-label={t({ en: "Portfolio navigation", mn: "Portfolio цэс" })}
        role={open ? "dialog" : undefined}
        aria-modal={open ? true : undefined}
      >
        <div className="sidebar-inner">
          <div className="sidebar-brand-row">
            <Wordmark onNavigate={() => setOpen(false)} />
            <button
              className="sidebar-close"
              aria-label={t({ en: "Close sidebar", mn: "Sidebar хаах" })}
              onClick={() => setOpen(false)}
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>
          <div className="sidebar-identity">
            <div className="sidebar-portrait">
              <Image
                src={profile.utest.photo}
                alt={profile.name}
                width={76}
                height={76}
              />
              <span aria-hidden="true">✳</span>
            </div>
            <p className="sidebar-owner">
              {profile.name}
              <span className="accent">.</span>
            </p>
            <p className="sidebar-role">{t(profile.role)}</p>
            <p className="sidebar-location">
              <MapPin size={13} aria-hidden="true" />
              {t(profile.utest.location)}
            </p>
          </div>
          <nav
            className="sidebar-nav"
            aria-label={t({ en: "Main navigation", mn: "Үндсэн цэс" })}
          >
            <p className="sidebar-label">
              {t({ en: "EXPLORE", mn: "ХУУДСУУД" })}
            </p>
            {navigation.map((item, index) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  <item.icon size={18} aria-hidden="true" />
                  <span>{item[locale]}</span>
                  <span className="sidebar-nav-index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </Link>
              );
            })}
          </nav>
          <div className="sidebar-bottom">
            <div className="sidebar-platforms">
              <a
                href={profile.upwork.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Upwork <ArrowUpRight size={14} aria-hidden="true" />
              </a>
              <a
                href={profile.utest.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                uTest <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
            <div className="sidebar-preferences">
              <button
                className="language-button"
                onClick={toggleLocale}
                aria-label={
                  locale === "en"
                    ? "Switch to Mongolian"
                    : "Англи хэл рүү солих"
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
                {theme === "dark" ? (
                  <Sun size={18} aria-hidden="true" />
                ) : (
                  <Moon size={18} aria-hidden="true" />
                )}
              </button>
            </div>
            <p className="sidebar-signoff">
              {t({
                en: "A curious mind. A considered build.",
                mn: "Сониуч сэтгэлгээ. Нямбай бүтээл.",
              })}
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
