import styles from './ProjectItem.module.css'
import type {Project} from "../../../../data/projectsData.ts";
import {LinkSquare2, ArrowRight, MultiplicationSignCircle, InformationCircle, Layers} from "clicons-react";
import GithubButton from "../../../../ui/Buttons/GithubButton/GithubButton.tsx";
import clsx from "clsx";
import {Tooltip} from "../../../../ui/Tooltip/Tooltip.tsx";
import {Link} from 'react-router-dom'

interface ProjectType {
  project: Project;
}

const ProjectItem = ({project}: ProjectType) => {
  return (
    <div className={styles.project}>

      <div className={styles.preview}>
        {project.details && (
          <Tooltip content={'В проєкта є своя сторінка з інформацією'}>
          <Layers className={styles.detailsIcon}/>
          </Tooltip>
        )}
        <img src={project.image} alt="project image"/>
      </div>

      <div className={styles.info}>
        <p className={styles.name}>{project.name}</p>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.techlist}>
        {project.technologies.map(t => (
          <p>{t}</p>
        ))}
        </div>

        <div className={styles.actions}>
          <a
            className={clsx(styles.projectsButton, !project.live_url && styles.disabled)}
            href={project.live_url}
            target="_blank">
            {project.live_url ?
              (
                <><LinkSquare2/> Переглянути <ArrowRight/></>
              )
              :
              (
                <Tooltip content={'Цей проєкт треба ставити локально.'}>
                  <span><MultiplicationSignCircle/> Демо немає</span>
                </Tooltip>
              )
            }

          </a>
          <GithubButton gitlink={project.code_url}/>
        </div>
      </div>

      {project.details && (
        <Link to={`/projects/${project.slug}`}>
        <div className={styles.detailsButton}>
          <InformationCircle/>
          <p>Більше про проєкт</p>
        </div>
        </Link>
      )}

    </div>
  );
};

export default ProjectItem;