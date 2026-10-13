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
    date: { en: "APR 2026 — PRESENT", mn: "2026.04 — ОДОО" },
    title: { en: "Freelance software testing", mn: "Фриланс программын тест" },
    company: "Upwork · uTest",
    description: {
      en: "Hands-on testing across web apps, iOS apps, a Japanese-learning Chrome extension, and a Steam puzzle game. Clear bug reports, usability feedback, and test evidence.",
      mn: "Вэб, iOS апп, япон хэл сурах Chrome өргөтгөл болон Steam тоглоомын тест. Алдааны тайлан, хэрэглээний санал, тестийн нотолгоо бэлтгэсэн.",
    },
    tags: ["Manual QA", "Usability", "Web & mobile"],
    icon: Bug,
  },
  {
    date: { en: "OCT 2025 — PRESENT", mn: "2025.10 — ОДОО" },
    title: { en: "Software Engineer", mn: "Программ хангамжийн инженер" },
    company: "Co-Graph",
    description: {
      en: "Growing my software development experience in Japan, with a focus on learning, collaboration, and practical development.",
      mn: "Японд программ хөгжүүлэлтийн туршлагаа нэмэгдүүлж, суралцах, хамтран ажиллах, бодит хөгжүүлэлтэд төвлөрч байна.",
    },
    tags: ["Software development", "Japan"],
    icon: Terminal,
  },
  {
    date: { en: "2025 — 2026", mn: "2025 — 2026" },
    title: { en: "Computer science studies", mn: "Компьютерын ухааны сургалт" },
    company: "IET",
    description: {
      en: "Computer science studies alongside practical projects and continued learning in web development, programming, and AI.",
      mn: "Компьютерын ухааны сургалттай зэрэгцэн бодит төсөл хийж, вэб хөгжүүлэлт, программчлал, хиймэл оюуны чиглэлээр суралцаж байна.",
    },
    tags: ["Computer science", "Learning"],
    icon: GraduationCap,
  },
];
const skills = [
  {
    title: { en: "Frontend", mn: "Вэб интерфэйс" },
    icon: Braces,
    items: {
      en: [
        "React & Next.js interfaces",
        "Responsive HTML and CSS",
        "JavaScript & TypeScript",
      ],
      mn: [
        "React, Next.js интерфэйс",
        "Responsive HTML, CSS",
        "JavaScript, TypeScript",
      ],
    },
  },
  {
    title: { en: "Quality assurance", mn: "Чанарын шалгалт" },
    icon: Bug,
    items: {
      en: [
        "Manual web & mobile testing",
        "Usability feedback and UAT",
        "Bug reports with reproduction steps",
      ],
      mn: [
        "Вэб, гар утасны manual тест",
        "Хэрэглээний санал болон UAT",
        "Дахин давтах алхамтай алдааны тайлан",
      ],
    },
  },
  {
    title: { en: "Programming", mn: "Программчлал" },
    icon: Terminal,
    items: {
      en: [
        "Java & Python fundamentals",
        "Problem solving through projects",
        "Exploring AI and data science",
      ],
      mn: [
        "Java, Python суурь мэдлэг",
        "Төсөл дээр асуудал шийдвэрлэх",
        "AI, өгөгдлийн шинжлэх ухаан судлах",
      ],
    },
  },
  {
    title: { en: "Tools & workflow", mn: "Хэрэгсэл, ажлын явц" },
    icon: Workflow,
    items: {
      en: [
        "Git & GitHub version control",
        "Linux fundamentals",
        "Vite, Firebase & Vercel",
      ],
      mn: [
        "Git, GitHub хувилбарын удирдлага",
        "Linux суурь мэдлэг",
        "Vite, Firebase, Vercel",
      ],
    },
  },
];
const certifications = [
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
          {t({ en: "THE ROAD SO FAR", mn: "МИНИЙ ЗАМНАЛ" })}
        </p>
        <h1>
          {t({ en: "Experience", mn: "Туршлага" })}
          <span className="accent">.</span>
        </h1>
        <p>
          {t({
            en: "My journey, the skills I’m building, and the tools I work with.",
            mn: "Миний замнал, хөгжүүлж буй ур чадвар, ашигладаг хэрэгслүүд.",
          })}
        </p>
      </div>
      <div className="experience-dashboard">
        <div className="experience-main">
          <section className="dashboard-card journey-panel">
            <div className="card-heading">
              <h2>{t({ en: "My Journey", mn: "Миний замнал" })}</h2>
              <span className="card-kicker">01 /</span>
            </div>
            <div className="career-timeline">
              {timeline.map((item) => (
                <article key={item.company}>
                  <span className="timeline-node">
                    <item.icon size={16} aria-hidden="true" />
                  </span>
                  <span className="timeline-date">{t(item.date)}</span>
                  <h3>{t(item.title)}</h3>
                  <p className="timeline-company">{item.company}</p>
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
              <h2>{t({ en: "Skills", mn: "Ур чадвар" })}</h2>
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
              <h2>{t({ en: "Current Stack", mn: "Одоогийн stack" })}</h2>
              <span className="card-kicker">03 /</span>
            </div>
            <p className="card-description">
              {t({
                en: "What I’m building with right now.",
                mn: "Одоо ашиглаж буй технологиуд.",
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
              <h2>{t({ en: "Certifications", mn: "Сертификатууд" })}</h2>
              <Award size={19} aria-hidden="true" />
            </div>
            <p className="card-description">
              {t({
                en: "Courses completed. Learning continues.",
                mn: "Дуусгасан сургалтууд. Суралцах зам үргэлжилнэ.",
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
