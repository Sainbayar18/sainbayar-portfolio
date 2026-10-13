"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  Copy,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  ShieldCheck,
} from "lucide-react";
import { profile } from "@/lib/portfolio";
import { usePreferences } from "./preferences";
import { SocialLinks } from "./social-links";

export function Contact() {
  const { t } = usePreferences();
  const [status, setStatus] = useState("");
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = String(form.get("subject"));
    const message = `Name: ${form.get("name")}\nEmail: ${form.get("email")}\nSubject: ${subject}\n\n${form.get("message")}`;
    if (profile.email) {
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
      setStatus(
        t({
          en: "Your email app will open. Send the message from there.",
          mn: "Имэйл апп нээгдэнэ. Тэндээс зурвасаа илгээгээрэй.",
        }),
      );
    } else {
      try {
        await navigator.clipboard.writeText(message);
        setStatus(
          t({
            en: "Message copied. Open Upwork and paste it into a message to me.",
            mn: "Зурвасыг хууллаа. Upwork нээгээд надад илгээх зурвастаа paste хийгээрэй.",
          }),
        );
      } catch {
        setStatus(
          t({
            en: "Could not copy automatically. Select your text and copy it manually.",
            mn: "Автоматаар хуулж чадсангүй. Бичсэн текстээ сонгож гараар хуулна уу.",
          }),
        );
      }
    }
  }
  return (
    <div className="page-content dashboard-page contact-dashboard">
      <div className="dashboard-heading">
        <p className="eyebrow">
          {t({
            en: "GOOD THINGS START WITH A CONVERSATION",
            mn: "САЙН БҮТЭЭЛ ЯРИАНААС ЭХЭЛНЭ",
          })}
        </p>
        <h1>
          {t({ en: "Contact", mn: "Холбогдох" })}
          <span className="accent">.</span>
        </h1>
        <p>
          {t({
            en: "Let’s connect about a project, a testing opportunity, or an idea.",
            mn: "Төсөл, тестийн ажил эсвэл шинэ санааны талаар ярилцъя.",
          })}
        </p>
      </div>
      <div className="contact-layout">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>{t({ en: "Let’s talk", mn: "Ярилцъя" })}</h2>
          <p className="card-description">
            {profile.email
              ? t({
                  en: "Tell me what you have in mind. This form prepares an email in your email app.",
                  mn: "Санаагаа хуваалцаарай. Маягт нь имэйл апп дээр зурвас бэлтгэнэ.",
                })
              : t({
                  en: "Prepare a message, copy it, and send it to me on Upwork.",
                  mn: "Зурвасаа бэлдэж, хуулж аваад Upwork-оор надад илгээгээрэй.",
                })}
          </p>
          <div className="form-row">
            <label>
              {t({ en: "Your name", mn: "Таны нэр" })}
              <input
                name="name"
                autoComplete="name"
                required
                maxLength={120}
                placeholder={t({ en: "Your name", mn: "Нэрээ бичээрэй" })}
              />
            </label>
            <label>
              {t({ en: "Email address", mn: "Имэйл хаяг" })}
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label>
            {t({ en: "Subject", mn: "Гарчиг" })}
            <input
              name="subject"
              required
              maxLength={160}
              placeholder={t({
                en: "What would you like to work on?",
                mn: "Ямар ажил дээр хамтрах вэ?",
              })}
            />
          </label>
          <label>
            {t({ en: "Message", mn: "Зурвас" })}
            <textarea
              name="message"
              required
              minLength={10}
              maxLength={5000}
              rows={6}
              placeholder={t({
                en: "Tell me about your idea, what you need, and your timeline…",
                mn: "Санаа, хэрэгцээ, хугацааныхаа талаар бичээрэй…",
              })}
            />
          </label>
          <button type="submit" className="button button-primary">
            {profile.email ? (
              <>
                <Send size={17} />
                {t({ en: "Prepare email", mn: "Имэйл бэлдэх" })}
              </>
            ) : (
              <>
                <Copy size={17} />
                {t({ en: "Copy message", mn: "Зурвас хуулах" })}
              </>
            )}
          </button>
          <p className="form-status" role="status">
            {status ||
              t({
                en: "Your message is sent only when you send it from your email app or Upwork.",
                mn: "Зурвас нь имэйл апп эсвэл Upwork дээрээс илгээх үед л илгээгдэнэ.",
              })}
          </p>
        </form>
        <aside className="contact-rail">
          {profile.email ? (
            <section className="dashboard-card contact-method">
              <Mail size={22} />
              <h2>Email</h2>
              <a className="text-link" href={`mailto:${profile.email}`}>
                {profile.email}
                <ArrowUpRight size={15} />
              </a>
            </section>
          ) : null}
          <section className="dashboard-card contact-method">
            <MessageCircle size={22} />
            <h2>Upwork</h2>
            <p>
              {t({
                en: "Web development & software testing.",
                mn: "Вэб хөгжүүлэлт, программын тест.",
              })}
            </p>
            <a
              className="text-link"
              href={profile.upwork.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t({ en: "Connect on Upwork", mn: "Upwork-оор холбогдох" })}
              <ArrowUpRight size={16} />
            </a>
          </section>
          <section className="dashboard-card contact-method">
            <ShieldCheck size={22} />
            <h2>uTest</h2>
            <p>
              {t({
                en: "Find my tester profile and community activity.",
                mn: "Тестерийн профайл, community дахь мэдээлэл.",
              })}
            </p>
            <a
              className="text-link"
              href={profile.utest.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t({ en: "View tester profile", mn: "Тестерийн профайл үзэх" })}
              <ArrowUpRight size={16} />
            </a>
          </section>
          <section className="dashboard-card contact-method">
            <MapPin size={22} />
            <h2>{t({ en: "Location", mn: "Байршил" })}</h2>
            <p>{t({ en: "Tokyo, Japan", mn: "Токио, Япон" })}</p>
            <p className="card-description">
              {t({
                en: "Japan Standard Time · UTC+9",
                mn: "Японы цаг · UTC+9",
              })}
            </p>
          </section>
          <section className="dashboard-card contact-method">
            <h2>{t({ en: "Elsewhere online", mn: "Сошиал профайлууд" })}</h2>
            <SocialLinks />
            <p className="card-description">
              {t({
                en: "More profile links coming soon.",
                mn: "Бусад профайлын линк удахгүй нэмэгдэнэ.",
              })}
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}
