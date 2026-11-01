import styles from './ProjectItem.module.css'
import type {Project} from "../../data/projectsData.ts";
import {LinkSquare2, ArrowRight, MultiplicationSignCircle} from "clicons-react";
import GithubButton from "../Buttons/GithubButton/GithubButton.tsx";
import clsx from "clsx";
import {Tooltip} from "../Tooltip/Tooltip.tsx";

interface ProjectType {
  project: Project;
}

const ProjectItem = ({project}: ProjectType) => {
  return (
    <div className={styles.project}>
      <div className={styles.preview}>
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
    </div>
  );
};

export default ProjectItem;