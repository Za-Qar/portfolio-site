import { useEffect, useRef } from 'react';
import styles from './cursor.module.scss';
import logo from '../../imgs/active.svg';

function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return <div ref={cursorRef} className={styles.cursor}>
    <img src={logo} alt="" />
  </div>;
}

export default Cursor;
