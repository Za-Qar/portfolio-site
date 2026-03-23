import logo from "../../imgs/active.svg";
import styles from "./nav.module.scss";

function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <a className={styles.brand} href="#top" aria-label="Back to top">
          <img src={logo} alt="" />
          <span>Zaid Qarout</span>
        </a>

        <ul className={styles.links}>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="https://github.com/za-qar" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
