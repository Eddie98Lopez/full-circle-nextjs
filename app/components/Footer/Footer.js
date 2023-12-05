import React from "react";
import styles from "./Footer.module.css";
import SubscribeForm from "../Subscribe/SubscribeForm";
import SocialList from "../SocialComponent/SocialList";
import socialDummyData from "../SocialComponent/dummyData";

const Footer = (props) => {
  return (
    <footer className={`bg-2 ${styles.footer}`}>
      <div className={styles.sub}>
      <SubscribeForm />
      </div>
      
      <div className={styles.divider}></div>
      <div className={styles.links}>links</div>
      <div className={styles.social}>
        <h3 className="display-1 text-2xl">Follow us</h3>
        <SocialList array={socialDummyData} theme="light" align='left' />
      </div>
      <div className={styles.order}></div>
      <div className={styles.logo}>Logo</div>
      <div className={styles.hours}>Hours</div>
    </footer>
  );
};

export default Footer;
