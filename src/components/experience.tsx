"use client";

import {
  ArrowUpRight,
  Award,
  Braces,
  Bug,
  GraduationCap,
  Terminal,
  Workflow,
} from "lucide-react";
import { stack } from "@/lib/portfolio";
import { usePreferences } from "./preferences";
import { PlatformSwitcher } from "./platform-switcher";

const timeline = [
  {
    date: { en: "APR 2026 — PRESENT", ja: "2026年4月 — 現在" },
    title: {
      en: "Freelance software testing",
      ja: "フリーランスのソフトウェアテスト",
    },
    company: { en: "Upwork · uTest", ja: "Upwork · uTest" },
    description: {
      en: "Hands-on testing across web apps, iOS apps, a Japanese-learning Chrome extension, and a Steam puzzle game. Clear bug reports, usability feedback, and test evidence.",
      ja: "Webアプリ、iOSアプリ、日本語学習用のChrome拡張機能、Steamのパズルゲームなどをテスト。再現手順を含む不具合報告、使いやすさへのフィードバック、テスト結果の記録を行っています。",
    },
    tags: ["Manual QA", "Usability", "Web & mobile"],
    icon: Bug,
  },
  {
    date: { en: "OCT 2025 — PRESENT", ja: "2025年10月 — 現在" },
    title: { en: "Software Engineer", ja: "ソフトウェアエンジニア" },
    company: { en: "Co-Graph", ja: "Co-Graph" },
    description: {
      en: "Growing my software development experience in Japan, with a focus on learning, collaboration, and practical development.",
      ja: "日本でソフトウェア開発の経験を積みながら、学び、チームでの協働、実践的な開発に取り組んでいます。",
    },
    tags: ["Software development", "Japan"],
    icon: Terminal,
  },
  {
    date: { en: "2025 — 2026", ja: "2025年 — 2026年" },
    title: {
      en: "Bachelor’s degree in Computer Science",
      ja: "コンピュータサイエンス学士",
    },
    company: { en: "IET", ja: "IET" },
    description: {
      en: "Studied Computer Science at IET from 2025 to 2026 and earned a bachelor’s degree.",
      ja: "2025年から2026年までIETでコンピュータサイエンスを学び、学士号を取得しました。",
    },
    tags: ["Computer science", "Bachelor’s degree"],
    icon: GraduationCap,
  },
  {
    date: { en: "2020 — 2025", ja: "2020年 — 2025年" },
    title: {
      en: "Associate Bachelor in Computer Science",
      ja: "コンピュータサイエンス（Associate Bachelor）",
    },
    company: {
      en: "Mongol Kosen Technology College",
      ja: "モンゴル高専",
    },
    description: {
      en: "Studied Computer Science at Mongol Kosen Technology College from 2020 to 2025, graduating with an Associate Bachelor degree in 2025.",
      ja: "2020年から2025年までモンゴル高専でコンピュータサイエンスを専攻し、2025年にAssociate Bachelorの学位を取得して卒業しました。",
    },
    tags: ["Computer science", "Associate Bachelor"],
    icon: GraduationCap,
  },
];
const skills = [
  {
    title: { en: "Frontend", ja: "フロントエンド" },
    icon: Braces,
    items: {
      en: [
        "React & Next.js interfaces",
        "Responsive HTML and CSS",
        "JavaScript & TypeScript",
      ],
      ja: [
        "React・Next.jsによるUI開発",
        "HTML・CSSによるレスポンシブ対応",
        "JavaScript・TypeScript",
      ],
    },
  },
  {
    title: { en: "Quality assurance", ja: "品質保証・QA" },
    icon: Bug,
    items: {
      en: [
        "Manual web & mobile testing",
        "Usability feedback and UAT",
        "Bug reports with reproduction steps",
      ],
      ja: [
        "Web・モバイルの手動テスト",
        "ユーザビリティ評価・ユーザー受け入れテスト",
        "再現手順を含む不具合報告",
      ],
    },
  },
  {
    title: { en: "Programming", ja: "プログラミング" },
    icon: Terminal,
    items: {
      en: [
        "Java & Python fundamentals",
        "Problem solving through projects",
        "Exploring AI and data science",
      ],
      ja: [
        "Java・Pythonの基礎",
        "プロジェクトを通じた課題解決",
        "AI・データサイエンスの学習",
      ],
    },
  },
  {
    title: { en: "Tools & workflow", ja: "ツール・ワークフロー" },
    icon: Workflow,
    items: {
      en: [
        "Git & GitHub version control",
        "Linux fundamentals",
        "Vite, Firebase & Vercel",
      ],
      ja: [
        "Git・GitHubによるバージョン管理",
        "Linuxの基礎",
        "Vite・Firebase・Vercel",
      ],
    },
  },
];
const certifications = [
  {
    title: "Information Security",
    issuer: "freeCodeCamp",
    year: "2026",
    url: "https://www.freecodecamp.org/certification/fccd5bb7ae0-2ee3-4db7-a7a8-6ed8222112b4/information-security-v7",
    code: "SEC",
  },
  {
    title: "Legacy Responsive Web Design V8",
    issuer: "freeCodeCamp",
    year: "2026",
    url: "https://www.freecodecamp.org/certification/fccd5bb7ae0-2ee3-4db7-a7a8-6ed8222112b4/responsive-web-design",
    code: "RWD",
  },
  {
    title: "Succeed in the Age of AI",
    issuer: "Dr. Angela Yu · Udemy",
    year: "2026",
    url: "https://ude.my/UC-d156e518-681b-4497-aa95-18cd85fed8cf",
    code: "AI",
  },
  {
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    year: "2024",
    url: "https://www.credly.com/badges/715b3a47-dab9-493b-9e94-5595d1540d88/print",
    code: "NET",
  },
];

