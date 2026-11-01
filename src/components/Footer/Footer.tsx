import styles from './Footer.module.css'
import {username} from "../../App.tsx";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.version}>v{__APP_VERSION__}</p>
      <div className={styles.main}>
        <p>&copy; {new Date().getFullYear()} {username}. Всі права захищено</p>
        <p className={styles.links}>
          <a href="https://github.com/SitewrkU">Github</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;