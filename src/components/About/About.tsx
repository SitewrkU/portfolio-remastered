import {motion} from "framer-motion";
import styles from './About.module.css'
import Info from "./components/Info/Info.tsx";
import TechStack from "./components/TechStack/TechStack.tsx";
import {aboutContainer, inView} from "../../animations.ts";

const About = () => {
  return (
    <motion.div className={styles.about} variants={aboutContainer} {...inView}>
      <Info/>
      <TechStack/>
    </motion.div>
  );
};

export default About;