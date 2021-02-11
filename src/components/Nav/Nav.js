import React from "react";

// Styling
import styles from "./nav.module.css";
import cn from "classnames";

// Imgs
// import active from "../../imgs/active.svg";
import logo from "../../imgs/active.svg";

function Nav() {
  return (
    <nav className={cn(styles.nav)}>
      <div className={cn(`container`)}>
        <ul className={cn(styles.navUl)}>
          <a href="">
            <img alt="logo" className={cn(styles.logo)} src={logo} />
          </a>
          <li className={cn(styles.web)}>
            <a
              href="https://www.behance.net/zaidqarout"
              target="_blank"
              rel="noreferrer"
            >
              <span>Design Portfolio</span>
              <div className={cn(styles.active)}></div>
            </a>
          </li>
          <li className={cn(styles.web)}>
            <a
              href="https://github.com/za-qar"
              target="_blank"
              rel="noreferrer"
            >
              <span>Github/About me</span>
              <div className={cn(styles.active)}></div>
            </a>
          </li>
          <li className={cn(styles.mobile)}>
            <a
              href="https://www.behance.net/zaidqarout"
              target="_blank"
              rel="noreferrer"
            >
              <div className={cn(styles.mobBehance)}></div>
            </a>
          </li>
          <li className={cn(styles.mobile)}>
            <a
              href="https://github.com/Za-Qar"
              target="_blank"
              rel="noreferrer"
            >
              <div className={cn(styles.mobGithub)}></div>
            </a>
          </li>
          <li className={cn(styles.mobile)}>
            <a
              href="https://www.linkedin.com/in/zaid-qarout-546a6b79/"
              target="_blank"
              rel="noreferrer"
            >
              <div className={cn(styles.mobLinkedIn)}></div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