export function Experience() {
  const { t, locale } = usePreferences();
  return (
    <div className="page-content dashboard-page">
      <div className="dashboard-heading">
        <p className="eyebrow">
          {t({ en: "THE ROAD SO FAR", ja: "これまでの歩み" })}
        </p>
        <h1>
          {t({ en: "Experience", ja: "経験・スキル" })}
          <span className="accent">.</span>
        </h1>
        <p>
          {t({
            en: "My journey, the skills I’m building, and the tools I work with.",
            ja: "これまでの歩み、磨いているスキル、日々使っているツールをご紹介します。",
          })}
        </p>
      </div>
      <div className="experience-dashboard">
        <div className="experience-main">
          <section className="dashboard-card journey-panel">
            <div className="card-heading">
              <h2>{t({ en: "My Journey", ja: "これまでの歩み" })}</h2>
              <span className="card-kicker">01 /</span>
            </div>
            <div className="career-timeline">
              {timeline.map((item) => (
                <article key={item.company.en}>
                  <span className="timeline-node">
                    <item.icon size={16} aria-hidden="true" />
                  </span>
                  <span className="timeline-date">{t(item.date)}</span>
                  <h3>{t(item.title)}</h3>
                  <p className="timeline-company">{t(item.company)}</p>
                  <p className="timeline-description">{t(item.description)}</p>
                  <div className="tag-list">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
          <section className="dashboard-card">
            <div className="card-heading">
              <h2>{t({ en: "Skills", ja: "スキル" })}</h2>
              <span className="card-kicker">02 /</span>
            </div>
            <div className="skills-dashboard">
              {skills.map((skill) => (
                <article key={skill.title.en}>
                  <skill.icon size={21} aria-hidden="true" />
                  <h3>{t(skill.title)}</h3>
                  <ul>
                    {skill.items[locale].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        </div>
        <aside className="experience-rail">
          <PlatformSwitcher />
          <section className="dashboard-card current-stack">
            <div className="card-heading">
              <h2>{t({ en: "Current Stack", ja: "使用している技術" })}</h2>
              <span className="card-kicker">03 /</span>
            </div>
            <p className="card-description">
              {t({
                en: "What I’m building with right now.",
                ja: "現在の開発で使用している技術です。",
              })}
            </p>
            <div className="stack-chips">
              {stack.map((name, i) => (
                <span key={name}>
                  <i aria-hidden="true">
                    {["N", "⚛", "TS", "JS", "〈〉", "#", "◇", "▲"][i]}
                  </i>
                  {name}
                </span>
              ))}
            </div>
          </section>
          <section className="dashboard-card certifications">
            <div className="card-heading">
              <h2>{t({ en: "Certifications", ja: "修了証・認定" })}</h2>
              <Award size={19} aria-hidden="true" />
            </div>
            <p className="card-description">
              {t({
                en: "Courses completed. Learning continues.",
                ja: "修了したコースをご紹介します。学びはこれからも続きます。",
              })}
            </p>
            {certifications.map((cert) => (
              <a
                key={cert.code}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate"
              >
                <span className="certificate-icon">{cert.code}</span>
                <div>
                  <h3>{cert.title}</h3>
                  <p>
                    {cert.issuer} · {cert.year}
                  </p>
                </div>
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            ))}
          </section>
        </aside>
      </div>
    </div>
  );
}
