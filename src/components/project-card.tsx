"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/portfolio";
import { usePreferences } from "./preferences";
import { ProjectArt } from "./visuals";
export function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const { t } = usePreferences();
  return (
    <Link href={`/projects/${project.slug}`} className="project-card">
      <div className="project-image">
        <ProjectArt kind={project.art} />
        <span className="project-open">
          <ArrowUpRight size={22} />
        </span>
        {project.sample ? (
          <span className="sample-label">
            {t({ en: "SAMPLE CONCEPT", mn: "ЖИШЭЭ КОНЦЕПТ" })}
          </span>
        ) : null}
      </div>
      <div className="project-meta">
        <span className="project-number">/{project.number}</span>
        <span>{project.tags.join(" / ")}</span>
      </div>
      <h3>
        {project.name}
        <ArrowUpRight size={23} />
      </h3>
      <p>{t(project.description)}</p>
    </Link>
  );
}
