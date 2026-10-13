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
          {t({
            en: "SAINBAYAR’S PERSONAL SPACE",
            ja: "SAINBAYARのポートフォリオ",
          })}
        </p>
        <h1>
          {t({ en: "Dashboard", ja: "ホーム" })}
          <span className="accent">.</span>
        </h1>
        <p>
          {t({
            en: "A little of what I build, test, and learn.",
            ja: "つくること、テストすること、学ぶこと。日々の取り組みをご紹介します。",
          })}
        </p>
      </div>
      <section className="dashboard-hero">
        <div className="dashboard-hero-copy">
          <p className="hero-hello">
            {t({ en: "Hey, I’m Sainbayar", ja: "こんにちは、Sainbayarです" })}{" "}
            <span aria-hidden="true">✳</span>
          </p>
          <h2>
            {t({ en: "Building with care.", ja: "丁寧につくる。" })}
            <br />
            <span className="hero-serif">
              {t({
                en: "Testing with curiosity.",
                ja: "好奇心で、テストする。",
              })}
            </span>
          </h2>
          <p>
            {t({
              en: "From thoughtful interfaces to the details that make products work. A Mongolian developer and tester, growing in Japan.",
              ja: "使いやすいUIから、製品を支える細かな仕組みまで。日本で経験を積む、モンゴル出身の開発者・テスターです。",
            })}
          </p>
          <div className="hero-buttons">
            <Link className="button button-primary" href="/projects">
              {t({ en: "View my work", ja: "制作実績を見る" })}
              <ArrowUpRight size={17} />
            </Link>
            <Link className="text-link" href="/experience">
              {t({ en: "My journey", ja: "これまでの歩み" })}
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
        <section className="hero-focus" aria-labelledby="hero-focus-heading">
          <p className="eyebrow" id="hero-focus-heading">
            {t({ en: "WHAT I BRING", ja: "取り組んでいること" })}
          </p>
          <div className="hero-focus-item">
            <Braces size={21} aria-hidden="true" />
            <div>
              <h3>{t({ en: "Build", ja: "開発する" })}</h3>
              <p>
                {t({
                  en: "Useful, responsive web experiences.",
                  ja: "使いやすく、さまざまな画面に対応するWeb体験。",
                })}
              </p>
            </div>
          </div>
          <div className="hero-focus-item">
            <ShieldCheck size={21} aria-hidden="true" />
            <div>
              <h3>{t({ en: "Test", ja: "テストする" })}</h3>
              <p>
                {t({
                  en: "Real products. Attention to the details.",
                  ja: "実際の製品を、細部まで丁寧に確認。",
                })}
              </p>
            </div>
          </div>
          <div className="hero-focus-item">
            <BookOpen size={21} aria-hidden="true" />
            <div>
              <h3>{t({ en: "Keep learning", ja: "学び続ける" })}</h3>
              <p>
                {t({
                  en: "Code, quality, and the possibilities of AI.",
                  ja: "コード、品質、そしてAIの可能性。",
                })}
              </p>
            </div>
          </div>
          <p className="hero-focus-location">
            <MapPin size={14} aria-hidden="true" />
            {t({
              en: "Mongolian roots · Based in Japan",
              ja: "モンゴル出身 · 日本在住",
            })}
          </p>
        </section>
      </section>
      <div className="dashboard-overview">
        <GitHubActivity initialDate={initialDate} />
        <section className="dashboard-card about-dashboard">
          <div className="card-heading">
            <h2>{t({ en: "About", ja: "自己紹介" })}</h2>
            <Link
              href="/about"
              aria-label={t({
                en: "More about me",
                ja: "自己紹介を詳しく見る",
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
                {t({ en: "Location", ja: "拠点" })}
              </dt>
              <dd>{t(profile.upwork.location)}</dd>
            </div>
            <div>
              <dt>
                <Braces size={15} />
                {t({ en: "Focus", ja: "専門・関心分野" })}
              </dt>
              <dd>{t({ en: "Web · QA · AI", ja: "Web開発・QA・AI" })}</dd>
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
          <h2>{t({ en: "Recent Projects", ja: "最近のプロジェクト" })}</h2>
          <Link href="/projects" className="text-link">
            {t({ en: "All projects", ja: "すべてのプロジェクト" })}
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
            {t({ en: "LET’S CONNECT", ja: "お気軽にご連絡ください" })}
          </p>
          <h2>
            {t({
              en: "Something in mind?",
              ja: "一緒に取り組みたいことはありますか？",
            })}
          </h2>
          <p>
            {t({
              en: "A project, a testing opportunity, or a simple hello.",
              ja: "開発やテストのご相談、ご挨拶も歓迎です。",
            })}
          </p>
        </div>
        <Link href="/contact" className="button button-primary">
          {t({ en: "Get in touch", ja: "お問い合わせ" })}
          <ArrowUpRight size={18} />
        </Link>
      </section>
    </div>
  );
}
