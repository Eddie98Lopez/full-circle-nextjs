import React from "react";
import styles from "./Footer.module.css";
import SubscribeForm from "../Subscribe/SubscribeForm";
import SocialList from "../SocialComponent/SocialList";
import socialDummyData from "../SocialComponent/dummyData";

const Footer = (props) => {
  return (
    <footer className={`bg-2 ${styles.footer}`}>
      <SubscribeForm />
      <div className={styles.divider}></div>
      <div>links</div>
      <div>
        <h3 className="display-1">Follow us</h3>
        <SocialList array={socialDummyData} theme="light" />
      </div>
    </footer>
  );
};

export default Footer;
