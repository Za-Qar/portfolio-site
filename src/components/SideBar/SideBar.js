import React from "react";

// Styling
import styles from "./sideBar.module.css";
import cn from "classnames";

// Imgs
import linkedin from "../../imgs/linkedin.svg";
import email from "../../imgs/email.svg";

function SideBar() {
  return (
    <div className={cn(styles.main)}>
      {/* <img src={burger} className={cn(styles.burger)} /> */}

      <div className={cn(styles.socials)}>
        <a
          href="https://www.linkedin.com/in/zaid-qarout-546a6b79/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkedin" src={linkedin} className={cn(styles.burger)} />
        </a>
        <a href="mailto:za.qa@outlook.com">
          <img alt="email" src={email} className={cn(styles.burger)} />
        </a>
      </div>

      {/* <div className={cn(styles.others)}>
        <img src={linkedin} className={cn(styles.burger)} />
      </div> */}
    </div>
  );
}

export default SideBar;
