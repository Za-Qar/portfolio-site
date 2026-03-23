import linkedin from "../../imgs/linkedin.svg";
import email from "../../imgs/email.svg";
import styles from "./sideBar.module.scss";

function SideBar() {
  return (
    <aside className={styles.main} id="contact" aria-label="Social links">
      <div className={styles.socials}>
        <a
          href="https://www.linkedin.com/in/zaid-qarout-546a6b79/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="LinkedIn profile" src={linkedin} />
        </a>
        <a href="mailto:za.qa@outlook.com">
          <img alt="Email Zaid" src={email} />
        </a>
      </div>
    </aside>
  );
}

export default SideBar;
