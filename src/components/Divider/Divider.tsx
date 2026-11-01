import styles from './Divider.module.css'
import {ChevronDown} from "clicons-react";

const Divider = () => {
  return (
    <div className={styles.divider}>
      <div className={styles.dividerLine}></div>
      <ChevronDown className={styles.icon} />
      <div className={styles.dividerLine}></div>
    </div>
  );
};

export default Divider;