"use client";

import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { profile } from "@/lib/portfolio";
import { usePreferences } from "./preferences";

export function UtestCard() {
  const { t } = usePreferences();
  const utest = profile.utest;

  return (
    <a
      className="upwork-card utest-card"
      href={utest.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="upwork-card-top">
        <span className="eyebrow">
          {t({ en: "FIND ME ON", ja: "プロフィール" })}
        </span>
        <span className="upwork-wordmark">uTest</span>
      </div>
      <div className="upwork-identity">
        <Image
          src={utest.photo}
          alt={utest.name}
          width={72}
          height={72}
          className="upwork-avatar"
        />
        <div>
          <h2>{utest.name}</h2>
          <p className="upwork-location">
            <MapPin size={13} aria-hidden="true" />
            {t(utest.location)}
          </p>
        </div>
      </div>
      <p className="upwork-title">{t(utest.title)}</p>
      <dl className="upwork-stats">
        <div>
          <dt>{t({ en: "Tester rating", ja: "テスター評価" })}</dt>
          <dd className="utest-rating">{t(utest.rating)}</dd>
        </div>
        <div>
          <dt>{t({ en: "Joined uTest", ja: "uTest登録年" })}</dt>
          <dd>{utest.joinedYear}</dd>
        </div>
      </dl>
      <span className="upwork-cta">
        {t({ en: "View uTest profile", ja: "uTestプロフィールを見る" })}
        <ArrowUpRight size={19} aria-hidden="true" />
        <span className="sr-only">
          {t({ en: " (opens in a new tab)", ja: "（新しいタブで開きます）" })}
        </span>
      </span>
      <span className="upwork-updated">
        {t({ en: "Profile snapshot", ja: "プロフィール情報" })} ·{" "}
        {t(utest.updated)}
      </span>
    </a>
  );
}
