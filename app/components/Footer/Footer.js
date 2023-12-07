import React from "react";
import styles from "./Footer.module.css";
import SubscribeForm from "../Subscribe/SubscribeForm";
import SocialList from "../SocialComponent/SocialList";
import socialDummyData from "../SocialComponent/dummyData";
import FooterLinks from "./Footer Components/FooterLinks/FooterLinks";
import FooterLogo from "./Footer Components/FooterLogo/FooterLogo";

const Footer = (props) => {
  return (
    <footer className={`bg-2 ${styles.footer}`}>
      <div className={styles.sub}>
        <SubscribeForm />
      </div>

      <div className={`${styles.divider}`}></div>
      <div className={styles.links}>
        <FooterLinks />
      </div>
      <div className={styles.social}>
        <h3 className="display-1 text-2xl">Follow us</h3>
        <SocialList array={socialDummyData} theme="light" align="left" />
      </div>
      <div className={styles.order}>
        <h3 className="display-1 text-2xl">Order Now</h3>
        <div className="flex gap-3 max-[768px]:justify-center">
        <button className='btn margin-auto'>delivery</button>
        <button className='btn margin-auto'>pick-up</button>
        </div>
      </div>
      <div className={styles.logo}>
        <FooterLogo/>
      </div>
      <div className={styles.hours}>Hours</div>
    </footer>
  );
};

export default Footer;
