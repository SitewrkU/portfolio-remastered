import {useTranslation} from "react-i18next";
import type {GitHubUser} from "../../types/user.ts";
import GithubButton from "../../ui/Buttons/GithubButton/GithubButton.tsx";
import styles from './Header.module.css'
import {Location, Folder, ArrowRight, SourceCode} from "clicons-react";
import {Link} from "react-router-dom";

interface userData {
  user: GitHubUser;
  username: string;
}

const Header = ({user, username}:userData) => {

  const {t} = useTranslation();

  return (
    <div>
      <h1 className={styles.greeting}>{t('greeting', { name: user.name })}</h1>

      <div className={styles.userInfo}>
        <div className={styles.profileImageWrapper}>
          <img className={styles.profileImage} src={user.avatar_url} alt="avatar"/>
        </div>
        <div className={styles.info}>
          <p className={styles.textProfession}><SourceCode/>{t('profession')}</p>
          <p className={styles.textLocation}><Location/> {t('location')}</p>

          <p className={styles.textInfo}>{t('shortInfo')}</p>

          <div className={styles.cta}>
            <Link className={styles.projectsButton} to={'/projects'}><Folder/> {t('viewProjects')} <ArrowRight/></Link>
            <GithubButton gitlink={`https://github.com/${username}`}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;