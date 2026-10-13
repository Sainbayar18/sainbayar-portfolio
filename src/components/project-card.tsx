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
        {project.sample ? (
          <span className="sample-label">
            {t({ en: "SAMPLE CONCEPT", ja: "コンセプト例" })}
          </span>
        ) : null}
      </div>
      <div className="project-card-content">
        <div className="project-meta">
          <span className="project-number">/{project.number}</span>
          <span>
            {t({
              en:
                project.category === "Web"
                  ? "Web development"
                  : "Interface design",
              ja: project.category === "Web" ? "Web開発" : "UIデザイン",
            })}
          </span>
        </div>
        <h3>
          {project.name}
          <ArrowUpRight size={22} aria-hidden="true" />
        </h3>
        <p>{t(project.description)}</p>
        <div className="project-card-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <span className="project-card-action">
          {t({ en: "Explore project", ja: "プロジェクトの詳細を見る" })}
          <ArrowUpRight size={16} aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
