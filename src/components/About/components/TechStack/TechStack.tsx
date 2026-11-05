import {motion} from "framer-motion";
import styles from './TechStack.module.css'
import {techData} from "../../../../data/techData.ts";
import {fadeUp, tagsContainer} from "../../../../animations.ts";

const TechStack = () => {
  return (
    <motion.div className={styles.techstack} variants={fadeUp}>
      <div className={styles.header}>
        <p>Мій стек</p>
      </div>

      {techData.map(group => (
        <div className={styles.group} key={group.name}>
          <p className={styles.groupName}>{group.name}</p>
          <motion.div className={styles.techlist} variants={tagsContainer}>
            {group.technologies.map(tech => (
              <motion.div className={styles.tech} variants={fadeUp} key={tech}>
                <p>{tech}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
};

export default TechStack;