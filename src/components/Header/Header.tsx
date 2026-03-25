import cn from 'classnames';
import styles from './header.module.scss';
import HeroScene from '../Hero/HeroScene';

function Header() {
  function scroll() {
    window.scrollBy(0, 1000);
  }

  return (
    <div className={cn(styles.banner)}>
      <div className={cn(styles.canvas)}>
        <HeroScene />
      </div>
      <div className={cn(styles.bannerText)}>
        <h1>Zaid Qarout</h1>
        <h3>
          Fullstack Dev
          <br />Portfolio
        </h3>
        <button className={cn('button', styles.button)} onClick={scroll}>
          View projects
        </button>
      </div>
    </div>
  );
}

export default Header;
