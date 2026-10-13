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
        label={{ en: "THE THINGS I MAKE", mn: "МИНИЙ БҮТЭЭЛҮҮД" }}
        title={{ en: "Ideas, brought to life", mn: "Санаанаас бүтээл рүү" }}
        description={{
          en: "A collection of builds and explorations. Each one, a chance to learn something new.",
          mn: "Бүтээлүүд болон шинэ санаанууд. Төсөл бүрээс шинэ зүйл суралцана.",
        }}
      />
      <div className="project-toolbar">
        <div
          className="filter-group"
          aria-label={t({ en: "Filter projects", mn: "Төсөл шүүх" })}
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
                ? t({ en: "All work", mn: "Бүх бүтээл" })
                : f === "Web"
                  ? t({ en: "Development", mn: "Хөгжүүлэлт" })
                  : t({ en: "Design concepts", mn: "Дизайн концепт" })}
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
            aria-label={t({ en: "Search projects", mn: "Төсөл хайх" })}
            placeholder={t({ en: "Find a project…", mn: "Төсөл хайх…" })}
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
            <h2>{t({ en: "No projects found", mn: "Төсөл олдсонгүй" })}</h2>
            <p>
              {t({
                en: "Try another search or reset the filters.",
                mn: "Өөр үгээр хайх эсвэл шүүлтүүрээ арилгаарай.",
              })}
            </p>
            <button
              className="button button-outline"
              onClick={() => {
                setFilter("All");
                setQuery("");
              }}
            >
              {t({ en: "Reset filters", mn: "Шүүлтүүр арилгах" })}
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
          mn: "БҮТЭЭЛИЙН ЦААНАХ ХҮН",
        }}
        title={{ en: "Hey, I’m Sainbayar", mn: "Сайн уу, би Sainbayar" }}
        description={profile.role}
      />
      <div className="about-layout">
        <div className="about-portrait">
          <span className="portrait-letter">
            S<span>✳</span>
          </span>
          <div className="portrait-caption">
            <span>SAINBAYAR / PERSONAL PORTFOLIO</span>
            <ArrowUpRight size={22} />
          </div>
        </div>
        <div className="about-story">
          <p className="eyebrow">
            {t({ en: "A LITTLE ABOUT ME", mn: "МИНИЙ ТУХАЙ" })}
          </p>
          <h2>
            {t({ en: "Good ideas deserve", mn: "Сайн санааг" })}
            <br />
            <span className="hero-serif">
              {t({ en: "a thoughtful build.", mn: "нямбай бүтээнэ." })}
            </span>
          </h2>
          <p>{t(profile.bio)}</p>
          <p>
            {t({
              en: "I’m drawn to the space where creativity meets technology. I believe the most useful experiences feel simple on the surface because someone cared about what happens underneath.",
              mn: "Бүтээлч сэтгэлгээ технологитой уулзах тэр орон зай надад сонирхолтой. Цаана нь нямбай ажилласан учраас л хэрэгтэй бүтээл хэрэглэгчид энгийн санагддаг гэж боддог.",
            })}
          </p>
          <div className="about-signature">
            Sainbayar<span className="accent">.</span>
          </div>
          <Link href="/contact" className="button button-primary">
            {t({ en: "Let’s connect", mn: "Холбогдоцгооё" })}
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
      <section className="section about-values">
        <p className="eyebrow">
          {t({ en: "THE WAY I SEE IT", mn: "МИНИЙ ӨНЦӨГ" })}
        </p>
        <div className="values-grid">
          {[
            {
              icon: Braces,
              title: { en: "Make it work.", mn: "Ажилладаг байх." },
              body: {
                en: "Start with the problem. Choose the right tools. Build something that actually helps.",
                mn: "Асуудлаас эхэлнэ. Зөв хэрэгслээ сонгоно. Бодитоор хэрэг болох зүйл бүтээнэ.",
              },
            },
            {
              icon: Layers3,
              title: { en: "Make it feel right.", mn: "Хэрэглэхэд таатай." },
              body: {
                en: "Thoughtful spacing, clear words, and small details that make the difference.",
                mn: "Зөв зай, тодорхой үг, ялгааг бий болгох жижиг шийдлүүд.",
              },
            },
            {
              icon: Sparkles,
              title: { en: "Keep getting better.", mn: "Тасралтгүй сайжрах." },
              body: {
                en: "There’s always something new to learn. That’s the part I love most.",
                mn: "Үргэлж шинэ зүйл сурах боломж бий. Энэ нь надад хамгийн их таалагддаг.",
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
        {t({ en: "Back to projects", mn: "Төслүүд рүү буцах" })}
      </Link>
      <PageHeading
        index={project.number}
        label={{
          en: project.sample ? "SAMPLE DESIGN CONCEPT" : "DESIGN & DEVELOPMENT",
          mn: project.sample ? "ЖИШЭЭ ДИЗАЙН КОНЦЕПТ" : "ДИЗАЙН БА ХӨГЖҮҮЛЭЛТ",
        }}
        title={{ en: project.name, mn: project.name }}
        description={project.description}
      />
      <div className="detail-art">
        <ProjectArt kind={project.art} />
      </div>
      <div className="detail-content">
        <div>
          <p className="eyebrow">
            {t({ en: "THE OVERVIEW", mn: "ТОВЧ ТАНИЛЦУУЛГА" })}
          </p>
          <h2>
            {t({ en: "A closer look", mn: "Дэлгэрэнгүй" })}
            <span className="accent">.</span>
          </h2>
          <p>{t(project.overview)}</p>
          <h3>{t({ en: "What’s inside", mn: "Онцлог" })}</h3>
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
            {t({ en: "BUILT WITH", mn: "АШИГЛАСАН ХЭРЭГСЭЛ" })}
          </p>
          <div className="tag-list">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <p className="eyebrow">
            {t({ en: "PROJECT TYPE", mn: "ТӨСЛИЙН ТӨРӨЛ" })}
          </p>
          <p>
            {project.sample
              ? t({ en: "Sample concept", mn: "Жишээ концепт" })
              : t({ en: "Personal project", mn: "Хувийн төсөл" })}
          </p>
          {project.liveUrl ? (
            <Link href={project.liveUrl} className="button button-primary">
              {t({ en: "View project", mn: "Төслийг үзэх" })}
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
              {t({ en: "Source code", mn: "Эх код" })}
              <ArrowUpRight size={17} />
            </a>
          ) : null}
        </aside>
      </div>
      <Link href={`/projects/${nextProject.slug}`} className="next-project">
        <span className="eyebrow">
          {t({ en: "NEXT PROJECT", mn: "ДАРААГИЙН ТӨСӨЛ" })}
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
      <p className="eyebrow">404 / A SMALL DETOUR</p>
      <h1>{t({ en: "A little off the map.", mn: "Хуудас олдсонгүй." })}</h1>
      <p>
        {t({
          en: "This page doesn’t exist. Let’s find our way back.",
          mn: "Энэ хуудас байхгүй байна. Нүүр хуудас руу буцъя.",
        })}
      </p>
      <Link className="button button-primary" href="/">
        {t({ en: "Back home", mn: "Нүүр хуудас" })}
        <ArrowUpRight size={18} />
      </Link>
      <OrbitArt />
    </div>
  );
}
