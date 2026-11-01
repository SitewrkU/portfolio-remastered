import {Link, useParams} from 'react-router-dom';
import type {status} from "../../data/projectsData.ts";
import {projectsData} from "../../data/projectsData.ts";
import {ArrowLeft, Download, Github, LinkSquare2} from "clicons-react";
import clsx from "clsx";
import BottomFade from "../../ui/BottomFade/BottomFade.tsx";

import styles from './ProjectDetails.module.css'
import type {CSSProperties} from "react";

const ProjectDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find(p => p.slug === slug);

  if (!project || !project.details) {
    return (
      <div>
        <p>Додаткову інформацію про цей проєкт не знайдено...</p>
        <Link to="/projects">Назад</Link>
      </div>
    );
  }


  const getStatus = (status: status): string => {
    switch (status) {
      case 'finished': return 'Готовий';
      case 'archived': return 'Закинутий';
      case 'inprogress': return 'В розробці';
      default: {
        console.warn(`Неочікуваний статус: ${status}`);
        return 'Невизначено';
      }
    }
  }


  return (
    <div className={styles.container}
         style={{ '--bg-image': `url(${import.meta.env.BASE_URL}/${project.image})` } as CSSProperties}
    >

      <div className={styles.banner}>
        <img src={`${import.meta.env.BASE_URL}/${project.image}`} alt="project image" />
      </div>

      <div className={styles.content}>
        <Link className={styles.back} to="/projects"><ArrowLeft/> Назад</Link>
        <h1 className={styles.header}>{project.name}</h1>

        <div className={styles.tags}>
          <p className={styles.year}>{project.details?.year}</p>
          <p>◆</p>
          {project.details.status && (
            <p className={styles.status}>{getStatus(project.details?.status)}</p>
          )}
        </div>

        <div className={styles.section}>
        <p>{project.details.description}</p>
        </div>

        <section className={styles.section}>
          <h2>Передісторія</h2>
          <p>{project.details?.motivation}</p>
        </section>

        <section className={styles.section}>
          <h2>Досвід</h2>
          <p>{project.details?.takeaways}</p>
        </section>

        <section className={styles.actions}>
          <a target="_blank" href={project.live_url} className={clsx(project.live_url === undefined && styles.disabled)}><LinkSquare2/></a>
          {project.details.downloadLink && (
            <a target="_blank" href={project.details.downloadLink}><Download/></a>
          )}
          <a target="_blank" href={project.code_url}><Github/></a>
        </section>

      </div>

      <BottomFade/>
    </div>
  );
};

export default ProjectDetails;