import LanguageSelector from "../../components/LanguageSelector/LanguageSelector.tsx";
import Divider from "../../components/Divider/Divider.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import { useTranslation } from "react-i18next";

import styles from './MobilePlaceholder.module.css'

const MobilePlaceholder = () => {
  const { t } = useTranslation();
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

      <Divider />
      <Footer />
    </div>
  );
};

export default MobilePlaceholder;