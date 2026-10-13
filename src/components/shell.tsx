"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/portfolio";
import { usePreferences } from "./preferences";
export { Sidebar as Header } from "./sidebar";
export function Footer() {
  const { t } = usePreferences();
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <p className="eyebrow">
            {t({
              en: "HAVE SOMETHING IN MIND?",
              ja: "一緒につくりたいものはありますか？",
            })}
          </p>
          <Link href="/contact" className="footer-cta">
            {t({
              en: "Let’s make it happen.",
              ja: "一緒に、かたちにしましょう。",
            })}
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
            ja: "こだわりと、Next.jsでつくりました。",
          })}
        </span>
        <a href="#top">{t({ en: "Back to top", ja: "ページの先頭へ" })} ↑</a>
      </div>
    </footer>
  );
}
