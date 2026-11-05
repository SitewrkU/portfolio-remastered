import styles from './Contacts.module.css'
import {Telegram, Mail, GithubLogo, ArrowUpRight} from "clicons-react";

const Contacts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <hr/>
        <h1>Є що обговорити?</h1>
        <p>Відкритий до цікавих проєктів, співпраці та простого спілкування.</p>
      </div>

      <div className={styles.links}>

        <a target='_blank' href="https://t.me/likebattw">
          <ArrowUpRight className={styles.decorLinkIcon}/>
        <div className={styles.linkContainer}>
          <Telegram/>
          <p className={styles.title}>Telegram</p>
          <p className={styles.subtle}>Написати</p>
        </div>
        </a>

        <a href="mailto:ivanbattiex@gmail.com">
          <ArrowUpRight className={styles.decorLinkIcon}/>
        <div className={styles.linkContainer}>
          <Mail/>
          <p className={styles.title}>Mail</p>
          <p className={styles.subtle}>Написати листа</p>
        </div>
        </a>

        <a target='_blank' href="https://github.com/SitewrkU">
          <ArrowUpRight className={styles.decorLinkIcon}/>
        <div className={styles.linkContainer}>
          <GithubLogo/>
          <p className={styles.title}>Github</p>
          <p className={styles.subtle}>Мій профіль</p>
        </div>
        </a>

      </div>

    </div>
  );
};

export default Contacts;