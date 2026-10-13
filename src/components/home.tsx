"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Braces,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { profile, projects } from "@/lib/portfolio";
import { usePreferences } from "./preferences";
import { ProjectCard } from "./project-card";
import { GitHubActivity } from "./github-activity";
import { Github } from "./brand-icons";

export function Home({ initialDate }: { initialDate: string }) {
  const { t } = usePreferences();
  return (
    <div className="page-content dashboard-page">
      <div className="dashboard-heading">
        <p className="eyebrow">
          {t({ en: "SAINBAYAR’S PERSONAL SPACE", mn: "SAINBAYAR-ЫН ОРОН ЗАЙ" })}
        </p>
        <h1>
          {t({ en: "Dashboard", mn: "Нүүр" })}
          <span className="accent">.</span>
        </h1>
        <p>
          {t({
            en: "A little of what I build, test, and learn.",
            mn: "Миний бүтээж, тестэлж, сурч буй зүйлс.",
          })}
        </p>
      </div>
      <section className="dashboard-hero">
        <div className="dashboard-hero-copy">
          <p className="hero-hello">
            {t({ en: "Hey, I’m Sainbayar", mn: "Сайн уу, би Sainbayar" })}{" "}
            <span aria-hidden="true">✳</span>
          </p>
          <h2>
            {t({ en: "Building with care.", mn: "Нямбай бүтээнэ." })}
            <br />
            <span className="hero-serif">
              {t({ en: "Testing with curiosity.", mn: "Сониучаар тестэлнэ." })}
            </span>
          </h2>
          <p>
            {t({
              en: "From thoughtful interfaces to the details that make products work. A Mongolian developer and tester, growing in Japan.",
              mn: "Ойлгомжтой интерфэйсээс бүтээгдэхүүний нарийн ажиллагаа хүртэл. Японд хөгжиж буй монгол хөгжүүлэгч, тестер.",
            })}
          </p>
          <div className="hero-buttons">
            <Link className="button button-primary" href="/projects">
              {t({ en: "View my work", mn: "Бүтээлүүд үзэх" })}
              <ArrowUpRight size={17} />
            </Link>
            <Link className="text-link" href="/experience">
              {t({ en: "My journey", mn: "Миний замнал" })}
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
        <section className="hero-focus" aria-labelledby="hero-focus-heading">
          <p className="eyebrow" id="hero-focus-heading">
            {t({ en: "WHAT I BRING", mn: "МИНИЙ ЧИГЛЭЛ" })}
          </p>
          <div className="hero-focus-item">
            <Braces size={21} aria-hidden="true" />
            <div>
              <h3>{t({ en: "Build", mn: "Хөгжүүлэх" })}</h3>
              <p>
                {t({
                  en: "Useful, responsive web experiences.",
                  mn: "Хэрэглэхэд хялбар, responsive вэб.",
                })}
              </p>
            </div>
          </div>
          <div className="hero-focus-item">
            <ShieldCheck size={21} aria-hidden="true" />
            <div>
              <h3>{t({ en: "Test", mn: "Тестлэх" })}</h3>
              <p>
                {t({
                  en: "Real products. Attention to the details.",
                  mn: "Бодит бүтээгдэхүүн. Нарийн зүйл бүрд анхаарах.",
                })}
              </p>
            </div>
          </div>
          <div className="hero-focus-item">
            <BookOpen size={21} aria-hidden="true" />
            <div>
              <h3>{t({ en: "Keep learning", mn: "Суралцах" })}</h3>
              <p>
                {t({
                  en: "Code, quality, and the possibilities of AI.",
                  mn: "Код, чанар, хиймэл оюуны боломжууд.",
                })}
              </p>
            </div>
          </div>
          <p className="hero-focus-location">
            <MapPin size={14} aria-hidden="true" />
            {t({
              en: "Mongolian roots · Based in Japan",
              mn: "Монгол хүн · Японд амьдардаг",
            })}
          </p>
        </section>
      </section>
      <div className="dashboard-overview">
        <GitHubActivity initialDate={initialDate} />
        <section className="dashboard-card about-dashboard">
          <div className="card-heading">
            <h2>{t({ en: "About", mn: "Миний тухай" })}</h2>
            <Link
              href="/about"
              aria-label={t({
                en: "More about me",
                mn: "Миний тухай дэлгэрэнгүй",
              })}
            >
              <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="dashboard-person">
            <Image
              src={profile.utest.photo}
              alt="Sainbayar"
              width={54}
              height={54}
            />
            <div>
              <h3>{profile.name}</h3>
              <p>{t(profile.role)}</p>
            </div>
          </div>
          <p className="card-description">{t(profile.bio)}</p>
          <dl className="about-facts">
            <div>
              <dt>
                <MapPin size={15} />
                {t({ en: "Location", mn: "Байршил" })}
              </dt>
              <dd>Tokyo, Japan</dd>
            </div>
            <div>
              <dt>
                <Braces size={15} />
                {t({ en: "Focus", mn: "Чиглэл" })}
              </dt>
              <dd>Web · QA · AI</dd>
            </div>
          </dl>
          <div className="about-profile-links">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <Github size={16} />
              @Sainbayar18
              <ArrowUpRight size={14} />
            </a>
            <a
              href={profile.upwork.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Upwork
              <ArrowUpRight size={14} />
            </a>
            <a
              href={profile.utest.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              uTest
              <ArrowUpRight size={14} />
            </a>
          </div>
        </section>
      </div>
      <section className="recent-projects" id="selected-work">
        <div className="card-heading">
          <h2>{t({ en: "Recent Projects", mn: "Сүүлийн төслүүд" })}</h2>
          <Link href="/projects" className="text-link">
            {t({ en: "All projects", mn: "Бүх төсөл" })}
            <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="project-grid">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      <section className="dashboard-contact">
        <div>
          <p className="eyebrow">
            {t({ en: "LET’S CONNECT", mn: "ХОЛБОГДЪЁ" })}
          </p>
          <h2>
            {t({ en: "Something in mind?", mn: "Ямар нэг санаа байна уу?" })}
          </h2>
          <p>
            {t({
              en: "A project, a testing opportunity, or a simple hello.",
              mn: "Төсөл, тестийн ажил эсвэл энгийн мэндчилгээ.",
            })}
          </p>
        </div>
        <Link href="/contact" className="button button-primary">
          {t({ en: "Get in touch", mn: "Холбогдох" })}
          <ArrowUpRight size={18} />
        </Link>
      </section>
    </div>
  );
}
