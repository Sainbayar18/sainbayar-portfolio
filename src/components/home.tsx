"use client";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Sparkles,
  Layers3,
} from "lucide-react";
import { profile, projects, stack } from "@/lib/portfolio";
import { usePreferences } from "./preferences";
import { OrbitArt } from "./visuals";
import { ProjectCard } from "./project-card";
export function Home() {
  const { t, locale } = usePreferences();
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="tiny-dot" />
            {t({
              en: "A PERSONAL SPACE ON THE INTERNET",
              mn: "МИНИЙ ДИЖИТАЛ ОРОН ЗАЙ",
            })}
          </p>
          <p className="hero-intro">
            {t({ en: "Hey there, I’m", mn: "Сайн уу, намайг" })}{" "}
            <span>{profile.name}</span>
            {locale === "mn" ? " гэдэг." : "."}
            <span className="wave">✳</span>
          </p>
          <h1>
            {locale === "en" ? (
              <>
                Thoughtful code.
                <br />
                <span className="hero-serif">Meaningful</span>
                <br />
                experiences<span className="accent">.</span>
              </>
            ) : (
              <>
                Санаанаас
                <br />
                <span className="hero-serif">Үнэ цэнтэй</span>
                <br />
                бүтээл рүү<span className="accent">.</span>
              </>
            )}
          </h1>
          <p className="hero-description">
            {t({
              en: "A curious mind with a love for clean interfaces and considered details. Learning, building, and making the web feel a little more human.",
              mn: "Цэвэрхэн интерфэйс, нямбай шийдэлд дуртай бүтээлч сэтгэлгээ. Суралцаж, бүтээж, вэбийг хүнд илүү ойр болгоно.",
            })}
          </p>
          <div className="hero-buttons">
            <Link href="/projects" className="button button-primary">
              {t({ en: "Explore my work", mn: "Бүтээлүүдийг үзэх" })}
              <ArrowUpRight size={19} />
            </Link>
            <Link href="/about" className="text-link">
              {t({ en: "A little about me", mn: "Миний тухай" })}
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
        <OrbitArt />
        <div className="hero-bottom">
          <span>{t(profile.role)}</span>
          <a href="#selected-work">
            {t({ en: "SCROLL TO EXPLORE", mn: "ДООШ ҮЗЭХ" })}
            <ArrowDown size={15} />
          </a>
          <span className="hero-bottom-note">
            {t({
              en: "INDEPENDENT MIND. OPEN POSSIBILITIES.",
              mn: "БҮТЭЭЛЧ СЭТГЭЛГЭЭ. ШИНЭ БОЛОМЖ.",
            })}
          </span>
        </div>
      </section>
      <section className="stack-strip" aria-label="Technology stack">
        <span className="eyebrow">
          {t({ en: "TOOLS I BUILD WITH", mn: "БҮТЭЭХ ХЭРЭГСЛҮҮД" })}
        </span>
        <div>
          {stack.map((name, i) => (
            <span key={name}>
              <span className="stack-icon">
                {["N", "⚛", "TS", "#", "⑂", "◈"][i]}
              </span>
              {name}
            </span>
          ))}
        </div>
      </section>
      <section className="section" id="selected-work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span className="section-index">01 /</span>
              {t({ en: "MADE WITH INTENTION", mn: "СЭТГЭЛ ШИНГЭСЭН БҮТЭЭЛ" })}
            </p>
            <h2>
              {t({ en: "Selected work", mn: "Онцлох бүтээлүүд" })}
              <span className="heading-dot">.</span>
            </h2>
          </div>
          <Link href="/projects" className="text-link">
            {t({ en: "All projects", mn: "Бүх төсөл" })}
            <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="project-grid">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      <section className="about-preview section">
        <div>
          <p className="eyebrow">
            <span className="section-index">02 /</span>
            {t({ en: "MORE THAN THE CODE", mn: "КОДЫН ЦААНА" })}
          </p>
          <h2>
            {t({ en: "Curious by nature.", mn: "Сониуч зан." })}
            <br />
            <span className="hero-serif">
              {t({ en: "Creative by choice.", mn: "Бүтээлч сонголт." })}
            </span>
          </h2>
          <Link href="/about" className="text-link">
            {t({ en: "Get to know me", mn: "Надтай танилцах" })}
            <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="about-preview-copy">
          <p>{t(profile.bio)}</p>
          <div className="value-list">
            {[
              {
                icon: Braces,
                en: "Build with purpose",
                mn: "Зорилготой бүтээх",
              },
              {
                icon: Layers3,
                en: "Care for the details",
                mn: "Нарийн зүйлсийг анхаарах",
              },
              {
                icon: Sparkles,
                en: "Stay a little curious",
                mn: "Үргэлж суралцах",
              },
            ].map((value) => (
              <span key={value.en}>
                <value.icon size={19} />
                {value[locale]}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
