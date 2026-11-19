import LanguageSelector from "../../components/LanguageSelector/LanguageSelector.tsx";
import Divider from "../../components/Divider/Divider.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import { useTranslation } from "react-i18next";
import {projectsData} from "../../data/projectsData.ts";

import styles from './MobilePlaceholder.module.css'

const MobilePlaceholder = () => {
  const { t } = useTranslation();

  const filteredData = projectsData.filter(p => p.category === 'main');
  const firstFourProject = filteredData.slice(0, 4);

  return (
    <div className={styles.container}>
      <LanguageSelector />
      <p className={styles.title}>BattWrku</p>
      <p className={styles.subtitle}>{t('mobile.hello')}</p>
      <p className={styles.text}>{t('mobile.sorry')}</p>
      <p className={styles.text}>{t('mobile.notReady')}</p>
      <p className={styles.text}>{t('mobile.soon')}</p>
      <p className={styles.subtitle}>{t('mobile.infoTitle')}</p>
      <p className={styles.text}>{t('mobile.iAm', { profession: t('profession') })}</p>
      <p className={styles.text}>{t('mobile.from', { location: t('location') })}</p>
      <ul className={styles.links}>
        <li><a href="https://t.me/likebattw">Telegram</a></li>
        <li><a href="mailto:ivanbattiex@gmail.com">Mail</a></li>
        <li><a href="https://github.com/SitewrkU">Github</a></li>
      </ul>

      <p className={styles.subtitle}>{t('mobile.lastprojects')}</p>
      {firstFourProject.map(p => (
        <p className={styles.text}>
          <b>{p.name}</b> -
          <a href={p.code_url}>Github</a>
          {p.details?.downloadLink && (<span> ◆ <a href={p.details.downloadLink}>Download</a></span>)}
        </p>
      ))}
      <Divider />
      <Footer />
    </div>
  );
};

export default MobilePlaceholder;