import styles from './LanguageSelector.module.css'
import {useTranslation} from "react-i18next";
import {Globe2Icon} from "clicons-react";

const LANGUAGES = [
  {code: 'en', label: 'en'},
  {code: 'uk', label: 'ua'},
];

const LanguageSelector = () => {
  const {i18n} = useTranslation();

  return (
    <div className={styles.langSelector}>
      <Globe2Icon/>
      {LANGUAGES.map(({code, label}) => (
        <button
          key={code}
          onClick={() => i18n.changeLanguage(code)}
          aria-pressed={i18n.resolvedLanguage === code}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;