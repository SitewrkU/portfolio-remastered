import { useEffect, useState } from "react";
import styles from './BottomFade.module.css'
import {ArrowDown} from "clicons-react";

const BottomFade = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const check = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const hasScroll = scrollHeight > clientHeight + 10;
      const notAtBottom = scrollTop + clientHeight < scrollHeight - 30;

      setShow(hasScroll && notAtBottom);
    };

    check();
    window.addEventListener("scroll", check);
    window.addEventListener("resize", check);

    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  if (!show) return null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.bottomFade} />
      <ArrowDown className={styles.arrow} />
    </div>
  );
};

export default BottomFade;