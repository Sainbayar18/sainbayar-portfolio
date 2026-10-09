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
          {t({ en: "FIND ME ON", mn: "МИНИЙ ПРОФАЙЛ" })}
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
      <p className="upwork-title">{upwork.title}</p>
      <dl className="upwork-stats">
        <div>
          <dt>{t({ en: "Job Success", mn: "Ажлын амжилт" })}</dt>
          <dd>{upwork.jobSuccess}%</dd>
        </div>
        <div>
          <dt>{t({ en: "Total jobs", mn: "Нийт ажил" })}</dt>
          <dd>{upwork.totalJobs}</dd>
        </div>
        <div className="upwork-earnings">
          <dt>{t({ en: "Total earnings", mn: "Нийт орлого" })}</dt>
          <dd>{upwork.totalEarnings}</dd>
        </div>
      </dl>
      <div className="tag-list upwork-skills">
        {upwork.skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
      <span className="upwork-cta">
        {t({ en: "View Upwork profile", mn: "Upwork профайл үзэх" })}
        <ArrowUpRight size={19} aria-hidden="true" />
        <span className="sr-only">
          {t({ en: " (opens in a new tab)", mn: " (шинэ tab-д нээгдэнэ)" })}
        </span>
      </span>
      <span className="upwork-updated">
        {t({ en: "Profile snapshot", mn: "Профайлын мэдээлэл" })} ·{" "}
        {t(upwork.updated)}
      </span>
    </a>
  );
}
