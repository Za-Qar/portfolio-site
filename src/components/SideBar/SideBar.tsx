import cn from 'classnames';
import styles from './sideBar.module.scss';
import behance from '../../imgs/behance.svg';
import linkedin from '../../imgs/linkedin.svg';
import email from '../../imgs/email.svg';

function SideBar() {
  return (
    <div className={cn(styles.main)}>
      <div className={cn(styles.socials)}>
        <a href="https://www.behance.net/zaidqarout" target="_blank" rel="noreferrer">
          <img alt="behance" src={behance} className={cn(styles.burger)} />
        </a>
        <a href="https://www.linkedin.com/in/zaid-qarout-546a6b79/" target="_blank" rel="noreferrer">
          <img alt="linkedin" src={linkedin} className={cn(styles.burger)} />
        </a>
        <a href="mailto:za.qa@outlook.com">
          <img alt="email" src={email} className={cn(styles.burger)} />
        </a>
      </div>
    </div>
  );
}

export default SideBar;
