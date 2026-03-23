import HeroScene from "./HeroScene";
import styles from "./header.module.scss";

function Header() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={styles.header}>
      <HeroScene />
      <div className={`container ${styles.inner}`}>
        <p className={styles.kicker}>Full-stack Developer</p>
        <h1>Zaid Qarout</h1>
        <h2>Building digital products with engineering precision and design intent.</h2>
        <p className={styles.intro}>
          This portfolio focuses on real shipped work, strong fundamentals, and rapid
          iteration across frontend, backend, and product collaboration.
        </p>
        <button className="primaryButton" type="button" onClick={scrollToProjects}>
          View Projects
        </button>
      </div>
    </header>
  );
}

export default Header;
