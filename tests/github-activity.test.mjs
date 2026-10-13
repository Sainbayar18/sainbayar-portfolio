import assert from "node:assert/strict";
import test from "node:test";
import {
  activitySnapshot,
  activityStats,
  parseContributions,
} from "../src/lib/github-activity.ts";

// Attribute order and tooltip text match GitHub's public calendar markup.
function calendar(year, contributions = new Map()) {
  const days = activitySnapshot(year).days;
  return days
    .map((day, index) => {
      const count = contributions.get(day.date) ?? day.count;
      const id = `contribution-day-component-${index}`;
      return `<td tabindex="0" data-date="${day.date}" id="${id}" data-level="${count ? 4 : 0}" role="gridcell"></td><tool-tip for="${id}" role="tooltip">${count ? `${count.toLocaleString("en-US")} contributions` : "No contributions"} on this day.</tool-tip>`;
    })
    .join("\n");
}

test("reads a complete public calendar including comma-separated counts", () => {
  const days = parseContributions(
    calendar(2025, new Map([["2025-01-01", 1000]])),
    2025,
  );
  assert.equal(days.length, 365);
  assert.equal(days[0].count, 1000);
  assert.equal(
    days.reduce((sum, day) => sum + day.count, 0),
    1022,
  );
});

test("rejects missing tooltip counts and incomplete calendars", () => {
  assert.throws(
    () =>
      parseContributions(
        calendar(2025).replace(/<tool-tip[\s\S]*?<\/tool-tip>/, ""),
        2025,
      ),
    /counts unavailable/,
  );
  assert.throws(
    () =>
      parseContributions(calendar(2025).replace(/<td[\s\S]*?<\/td>/, ""), 2025),
    /Incomplete/,
  );
});

test("verified public snapshots include leap years and do not invent unknown years", () => {
  assert.equal(activitySnapshot(2024).days.length, 366);
  assert.equal(
    activitySnapshot(2024).days.reduce((sum, day) => sum + day.count, 0),
    0,
  );
  assert.equal(
    activitySnapshot(2025).days.reduce((sum, day) => sum + day.count, 0),
    22,
  );
  assert.equal(
    activitySnapshot(2023).days.reduce((sum, day) => sum + day.count, 0),
    1,
  );
  assert.equal(activitySnapshot(2022), null);
});

test("current streak allows an empty today but ends after an empty yesterday", () => {
  const today = new Date();
  const day = (offset, count) => ({
    date: new Date(
      Date.UTC(
        today.getUTCFullYear(),
        today.getUTCMonth(),
        today.getUTCDate() + offset,
      ),
    )
      .toISOString()
      .slice(0, 10),
    count,
    level: count ? 1 : 0,
  });
  assert.deepEqual(
    activityStats([day(-3, 0), day(-2, 2), day(-1, 1), day(0, 0)]),
    { total: 3, current: 2, longest: 2 },
  );
  assert.deepEqual(activityStats([day(-2, 1), day(-1, 0), day(0, 0)]), {
    total: 1,
    current: 0,
    longest: 1,
  });
  assert.equal(activityStats(activitySnapshot(2025).days).current, 0);
});
