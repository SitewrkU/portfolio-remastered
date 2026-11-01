import styles from './TechStack.module.css'

import {techData} from "../../../../data/techData.ts";

const TechStack = () => {
  return (
    <div className={styles.techstack}>
      <div className={styles.header}>
        <p>Мій стек</p>
      </div>

      {techData.map(group => (
        <div className={styles.group} key={group.name}>
          <p className={styles.groupName}>{group.name}</p>
          <div className={styles.techlist}>
          {group.technologies.map(tech => (
            <div className={styles.tech} key={tech}>
              <p>{tech}</p>
            </div>
          ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStack;