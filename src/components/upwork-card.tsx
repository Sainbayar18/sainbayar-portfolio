"use client";

import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { profile } from "@/lib/portfolio";
import { usePreferences } from "./preferences";

export function UpworkCard() {
  const { t } = usePreferences();
  const upwork = profile.upwork;

  return (
    <a
      className="upwork-card"
      href={upwork.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="upwork-card-top">
        <span className="eyebrow">
          {t({ en: "FIND ME ON", ja: "プロフィール" })}
        </span>
        <span className="upwork-wordmark">upwork</span>
      </div>
      <div className="upwork-identity">
        <Image
          src={upwork.photo}
          alt={upwork.name}
          width={72}
          height={72}
          className="upwork-avatar"
        />
        <div>
          <h2>{upwork.name}</h2>
          <p className="upwork-location">
            <MapPin size={13} aria-hidden="true" />
            {t(upwork.location)}
          </p>
        </div>
      </div>
      <p className="upwork-title">
        {t({
          en: upwork.title,
          ja: "Web開発 | JavaScript・Java・HTML・プログラミング",
        })}
      </p>
      <dl className="upwork-stats">
        <div>
          <dt>{t({ en: "Job Success", ja: "案件成功率" })}</dt>
          <dd>{upwork.jobSuccess}%</dd>
        </div>
        <div>
          <dt>{t({ en: "Total jobs", ja: "総案件数" })}</dt>
          <dd>{upwork.totalJobs}</dd>
        </div>
      </dl>
      <div className="tag-list upwork-skills">
        {upwork.skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
      <span className="upwork-cta">
        {t({ en: "View Upwork profile", ja: "Upworkプロフィールを見る" })}
        <ArrowUpRight size={19} aria-hidden="true" />
        <span className="sr-only">
          {t({ en: " (opens in a new tab)", ja: "（新しいタブで開きます）" })}
        </span>
      </span>
      <span className="upwork-updated">
        {t({ en: "Profile snapshot", ja: "プロフィール情報" })} ·{" "}
        {t(upwork.updated)}
      </span>
    </a>
  );
}
