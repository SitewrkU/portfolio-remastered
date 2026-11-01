import styles from "./GithubButton.module.css";
import {GithubLogo} from "clicons-react";

interface GithubButtonProps {
  gitlink: string;
}

const GithubButton = ({gitlink}: GithubButtonProps) => {
  return (
    <a className={styles.githubButton} href={gitlink} target="_blank"><GithubLogo/> GitHub</a>
  );
};

export default GithubButton;