import styles from './AllProjects.module.css'
import {projectsData} from "../../data/projectsData.ts";
import ProjectItem from "./components/ProjectItem/ProjectItem.tsx";
import {ArrowLeft} from "clicons-react";
import {Link} from "react-router-dom";


const AllProjects = () => {
  return (
    <div>
      <Link className={styles.back} to="/"><ArrowLeft/> Назад</Link>
      <header className={styles.header}>
      <h1>Мої проєкти</h1>
      <p>Від готових продуктів до експериментів, які я ще розвиваю</p>
      </header>

      <div className={styles.projects}>
        {projectsData.map(project => (
          <ProjectItem key={project.slug} project={project}/>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;