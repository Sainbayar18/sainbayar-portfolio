import { NextRequest, NextResponse } from "next/server";
import { activitySnapshot, parseContributions } from "@/lib/github-activity";

export async function GET(request: NextRequest) {
  const currentYear = new Date().getUTCFullYear();
  const year = Number(request.nextUrl.searchParams.get("year") || currentYear);
  if (!Number.isInteger(year) || year < 2023 || year > currentYear)
    return NextResponse.json({ error: "Invalid year" }, { status: 400 });
  try {
    const until =
      year === currentYear
        ? new Date().toISOString().slice(0, 10)
        : `${year}-12-31`;
    const response = await fetch(
      `https://github.com/users/Sainbayar18/contributions?from=${year}-01-01&to=${until}`,
      {
        headers: { Accept: "text/html", "User-Agent": "Sainbayar-Portfolio" },
        next: { revalidate: 3600 },
        signal: AbortSignal.timeout(8000),
      },
    );
    if (!response.ok) throw new Error(`GitHub returned ${response.status}`);
    const days = parseContributions(await response.text(), year);
    return NextResponse.json(
      {
        year,
        days,
        source: "live",
        updated: new Date().toISOString().slice(0, 10),
      },
      {
        headers: {
          "Cache-Control":
            "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      },
    );
  } catch (error) {
    console.warn(
      "GitHub activity refresh failed:",
      error instanceof Error ? error.message : "Unknown response",
    );
    const snapshot = activitySnapshot(year);
    if (snapshot)
      return NextResponse.json(snapshot, {
        headers: { "Cache-Control": "public, s-maxage=300" },
      });
    return NextResponse.json(
      { error: "GitHub is temporarily unavailable" },
      { status: 503 },
    );
  }
}
