import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";
import type {GitHubUser} from "../../types/user.ts";
import GithubButton from "../../ui/Buttons/GithubButton/GithubButton.tsx";
import styles from './Header.module.css'
import {Location, Folder, ArrowRight, SourceCode} from "clicons-react";
import {Link} from "react-router-dom";
import {container, fadeUp, fadeScale} from "../../animations.ts";

interface userData {
  user: GitHubUser;
  username: string;
}

const Header = ({user, username}:userData) => {

  const {t} = useTranslation();

  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <motion.h1 variants={fadeUp} className={styles.greeting}>{t('greeting', { name: user.name })}</motion.h1>

      <div className={styles.userInfo}>
        <div className={styles.profileImageWrapper}>
          <img className={styles.profileImage} src={user.avatar_url} alt="avatar"/>
        </div>
        <div className={styles.info}>
          <motion.p variants={fadeUp} className={styles.textProfession}><SourceCode/>{t('profession')}</motion.p>
          <motion.p variants={fadeUp} className={styles.textLocation}><Location/> {t('location')}</motion.p>

          <motion.p variants={fadeUp} className={styles.textInfo}>{t('shortInfo')}</motion.p>

          <motion.div variants={fadeScale} className={styles.cta}>
            <Link className={styles.projectsButton} to={'/projects'}><Folder/> {t('viewProjects')} <ArrowRight/></Link>
            <GithubButton gitlink={`https://github.com/${username}`}/>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;