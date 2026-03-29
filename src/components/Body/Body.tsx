import { useMemo, useState } from "react";
import { projects } from "../../data/projects";
import { ProjectStatus, type Project, type ProjectTechStack } from "../../types/project";
import styles from "./body.module.scss";

const orderedProjects = [...projects].sort((left, right) => {
  if (left.featured === right.featured) {
    return right.year - left.year;
  }
  return Number(right.featured) - Number(left.featured);
});

const statusLabelByType: Record<ProjectStatus, string> = {
  [ProjectStatus.Live]: "Live",
  [ProjectStatus.InProgress]: "In Progress",
  [ProjectStatus.Private]: "Private"
};

type StatusFilter = ProjectStatus | "all";
type StackFilter = ProjectTechStack | "all";

function ProjectActions({ project }: { project: Project }) {
  const unavailableMessage =
    project.availabilityNote ??
    (project.status === ProjectStatus.Private ? "Private project." : "Not hosted yet.");

  return (
    <div className={styles.actions}>
      {project.demoUrl ? (
        <a href={project.demoUrl} target="_blank" rel="noreferrer">
          <button className="primaryButton" type="button">
            View Live
          </button>
        </a>
      ) : (
        <span className={styles.unavailable}>{unavailableMessage}</span>
      )}

      {project.repoUrl ? (
        <a href={project.repoUrl} target="_blank" rel="noreferrer">
          <button className="secondaryButton" type="button">
            View Repo
          </button>
        </a>
      ) : null}

      {project.caseStudyUrl ? (
        <a href={project.caseStudyUrl} target="_blank" rel="noreferrer">
          <button className="secondaryButton" type="button">
            Case Study
          </button>
        </a>
      ) : null}
    </div>
  );
}

function Body() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [stackFilter, setStackFilter] = useState<StackFilter>("all");

  const stackOptions = useMemo(() => {
    return [...new Set(projects.flatMap((project) => project.techStack))].sort((left, right) =>
      left.localeCompare(right)
    );
  }, []);

  const filteredProjects = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return orderedProjects.filter((project) => {
      const statusMatch = statusFilter === "all" || project.status === statusFilter;
      const stackMatch = stackFilter === "all" || project.techStack.includes(stackFilter);

      if (!query) {
        return statusMatch && stackMatch;
      }

      const searchableContent = [
        project.title,
        project.summary,
        project.description,
        project.year.toString(),
        ...project.tags,
        ...project.techStack
      ]
        .join(" ")
        .toLowerCase();

      return statusMatch && stackMatch && searchableContent.includes(query);
    });
  }, [searchTerm, stackFilter, statusFilter]);

  const statusClassByType: Record<ProjectStatus, string> = {
    [ProjectStatus.Live]: styles.statusLive,
    [ProjectStatus.InProgress]: styles.statusInProgress,
    [ProjectStatus.Private]: styles.statusPrivate
  };

  const hasFilters = searchTerm.trim() !== "" || statusFilter !== "all" || stackFilter !== "all";

  const clearFilters = () => {
    setSearchTerm("");
    setStatusFilter("all");
    setStackFilter("all");
  };

  return (
    <section className={styles.projects} id="projects" aria-labelledby="projects-title">
      <div className="container">
        <div className={styles.headline}>
          <p>Selected Work</p>
          <h2 id="projects-title">Selected Projects</h2>
          <span />
        </div>

        <div className={styles.controls}>
          <label className={styles.controlField}>
            <span>Search</span>
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search by title, tag, stack, or description"
            />
          </label>

          <label className={styles.controlField}>
            <span>Status</span>
            <select
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value as StatusFilter)}
            >
              <option value="all">All statuses</option>
              <option value={ProjectStatus.Live}>Live</option>
              <option value={ProjectStatus.InProgress}>In Progress</option>
              <option value={ProjectStatus.Private}>Private</option>
            </select>
          </label>

          <label className={styles.controlField}>
            <span>Stack</span>
            <select
              value={stackFilter}
              onChange={(event) => setStackFilter(event.target.value as StackFilter)}
            >
              <option value="all">All stacks</option>
              {stackOptions.map((stackItem) => (
                <option key={stackItem} value={stackItem}>
                  {stackItem}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className={styles.resultsBar}>
          <p>
            Showing {filteredProjects.length} project
            {filteredProjects.length === 1 ? "" : "s"}
          </p>
          {hasFilters ? (
            <button type="button" className={styles.clearFilters} onClick={clearFilters}>
              Clear filters
            </button>
          ) : null}
        </div>

        {filteredProjects.length === 0 ? (
          <div className={styles.emptyState}>
            <h3>No matching projects</h3>
            <p>Try a different keyword, status, or stack filter.</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {filteredProjects.map((project) => (
              <article key={project.id} className={styles.card}>
                <div className={styles.imageWrap}>
                  <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
                </div>

                <div className={styles.content}>
                  <div className={styles.header}>
                    <h3>{project.title}</h3>
                    <div className={styles.headerMeta}>
                      <span className={`${styles.statusBadge} ${statusClassByType[project.status]}`}>
                        {statusLabelByType[project.status]}
                      </span>
                      <time>{project.year}</time>
                    </div>
                  </div>

                  <h4>{project.summary}</h4>
                  <p>{project.description}</p>

                  <ul className={styles.tags}>
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>

                  <div className={styles.techStack}>
                    <span>Stack</span>
                    <p>{project.techStack.join(" • ")}</p>
                  </div>

                  <ProjectActions project={project} />
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Body;
