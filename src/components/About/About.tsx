import styles from './About.module.css'
import Info from "./components/Info/Info.tsx";
import TechStack from "./components/TechStack/TechStack.tsx";

const About = () => {
  return (
    <div className={styles.about}>
      <Info/>
      <TechStack/>
    </div>
  );
};

export default About;