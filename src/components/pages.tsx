"use client";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowUpRight,
  ArrowLeft,
  Braces,
  Layers3,
  Sparkles,
  Check,
  Search,
} from "lucide-react";
import { profile, projects, type Localized } from "@/lib/portfolio";
import { usePreferences } from "./preferences";
import { ProjectCard } from "./project-card";
import { ProjectArt, OrbitArt } from "./visuals";
function PageHeading({
  index,
  label,
  title,
  description,
}: {
  index: string;
  label: Localized;
  title: Localized;
  description: Localized;
}) {
  const { t } = usePreferences();
  return (
    <div className="page-heading">
      <p className="eyebrow">
        <span className="section-index">{index} /</span>
        {t(label)}
      </p>
      <h1>
        {t(title)}
        <span className="accent">.</span>
      </h1>
      <p>{t(description)}</p>
    </div>
  );
}
export function Projects() {
  const { t } = usePreferences();
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const filtered = projects.filter(
    (p) =>
      (filter === "All" || p.category === filter) &&
      `${p.name} ${p.tags.join(" ")} ${t(p.description)}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  return (
    <div className="page-content">
      <PageHeading
        index="01"
        label={{ en: "THE THINGS I MAKE", ja: "制作実績" }}
        title={{ en: "Ideas, brought to life", ja: "アイデアを、かたちに" }}
        description={{
          en: "A collection of builds and explorations. Each one, a chance to learn something new.",
          ja: "制作したものや、新しい表現への挑戦をご紹介します。どのプロジェクトも、新しい学びにつながっています。",
        }}
      />
      <div className="project-toolbar">
        <div
          className="filter-group"
          aria-label={t({
            en: "Filter projects",
            ja: "プロジェクトを絞り込む",
          })}
        >
          {["All", "Web", "UI"].map((f) => (
            <button
              key={f}
              className={
                filter === f ? "filter-button active" : "filter-button"
              }
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {f === "All"
                ? t({ en: "All work", ja: "すべて" })
                : f === "Web"
                  ? t({ en: "Development", ja: "開発" })
                  : t({ en: "Design concepts", ja: "デザイン案" })}
              <span>
                {projects
                  .filter((p) => f === "All" || p.category === f)
                  .length.toString()
                  .padStart(2, "0")}
              </span>
            </button>
          ))}
        </div>
        <label className="search-field">
          <Search size={17} />
          <input
            aria-label={t({ en: "Search projects", ja: "プロジェクトを検索" })}
            placeholder={t({
              en: "Find a project…",
              ja: "プロジェクトを検索…",
            })}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </div>
      <div aria-live="polite" className="project-grid">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
        {filtered.length === 0 ? (
          <div className="empty-state">
            <Search size={28} />
            <h2>
              {t({
                en: "No projects found",
                ja: "プロジェクトが見つかりません",
              })}
            </h2>
            <p>
              {t({
                en: "Try another search or reset the filters.",
                ja: "別のキーワードを試すか、絞り込みをリセットしてください。",
              })}
            </p>
            <button
              className="button button-outline"
              onClick={() => {
                setFilter("All");
                setQuery("");
              }}
            >
              {t({ en: "Reset filters", ja: "絞り込みをリセット" })}
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
export function About() {
  const { t } = usePreferences();
  return (
    <div className="page-content">
      <PageHeading
        index="03"
        label={{
          en: "THE PERSON BEHIND THE PIXELS",
          ja: "つくり手について",
        }}
        title={{ en: "Hey, I’m Sainbayar", ja: "こんにちは、Sainbayarです" }}
        description={profile.role}
      />
      <div className="about-layout">
        <div className="about-portrait">
          <span className="portrait-letter">
            S<span>✳</span>
          </span>
          <div className="portrait-caption">
            <span>
              {t({
                en: "SAINBAYAR / PERSONAL PORTFOLIO",
                ja: "SAINBAYAR / ポートフォリオ",
              })}
            </span>
            <ArrowUpRight size={22} />
          </div>
        </div>
        <div className="about-story">
          <p className="eyebrow">
            {t({ en: "A LITTLE ABOUT ME", ja: "自己紹介" })}
          </p>
          <h2>
            {t({ en: "Good ideas deserve", ja: "良いアイデアを、" })}
            <br />
            <span className="hero-serif">
              {t({ en: "a thoughtful build.", ja: "丁寧にかたちに。" })}
            </span>
          </h2>
          <p>{t(profile.bio)}</p>
          <p>
            {t({
              en: "I’m drawn to the space where creativity meets technology. I believe the most useful experiences feel simple on the surface because someone cared about what happens underneath.",
              ja: "創造性と技術が交わるところに惹かれます。使いやすい体験がシンプルに感じられるのは、その裏側を誰かが丁寧につくり込んでいるからだと考えています。",
            })}
          </p>
          <div className="about-signature">
            Sainbayar<span className="accent">.</span>
          </div>
          <Link href="/contact" className="button button-primary">
            {t({ en: "Let’s connect", ja: "お問い合わせ" })}
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
      <section className="section about-values">
        <p className="eyebrow">
          {t({ en: "THE WAY I SEE IT", ja: "大切にしていること" })}
        </p>
        <div className="values-grid">
          {[
            {
              icon: Braces,
              title: { en: "Make it work.", ja: "きちんと動くものを。" },
              body: {
                en: "Start with the problem. Choose the right tools. Build something that actually helps.",
                ja: "課題から考え、適切なツールを選び、本当に役立つものをつくります。",
              },
            },
            {
              icon: Layers3,
              title: {
                en: "Make it feel right.",
                ja: "心地よく使えるものを。",
              },
              body: {
                en: "Thoughtful spacing, clear words, and small details that make the difference.",
                ja: "余白、わかりやすい言葉、細かな工夫。一つひとつを大切にします。",
              },
            },
            {
              icon: Sparkles,
              title: { en: "Keep getting better.", ja: "少しずつ、より良く。" },
              body: {
                en: "There’s always something new to learn. That’s the part I love most.",
                ja: "いつも新しく学べることがあります。それが、この仕事の一番好きなところです。",
              },
            },
          ].map((v) => (
            <article key={v.title.en}>
              <v.icon size={25} />
              <h3>{t(v.title)}</h3>
              <p>{t(v.body)}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
export function ProjectDetail({ slug }: { slug: string }) {
  const { t, locale } = usePreferences();
  const project = projects.find((p) => p.slug === slug)!;
  const nextProject =
    projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <div className="page-content project-detail">
      <Link href="/projects" className="text-link">
        <ArrowLeft size={17} />
        {t({ en: "Back to projects", ja: "プロジェクト一覧に戻る" })}
      </Link>
      <PageHeading
        index={project.number}
        label={{
          en: project.sample ? "SAMPLE DESIGN CONCEPT" : "DESIGN & DEVELOPMENT",
          ja: project.sample ? "デザインコンセプト例" : "デザイン・開発",
        }}
        title={{ en: project.name, ja: project.name }}
        description={project.description}
      />
      <div className="detail-art">
        <ProjectArt kind={project.art} />
      </div>
      <div className="detail-content">
        <div>
          <p className="eyebrow">{t({ en: "THE OVERVIEW", ja: "概要" })}</p>
          <h2>
            {t({ en: "A closer look", ja: "プロジェクトの詳細" })}
            <span className="accent">.</span>
          </h2>
          <p>{t(project.overview)}</p>
          <h3>{t({ en: "What’s inside", ja: "主な特徴" })}</h3>
          <ul>
            {project.features[locale].map((feature) => (
              <li key={feature}>
                <Check size={16} />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <aside className="detail-sidebar">
          <p className="eyebrow">
            {t({ en: "BUILT WITH", ja: "使用技術・特徴" })}
          </p>
          <div className="tag-list">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <p className="eyebrow">
            {t({ en: "PROJECT TYPE", ja: "プロジェクトの種類" })}
          </p>
          <p>
            {project.sample
              ? t({ en: "Sample concept", ja: "コンセプト例" })
              : t({ en: "Personal project", ja: "個人プロジェクト" })}
          </p>
          {project.liveUrl ? (
            <Link href={project.liveUrl} className="button button-primary">
              {t({ en: "View project", ja: "サイトを見る" })}
              <ArrowUpRight size={17} />
            </Link>
          ) : null}
          {project.sourceUrl ? (
            <a
              href={project.sourceUrl}
              className="text-link"
              target="_blank"
              rel="noreferrer"
            >
              {t({ en: "Source code", ja: "ソースコード" })}
              <ArrowUpRight size={17} />
            </a>
          ) : null}
        </aside>
      </div>
      <Link href={`/projects/${nextProject.slug}`} className="next-project">
        <span className="eyebrow">
          {t({ en: "NEXT PROJECT", ja: "次のプロジェクト" })}
        </span>
        <span>{nextProject.name}</span>
        <ArrowUpRight size={35} />
      </Link>
    </div>
  );
}
export function NotFoundView() {
  const { t } = usePreferences();
  return (
    <div className="not-found page-content">
      <p className="eyebrow">
        {t({ en: "404 / A SMALL DETOUR", ja: "404 / ページが見つかりません" })}
      </p>
      <h1>
        {t({ en: "A little off the map.", ja: "ページが見つかりません。" })}
      </h1>
      <p>
        {t({
          en: "This page doesn’t exist. Let’s find our way back.",
          ja: "このページは存在しません。ホームに戻りましょう。",
        })}
      </p>
      <Link className="button button-primary" href="/">
        {t({ en: "Back home", ja: "ホームに戻る" })}
        <ArrowUpRight size={18} />
      </Link>
      <OrbitArt />
    </div>
  );
}
