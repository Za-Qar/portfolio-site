import React from "react";

// Styling
import styles from "./header.module.css";
import cn from "classnames";

// Banner image
import spheres from "../../imgs/spheres.jpg";

// Banner vid
// import ReactPlayer from "react-player";
// import spheres from "../../imgs/spheres_banner_2.mp4";

function Header() {
  function scroll() {
    let pageHeight = window.innerHeight;
    window.scrollBy(0, 1000);
  }

  return (
    <div className={cn(styles.banner)}>
      <div className={cn(styles.bannerText)}>
        <h1>Zaid Qarout</h1>
        <h3>
          Fullstack Dev
          <br /> Portfolio
        </h3>

        <button className={cn("button", styles.button)} onClick={scroll}>
          View projects
        </button>
      </div>

      <img alt="banner" src={spheres} className={cn(styles.img)} />
      {/* <ReactPlayer
        className={cn(styles.vid)}
        url={spheres}
        muted={true}
        autoplay={true}
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
        width="100%"
        height="100%"
      /> */}
      {/* <video autoplay muted loop id="banner" className={cn(styles.vid)}>
        <source src={spheres} type="video/mp4" />
      </video> */}
    </div>
  );
}

export default Header;
