"use client";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  ArrowLeft,
  Braces,
  Layers3,
  Sparkles,
  Copy,
  Check,
  Download,
  Search,
  Mail,
} from "lucide-react";
import {
  profile,
  projects,
  journey,
  stack,
  type Localized,
} from "@/lib/portfolio";
import { usePreferences } from "./preferences";
import { ProjectCard } from "./project-card";
import { ProjectArt, OrbitArt } from "./visuals";
import { UpworkCard } from "./upwork-card";
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
export function Experience() {
  const { t, locale } = usePreferences();
  return (
    <div className="page-content">
      <PageHeading
        index="02"
        label={{ en: "ALWAYS A WORK IN PROGRESS", mn: "ҮРГЭЛЖ ХӨГЖИЖ БУЙ" }}
        title={{ en: "The journey matters", mn: "Хөгжих замнал" }}
        description={{
          en: "How I approach learning, making, and growing. Good work starts with a curious mind.",
          mn: "Суралцах, бүтээх, хөгжих миний арга барил. Сайн бүтээл сониуч сэтгэлгээнээс эхэлнэ.",
        }}
      />
      <div className="experience-layout">
        <section>
          <div className="small-section-heading">
            <h2>{t({ en: "My approach", mn: "Миний арга барил" })}</h2>
            <span className="eyebrow">
              {t({ en: "LEARN → BUILD → GROW", mn: "СУРАХ → БҮТЭЭХ → ХӨГЖИХ" })}
            </span>
          </div>
          <div className="journey-list">
            {journey.map((item) => (
              <article className="journey-item" key={item.number}>
                <span className="journey-marker">{item.number}</span>
                <div>
                  <p className="eyebrow accent">{t(item.label)}</p>
                  <h3>{t(item.title)}</h3>
                  <p>{t(item.body)}</p>
                  <div className="tag-list">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="content-note">
            {t({
              en: "This section currently describes my process. Professional roles, dates, education, and certifications will be added with verified details.",
              mn: "Энэ хэсэгт одоогоор миний арга барилыг харуулав. Ажлын туршлага, огноо, боловсрол, сертификатыг бодит мэдээллээр нэмнэ.",
            })}
          </div>
        </section>
        <aside className="experience-aside">
          <UpworkCard />
          <div className="skill-card">
            <p className="eyebrow">
              {t({ en: "MY TOOLKIT", mn: "МИНИЙ ХЭРЭГСЛҮҮД" })}
            </p>
            <h2>
              {t({ en: "Small tools.", mn: "Зөв хэрэгсэл." })}
              <br />
              <span className="hero-serif">
                {t({ en: "Big possibilities.", mn: "Өргөн боломж." })}
              </span>
            </h2>
            <div className="toolkit-grid">
              {stack.map((name, i) => (
                <span key={name}>
                  <i>{["N", "⚛", "TS", "#", "⑂", "◈"][i]}</i>
                  {name}
                </span>
              ))}
            </div>
          </div>
          <div className="principles-card">
            <p className="eyebrow">
              {t({ en: "WHAT I VALUE", mn: "МИНИЙ ҮНЭ ЦЭН" })}
            </p>
            {[
              {
                icon: Braces,
                en: "Readable, thoughtful code",
                mn: "Уншихад ойлгомжтой код",
              },
              {
                icon: Layers3,
                en: "Useful, accessible interfaces",
                mn: "Хэрэгтэй, хүртээмжтэй интерфэйс",
              },
              {
                icon: Sparkles,
                en: "Continuous learning",
                mn: "Тасралтгүй суралцах",
              },
            ].map((v) => (
              <p key={v.en}>
                <v.icon size={18} />
                {v[locale]}
              </p>
            ))}
          </div>
          {profile.resume ? (
            <a className="button button-primary" href={profile.resume} download>
              <Download size={18} />
              {t({ en: "Download résumé", mn: "CV татах" })}
            </a>
          ) : null}
        </aside>
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
export function Contact() {
  const { t, locale } = usePreferences();
  const [status, setStatus] = useState("");
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const body = `Name: ${form.get("name")}\nEmail: ${form.get("email")}\nTopic: ${form.get("topic")}\n\n${form.get("message")}`;
    if (profile.email) {
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(String(form.get("topic")))}&body=${encodeURIComponent(body)}`;
      setStatus(
        t({
          en: "Your email app will open with this message. Send it from there.",
          mn: "Имэйл апп дээр зурвас нээгдэнэ. Тэндээс илгээгээрэй.",
        }),
      );
      return;
    }
    try {
      await navigator.clipboard.writeText(body);
      setStatus(
        t({
          en: "Message copied. Nothing has been sent. Contact details will be added soon.",
          mn: "Зурвасыг хууллаа. Илгээгээгүй. Холбоо барих мэдээллийг удахгүй нэмнэ.",
        }),
      );
    } catch {
      setStatus(
        t({
          en: "Clipboard is unavailable. You can select and copy your message manually.",
          mn: "Автоматаар хуулж чадсангүй. Зурвасаа сонгож гараар хуулна уу.",
        }),
      );
    }
  }
  return (
    <div className="page-content">
      <PageHeading
        index="04"
        label={{
          en: "GOOD THINGS START WITH A CONVERSATION",
          mn: "САЙН БҮТЭЭЛ ЯРИАНААС ЭХЭЛНЭ",
        }}
        title={{ en: "Let’s create something", mn: "Хамтдаа бүтээцгээе" }}
        description={{
          en: "An idea, a question, or just a hello. I’d love to hear it.",
          mn: "Санаа, асуулт эсвэл зүгээр л мэндчилгээ. Чиний хэлэхийг сонсох дуртай.",
        }}
      />
      <div className="contact-layout">
        <div className="contact-copy">
          <div className="contact-symbol">✳</div>
          <h2>
            {t({ en: "Your next idea.", mn: "Чиний дараагийн санаа." })}
            <br />
            <span className="hero-serif">
              {t({
                en: "Our next conversation.",
                mn: "Бидний дараагийн яриа.",
              })}
            </span>
          </h2>
          <p>
            {t({
              en: "Tell me a little about what you have in mind. The best place to start is a simple conversation.",
              mn: "Бодож буй санаагаа хуваалцаарай. Энгийн ярианаас эхлэх нь хамгийн сайн.",
            })}
          </p>
          <div className="contact-direct">
            <Mail size={19} />
            {profile.email ? (
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            ) : (
              <span>
                {t({
                  en: "Contact details coming soon",
                  mn: "Холбоо барих мэдээллийг удахгүй нэмнэ",
                })}
              </span>
            )}
          </div>
          <p className="contact-hint">
            {profile.email
              ? t({
                  en: "The form opens your email app. No account needed.",
                  mn: "Маягт нь имэйл аппыг нээнэ.",
                })
              : t({
                  en: "For now, you can prepare and copy a message below. It stays in your browser and is not sent.",
                  mn: "Одоогоор зурвасаа бэлдэж хуулж болно. Зурвас browser-т хадгалагдаж, илгээгдэхгүй.",
                })}
          </p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              {t({ en: "Your name", mn: "Таны нэр" })}
              <input
                name="name"
                required
                autoComplete="name"
                placeholder={
                  locale === "en" ? "What should I call you?" : "Нэрээ бичнэ үү"
                }
                maxLength={120}
              />
            </label>
            <label>
              {t({ en: "Email address", mn: "Имэйл хаяг" })}
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                maxLength={254}
              />
            </label>
          </div>
          <label>
            {t({
              en: "What’s on your mind?",
              mn: "Ямар сэдвээр холбогдох вэ?",
            })}
            <select name="topic">
              <option>
                {t({ en: "A project idea", mn: "Төслийн санаа" })}
              </option>
              <option>
                {t({ en: "An opportunity", mn: "Хамтрах боломж" })}
              </option>
              <option>
                {t({ en: "Just saying hello", mn: "Мэндчилгээ" })}
              </option>
            </select>
          </label>
          <label>
            {t({ en: "A little more detail", mn: "Дэлгэрэнгүй" })}
            <textarea
              name="message"
              required
              rows={5}
              minLength={10}
              maxLength={5000}
              placeholder={t({
                en: "Tell me about your idea, what you need, or what you’re curious about…",
                mn: "Санаа, хэрэгцээ эсвэл сонирхож буй зүйлээ бичээрэй…",
              })}
            />
          </label>
          <button type="submit" className="button button-primary">
            {profile.email
              ? t({ en: "Prepare email", mn: "Имэйл бэлдэх" })
              : t({ en: "Copy your message", mn: "Зурвас хуулах" })}
            {profile.email ? <ArrowUpRight size={18} /> : <Copy size={18} />}
          </button>
          <p className="form-status" role="status">
            {status ? (
              <>
                <Check size={16} />
                {status}
              </>
            ) : (
              t({
                en: "A small hello can lead to something great.",
                mn: "Энгийн мэндчилгээ сайхан хамтын ажлын эхлэл.",
              })
            )}
          </p>
        </form>
      </div>
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
