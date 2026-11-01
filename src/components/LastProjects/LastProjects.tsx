import styles from './LastProjects.module.css'
import ProjectItem from "../../ui/ProjectItem/ProjectItem.tsx";
import {projectsData} from "../../data/projectsData.ts";
import {ArrowRight} from "clicons-react";
import { Link } from "react-router-dom";

const LastProjects = () => {

  const firstFourProject = projectsData.slice(0, 4);

  return (
    <div className={styles.lastProjects}>
      <div className={styles.headercontainer}>
        <p className={styles.header}>Проєкти</p>
        <p className={styles.headersub}>Останні 4 роботи, над якими я працював:</p>
      </div>

      <div className={styles.projects}>
      {firstFourProject.map(project => (
        <ProjectItem project={project} key={project.slug}/>
      ))}
      </div>
      
      <div className={styles.viewMore}>
        <Link to={"/projects"}>Переглянути всі проєкти <ArrowRight/></Link>
      </div>
    </div>
  );
};

export default LastProjects;