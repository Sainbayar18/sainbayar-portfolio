"use client";

import { useId, useState } from "react";
import { usePreferences } from "./preferences";
import { UpworkCard } from "./upwork-card";
import { UtestCard } from "./utest-card";

export function PlatformSwitcher() {
  const { t } = usePreferences();
  const [platform, setPlatform] = useState("Upwork");
  const id = useId();
  return (
    <section
      className="platform-switcher"
      aria-label={t({ en: "Freelance profiles", mn: "Фриланс профайлууд" })}
    >
      <div
        className="platform-buttons"
        aria-label={t({ en: "Choose a platform", mn: "Платформ сонгох" })}
      >
        {["Upwork", "uTest"].map((name) => (
          <button
            key={name}
            type="button"
            aria-pressed={platform === name}
            aria-controls={`${id}-profile`}
            onClick={() => setPlatform(name)}
          >
            {name}
          </button>
        ))}
      </div>
      <div id={`${id}-profile`} aria-live="polite">
        {platform === "Upwork" ? <UpworkCard /> : <UtestCard />}
      </div>
    </section>
  );
}
