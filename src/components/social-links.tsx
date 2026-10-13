"use client";

import { Instagram, Linkedin } from "./brand-icons";
import { profile } from "@/lib/portfolio";
import { usePreferences } from "./preferences";

export function SocialLinks() {
  const { t } = usePreferences();
  const items = [
    {
      name: "Upwork",
      href: profile.upwork.url,
      icon: <span className="social-up">up</span>,
    },
    {
      name: "uTest",
      href: profile.utest.url,
      icon: (
        <span className="social-ut">
          u<span>✓</span>
        </span>
      ),
    },
    { name: "LinkedIn", href: profile.linkedin, icon: <Linkedin size={18} /> },
    {
      name: "Instagram",
      href: profile.instagram,
      icon: <Instagram size={19} />,
    },
    {
      name: "X",
      href: profile.x,
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l7.8-9L.8 2h6.5l5.9 7.8L18.9 2Zm-1.1 18h1.7L6.3 3.9H4.5L17.8 20Z" />
        </svg>
      ),
    },
  ];
  return (
    <div
      className="social-icons"
      aria-label={t({ en: "Social profiles", mn: "Сошиал профайлууд" })}
    >
      {items.map((item) =>
        item.href ? (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
            title={item.name}
          >
            <span aria-hidden="true">{item.icon}</span>
          </a>
        ) : (
          <span
            key={item.name}
            className="social-placeholder"
            role="img"
            aria-label={`${item.name} — ${t({ en: "link coming soon", mn: "линк удахгүй нэмэгдэнэ" })}`}
            title={`${item.name} — ${t({ en: "link coming soon", mn: "линк удахгүй нэмэгдэнэ" })}`}
          >
            <span aria-hidden="true">{item.icon}</span>
          </span>
        ),
      )}
    </div>
  );
}
