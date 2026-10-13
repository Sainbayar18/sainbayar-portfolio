"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  CircleAlert,
  Check,
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
  const [copyState, setCopyState] = useState<
    "idle" | "pending" | "success" | "error"
  >("idle");
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (copyState === "pending") return;
    setStatus("");
    const form = new FormData(event.currentTarget);
    const subject = String(form.get("subject"));
    const message = `Name: ${form.get("name")}\nEmail: ${form.get("email")}\nSubject: ${subject}\n\n${form.get("message")}`;
    if (profile.email) {
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
      setStatus(
        t({
          en: "Your email app will open. Send the message from there.",
          ja: "メールアプリが開きます。そこからメッセージを送信してください。",
        }),
      );
    } else {
      setCopyState("pending");
      try {
        await navigator.clipboard.writeText(message);
        setCopyState("success");
        setStatus(
          t({
            en: "Message copied. Open Upwork and paste it into a message to me.",
            ja: "メッセージをコピーしました。Upworkを開き、メッセージ欄に貼り付けて送信してください。",
          }),
        );
      } catch {
        setCopyState("error");
        setStatus(
          t({
            en: "Could not copy automatically. Select your text and copy it manually.",
            ja: "自動でコピーできませんでした。入力した内容を選択して、手動でコピーしてください。",
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
            ja: "まずは、お話ししましょう",
          })}
        </p>
        <h1>
          {t({ en: "Contact", ja: "お問い合わせ" })}
          <span className="accent">.</span>
        </h1>
        <p>
          {t({
            en: "Let’s connect about a project, a testing opportunity, or an idea.",
            ja: "開発やテストのご相談、新しいアイデアについて、お気軽にご連絡ください。",
          })}
        </p>
      </div>
      <div className="contact-layout">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>{t({ en: "Let’s talk", ja: "メッセージを準備する" })}</h2>
          <p className="card-description">
            {profile.email
              ? t({
                  en: "Tell me what you have in mind. This form prepares an email in your email app.",
                  ja: "ご相談内容をお聞かせください。このフォームからメールアプリで送信用のメールを作成できます。",
                })
              : t({
                  en: "Prepare a message, copy it, and send it to me on Upwork.",
                  ja: "メッセージを作成してコピーし、Upworkからお送りください。",
                })}
          </p>
          <div className="form-row">
            <label>
              {t({ en: "Your name", ja: "お名前" })}
              <input
                name="name"
                autoComplete="name"
                required
                maxLength={120}
                placeholder={t({ en: "Your name", ja: "お名前" })}
              />
            </label>
            <label>
              {t({ en: "Email address", ja: "メールアドレス" })}
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
            {t({ en: "Subject", ja: "件名" })}
            <input
              name="subject"
              required
              maxLength={160}
              placeholder={t({
                en: "What would you like to work on?",
                ja: "ご相談の内容をお書きください",
              })}
            />
          </label>
          <label>
            {t({ en: "Message", ja: "メッセージ" })}
            <textarea
              name="message"
              required
              minLength={10}
              maxLength={5000}
              rows={6}
              placeholder={t({
                en: "Tell me about your idea, what you need, and your timeline…",
                ja: "アイデア、ご希望の内容、スケジュールなどをお聞かせください…",
              })}
            />
          </label>
          <button
            type="submit"
            className="button button-primary"
            disabled={copyState === "pending"}
          >
            {copyState === "pending" ? (
              t({ en: "Copying…", ja: "コピー中…" })
            ) : profile.email ? (
              <>
                <Send size={17} />
                {t({ en: "Prepare email", ja: "メールを作成" })}
              </>
            ) : (
              <>
                <Copy size={17} />
                {t({ en: "Copy message", ja: "メッセージをコピー" })}
              </>
            )}
          </button>
          <p className="form-status" role="status" data-state={copyState}>
            {copyState === "success" ? (
              <Check size={18} aria-hidden="true" />
            ) : copyState === "error" ? (
              <CircleAlert size={18} aria-hidden="true" />
            ) : null}
            {status ||
              t({
                en: "Your message is sent only when you send it from your email app or Upwork.",
                ja: "このフォームから直接送信はされません。メールアプリまたはUpworkで送信してください。",
              })}
          </p>
          {copyState === "success" ? (
            <a
              className="text-link form-next-step"
              href={profile.upwork.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t({
                en: "Open Upwork to send your message",
                ja: "Upworkを開いてメッセージを送る",
              })}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ) : null}
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
                ja: "Web開発・ソフトウェアテスト。",
              })}
            </p>
            <a
              className="text-link"
              href={profile.upwork.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t({ en: "Connect on Upwork", ja: "Upworkで連絡する" })}
              <ArrowUpRight size={16} />
            </a>
          </section>
          <section className="dashboard-card contact-method">
            <ShieldCheck size={22} />
            <h2>uTest</h2>
            <p>
              {t({
                en: "Find my tester profile and community activity.",
                ja: "テスターとしてのプロフィールやコミュニティでの活動をご覧いただけます。",
              })}
            </p>
            <a
              className="text-link"
              href={profile.utest.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t({
                en: "View tester profile",
                ja: "テスタープロフィールを見る",
              })}
              <ArrowUpRight size={16} />
            </a>
          </section>
          <section className="dashboard-card contact-method">
            <MapPin size={22} />
            <h2>{t({ en: "Location", ja: "拠点" })}</h2>
            <p>{t({ en: "Tokyo, Japan", ja: "日本・東京" })}</p>
            <p className="card-description">
              {t({
                en: "Japan Standard Time · UTC+9",
                ja: "日本標準時 · UTC+9",
              })}
            </p>
          </section>
          <section className="dashboard-card contact-method">
            <h2>
              {t({ en: "Elsewhere online", ja: "SNS・各種プロフィール" })}
            </h2>
            <SocialLinks />
            <p className="card-description">
              {t({
                en: "More profile links coming soon.",
                ja: "その他のプロフィールへのリンクは近日追加予定です。",
              })}
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}
