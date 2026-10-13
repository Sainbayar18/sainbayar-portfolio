export type ContributionDay = { date: string; count: number; level: number };
export type GitHubActivity = {
  year: number;
  updated: string;
  days: ContributionDay[];
  source: "live" | "snapshot";
};

// Observed on the signed-out public GitHub profile on 13 October 2026.
// Only nonzero days are stored; the remaining observed days were zero.
const snapshots: Record<number, { until: string; active: ContributionDay[] }> =
  {
    2023: {
      until: "2023-12-31",
      active: [{ date: "2023-11-06", count: 1, level: 4 }],
    },
    2024: { until: "2024-12-31", active: [] },
    2026: {
      until: "2026-10-13",
      active: [
        { date: "2026-02-25", count: 4, level: 4 },
        { date: "2026-04-02", count: 2, level: 2 },
        { date: "2026-04-07", count: 1, level: 1 },
        { date: "2026-10-09", count: 5, level: 4 },
        { date: "2026-10-13", count: 3, level: 3 },
      ],
    },
    2025: {
      until: "2025-12-31",
      active: [
        { date: "2025-03-30", count: 5, level: 4 },
        { date: "2025-04-01", count: 5, level: 4 },
        { date: "2025-04-03", count: 5, level: 4 },
        { date: "2025-04-05", count: 2, level: 4 },
        { date: "2025-04-09", count: 2, level: 4 },
        { date: "2025-05-03", count: 2, level: 4 },
        { date: "2025-05-07", count: 1, level: 2 },
      ],
    },
  };

export function activitySnapshot(year: number): GitHubActivity | null {
  const snapshot = snapshots[year];
  if (!snapshot) return null;
  const days: ContributionDay[] = [];
  const date = new Date(`${year}-01-01T00:00:00Z`);
  while (date.toISOString().slice(0, 10) <= snapshot.until) {
    const key = date.toISOString().slice(0, 10);
    days.push(
      snapshot.active.find((day) => day.date === key) ?? {
        date: key,
        count: 0,
        level: 0,
      },
    );
    date.setUTCDate(date.getUTCDate() + 1);
  }
  return { year, updated: "2026-10-13", days, source: "snapshot" };
}

export function parseContributions(
  html: string,
  year: number,
): ContributionDay[] {
  const tooltips = new Map<string, number>();
  for (const match of html.matchAll(
    /<tool-tip\b([^>]*)>([\s\S]*?)<\/tool-tip>/gi,
  )) {
    const id = match[1].match(/\bfor="([^"]+)"/)?.[1];
    const text = match[2].replace(/<[^>]+>/g, "").trim();
    const count = text.startsWith("No contributions")
      ? 0
      : Number(text.match(/^([\d,]+) contribution/)?.[1]?.replaceAll(",", ""));
    if (id && Number.isFinite(count)) tooltips.set(id, count);
  }
  const days: ContributionDay[] = [];
  const today = new Date().toISOString().slice(0, 10);
  for (const match of html.matchAll(
    /<td\b([^>]*\bdata-date="[^"]+"[^>]*)>/gi,
  )) {
    const attributes = match[1];
    const date = attributes.match(/\bdata-date="([^"]+)"/)?.[1];
    const id = attributes.match(/\bid="([^"]+)"/)?.[1];
    const level = Number(attributes.match(/\bdata-level="([0-4])"/)?.[1]);
    if (
      !date?.startsWith(`${year}-`) ||
      date > today ||
      !id ||
      !Number.isFinite(level)
    )
      continue;
    const count = tooltips.get(id);
    if (count === undefined)
      throw new Error("GitHub calendar counts unavailable");
    days.push({ date, count, level });
  }
  if (!days.length) throw new Error("GitHub calendar unavailable");
  days.sort((a, b) => a.date.localeCompare(b.date));
  const end = today.startsWith(`${year}-`) ? today : `${year}-12-31`;
  const expected =
    Math.round(
      (Date.parse(`${end}T00:00:00Z`) - Date.parse(`${year}-01-01T00:00:00Z`)) /
        86400000,
    ) + 1;
  if (days.length !== expected || days[0].date !== `${year}-01-01`)
    throw new Error("Incomplete GitHub calendar");
  return days;
}

export function activityStats(
  days: ContributionDay[],
  today = new Date().toISOString().slice(0, 10),
) {
  let longest = 0,
    run = 0;
  for (const day of days) {
    run = day.count ? run + 1 : 0;
    longest = Math.max(longest, run);
  }
  let current = 0;
  // Today's empty cell doesn't end yesterday's streak until the day is over.
  let index = days.length - 1;
  if (days[index]?.date === today && !days[index].count) index--;
  if (days.at(-1)?.date === today)
    while (index >= 0 && days[index--].count > 0) current++;
  return {
    total: days.reduce((sum, day) => sum + day.count, 0),
    current,
    longest,
  };
}
