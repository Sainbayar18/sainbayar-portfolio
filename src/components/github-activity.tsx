"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { ArrowUpRight, GitBranch } from "lucide-react";
import { Github } from "./brand-icons";
import {
  activitySnapshot,
  activityStats,
  type GitHubActivity as Activity,
} from "@/lib/github-activity";
import { profile } from "@/lib/portfolio";
import { usePreferences } from "./preferences";

const readToday = () => new Date().toISOString().slice(0, 10);
function subscribeToDate(changed: () => void) {
  const timer = window.setInterval(changed, 60000);
  return () => window.clearInterval(timer);
}

export function GitHubActivity({ initialDate }: { initialDate: string }) {
  const { t, locale } = usePreferences();
  const today = useSyncExternalStore(
    subscribeToDate,
    readToday,
    () => initialDate,
  );
  const currentYear = Number(today.slice(0, 4));
  const [selectedYear, setYear] = useState<number | null>(null);
  const year = selectedYear ?? currentYear;
  const [result, setResult] = useState<{
    year: number;
    data: Activity | null;
  } | null>(null);
  const [retry, setRetry] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    fetch(`/api/github-activity?year=${year}`, { signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) throw new Error("Activity unavailable");
        const data: Activity = await response.json();
        setResult({ year, data });
      })
      .catch(() => {
        if (!controller.signal.aborted)
          setResult({ year, data: activitySnapshot(year) });
      });
    return () => controller.abort();
  }, [year, retry]);
  const data = result?.year === year ? result.data : activitySnapshot(year);
  const stats = data ? activityStats(data.days, today) : null;
  const byDate = new Map(data?.days.map((day) => [day.date, day]));
  const firstDay = new Date(`${year}-01-01T00:00:00Z`).getUTCDay();
  const dayCount = (Date.UTC(year + 1, 0, 1) - Date.UTC(year, 0, 1)) / 86400000;
  const months =
    locale === "ja"
      ? Array.from({ length: 12 }, (_, i) => `${i + 1}月`)
      : [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
  return (
    <section className="dashboard-card github-card">
      <div className="card-heading">
        <h2>
          <Github size={20} aria-hidden="true" />{" "}
          {t({ en: "GitHub Activity", ja: "GitHubの活動" })}
        </h2>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t({
            en: "View GitHub profile",
            ja: "GitHubプロフィールを見る",
          })}
        >
          <ArrowUpRight size={18} />
        </a>
      </div>
      <div className="activity-toolbar">
        <p>@Sainbayar18</p>
        <div
          className="activity-years"
          aria-label={t({
            en: "Contribution year",
            ja: "コントリビューションの年",
          })}
        >
          {Array.from(
            { length: currentYear - 2023 + 1 },
            (_, i) => currentYear - i,
          ).map((y) => (
            <button
              key={y}
              aria-pressed={year === y}
              onClick={() => setYear(y)}
            >
              {y}
            </button>
          ))}
        </div>
      </div>
      {data && stats ? (
        <>
          <div
            className="calendar-scroll"
            tabIndex={0}
            role="group"
            aria-label={t({
              en: `${year} public contribution calendar. Scroll horizontally to explore.`,
              ja: `${year}年の公開コントリビューション。横にスクロールして確認できます。`,
            })}
          >
            <div className="calendar-inner">
              <div className="calendar-months" aria-hidden="true">
                {months.map((month) => (
                  <span key={month}>{month}</span>
                ))}
              </div>
              <div
                className="contribution-grid"
                role="img"
                aria-label={`${stats.total} ${t({ en: "public contributions", ja: "公開コントリビューション" })} · ${year}`}
              >
                {Array.from({ length: firstDay }, (_, i) => (
                  <span
                    className="contribution-cell blank"
                    key={`blank-${i}`}
                  />
                ))}
                {Array.from({ length: dayCount }, (_, i) => {
                  const date = new Date(Date.UTC(year, 0, i + 1))
                    .toISOString()
                    .slice(0, 10);
                  const day = byDate.get(date);
                  return (
                    <span
                      key={date}
                      className={`contribution-cell level-${day?.level ?? 0}${date > today ? " future" : ""}${!day && date <= today ? " unknown" : ""}`}
                      title={
                        date > today
                          ? date
                          : `${date}: ${day ? `${day.count} ${t({ en: "contributions", ja: "コントリビューション" })}` : t({ en: "not yet refreshed", ja: "未更新" })}`
                      }
                      aria-hidden="true"
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="activity-legend">
            <p>
              <strong>{stats.total}</strong>{" "}
              {t({
                en: "public contributions",
                ja: "公開コントリビューション",
              })}
            </p>
            <span>
              {t({ en: "Less", ja: "少ない" })}
              {[0, 1, 2, 3, 4].map((level) => (
                <i
                  key={level}
                  className={`contribution-cell level-${level}`}
                  aria-hidden="true"
                />
              ))}
              {t({ en: "More", ja: "多い" })}
            </span>
          </div>
          <div className="activity-stats">
            <div>
              <GitBranch size={18} aria-hidden="true" />
              <span>
                {t({ en: "Current streak", ja: "現在の連続日数" })}
                <strong>
                  {stats.current} <small>{t({ en: "days", ja: "日" })}</small>
                </strong>
              </span>
            </div>
            <div>
              <span className="streak-symbol" aria-hidden="true">
                ✳
              </span>
              <span>
                {t({ en: "Longest streak", ja: "最長の連続日数" })}
                <strong>
                  {stats.longest} <small>{t({ en: "days", ja: "日" })}</small>
                </strong>
              </span>
            </div>
          </div>
          <p className="activity-source" role="status">
            {data.source === "snapshot"
              ? t({
                  en: "Public GitHub snapshot",
                  ja: "GitHub公開データの記録",
                })
              : t({
                  en: "Synced from public GitHub",
                  ja: "GitHubの公開データから更新",
                })}{" "}
            · {data.updated}
            {result?.year !== year
              ? ` · ${t({ en: "Refreshing…", ja: "更新中…" })}`
              : ""}
          </p>
        </>
      ) : (
        <div className="activity-unavailable" role="status">
          <Github size={28} />
          <p>
            {result?.year === year
              ? t({
                  en: "GitHub activity is temporarily unavailable.",
                  ja: "GitHubの活動データを現在取得できません。",
                })
              : t({
                  en: "Loading GitHub activity…",
                  ja: "GitHubの活動データを読み込み中…",
                })}
          </p>
          {result?.year === year ? (
            <button
              className="text-link"
              onClick={() => setRetry((value) => value + 1)}
            >
              {t({ en: "Try again", ja: "再試行" })}
            </button>
          ) : null}
        </div>
      )}
    </section>
  );
}
