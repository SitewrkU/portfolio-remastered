import styles from './AllProjects.module.css'
import {projectsData} from "../../data/projectsData.ts";
import ProjectItem from "./components/ProjectItem/ProjectItem.tsx";
import {ArrowLeft} from "clicons-react";
import {Link} from "react-router-dom";
import type {ProjectCategory} from "../../data/projectsData.ts";

const sections: { category: ProjectCategory; title: string; subtitle?: string }[] = [
  { category: 'main', title: 'Основні проєкти' },
  { category: 'experiment', title: 'Експерименти', subtitle: 'Невеликі штуки, зроблені для фану' },
];


const AllProjects = () => {
  return (
    <div>
      <Link className={styles.back} to="/"><ArrowLeft/> Назад</Link>
      <header className={styles.header}>
        <h1>Мої проєкти</h1>
        <p>Від готових продуктів до експериментів, які я ще розвиваю</p>
      </header>

      {sections.map(({category, title, subtitle}) => {
        const items = projectsData.filter(p => p.category === category);
        if (items.length === 0) return null;

        return (
          <section key={category} className={styles.section}>
            <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{title}</h2>
            {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
            </div>
            <div className={styles.projects}>
              {items.map(project => (
                <ProjectItem key={project.slug} project={project}/>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default AllProjects;