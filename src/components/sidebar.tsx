"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
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
import { SocialLinks } from "./social-links";

const navigation = [
  { href: "/", en: "Dashboard", ja: "ホーム", icon: House },
  { href: "/projects", en: "Projects", ja: "プロジェクト", icon: FolderKanban },
  {
    href: "/experience",
    en: "Experience",
    ja: "経験・スキル",
    icon: Milestone,
  },
  { href: "/about", en: "About", ja: "自己紹介", icon: UserRound },
  { href: "/contact", en: "Contact", ja: "お問い合わせ", icon: Send },
];

function Wordmark({ onNavigate }: { onNavigate?: () => void }) {
  const { t } = usePreferences();
  return (
    <Link
      href="/"
      className="wordmark"
      aria-label={t({ en: "Sainbayar home", ja: "Sainbayarのホーム" })}
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
    const mobile = window.matchMedia("(max-width: 860px)");
    const frame = document.getElementById("site-frame");
    const root = document.documentElement;
    if (!open || !mobile.matches) {
      root.removeAttribute("data-portfolio-menu-open");
      if (frame) frame.inert = false;
      return;
    }
    const toggleButton = toggleRef.current;
    root.setAttribute("data-portfolio-menu-open", "");
    if (frame) frame.inert = true;

    const focusable = () =>
      Array.from(
        panelRef.current?.querySelectorAll<HTMLElement>(
          "a[href], button:not([disabled])",
        ) ?? [],
      ).filter((element) => element.getClientRects().length > 0);
    const focusFrame = window.requestAnimationFrame(() =>
      focusable()[0]?.focus(),
    );
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
      if (!mobile.matches) {
        root.removeAttribute("data-portfolio-menu-open");
        if (frame) frame.inert = false;
        setOpen(false);
      }
    };
    window.addEventListener("keydown", keydown);
    mobile.addEventListener("change", resized);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      root.removeAttribute("data-portfolio-menu-open");
      if (frame) frame.inert = false;
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
          aria-label={t({ en: "Open menu", ja: "メニューを開く" })}
          aria-expanded={open}
          aria-controls="portfolio-sidebar"
          onClick={() => setOpen(true)}
        >
          <span>{t({ en: "Menu", ja: "メニュー" })}</span>
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
        aria-label={t({
          en: "Portfolio navigation",
          ja: "ポートフォリオのメニュー",
        })}
        role={open ? "dialog" : undefined}
        aria-modal={open ? true : undefined}
      >
        <div className="sidebar-inner">
          <div className="sidebar-brand-row">
            <Wordmark onNavigate={() => setOpen(false)} />
            <button
              className="sidebar-close"
              aria-label={t({ en: "Close sidebar", ja: "メニューを閉じる" })}
              onClick={() => setOpen(false)}
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>
          <div className="sidebar-identity">
            <div className="sidebar-portrait">
              <Image
                src={profile.photo}
                alt={profile.name}
                width={76}
                height={76}
                unoptimized
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
            aria-label={t({ en: "Main navigation", ja: "メインメニュー" })}
          >
            <p className="sidebar-label">
              {t({ en: "EXPLORE", ja: "ページ一覧" })}
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
            <SocialLinks />
            <div className="sidebar-preferences">
              <button
                className="language-button"
                onClick={toggleLocale}
                aria-label={
                  locale === "en" ? "Switch to Japanese" : "英語に切り替える"
                }
              >
                {locale === "en" ? "EN" : "JP"}
                <span className="language-divider">/</span>
                <span className="muted">{locale === "en" ? "JP" : "EN"}</span>
              </button>
              <button
                className="icon-button theme-button"
                onClick={toggleTheme}
                aria-label={t({
                  en:
                    theme === "dark"
                      ? "Switch to light theme"
                      : "Switch to dark theme",
                  ja:
                    theme === "dark"
                      ? "ライトテーマに切り替える"
                      : "ダークテーマに切り替える",
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
                ja: "好奇心を大切に。丁寧なものづくりを。",
              })}
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
