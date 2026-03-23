import { projects } from "../../data/projects";
import type { Project } from "../../types/project";
import styles from "./body.module.scss";

const orderedProjects = [...projects].sort((left, right) => {
  if (left.featured === right.featured) {
    return right.year - left.year;
  }
  return Number(right.featured) - Number(left.featured);
});

function ProjectActions({ project }: { project: Project }) {
  return (
    <div className={styles.actions}>
      {project.demoUrl ? (
        <a href={project.demoUrl} target="_blank" rel="noreferrer">
          <button className="primaryButton" type="button">
            View Live
          </button>
        </a>
      ) : null}

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
  return (
    <section className={styles.projects} id="projects" aria-labelledby="projects-title">
      <div className="container">
        <div className={styles.headline}>
          <p>Selected Work</p>
          <h2 id="projects-title">Selected Projects</h2>
          <span />
        </div>

        <div className={styles.grid}>
          {orderedProjects.map((project) => (
            <article key={project.id} className={styles.card}>
              <div className={styles.imageWrap}>
                <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
              </div>

              <div className={styles.content}>
                <div className={styles.header}>
                  <h3>{project.title}</h3>
                  <time>{project.year}</time>
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
      </div>
    </section>
  );
}

export default Body;
