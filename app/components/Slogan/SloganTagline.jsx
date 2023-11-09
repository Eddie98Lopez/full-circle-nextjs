import React from "react";
import styles from './Slogan.module.css'

const SloganTagline = () => {
  return (
    <aside className="tagline bg-2">
      <div className={styles.wrapper}>
        <div>COLD BEER.</div>
        <div>LIVE MUSIC.</div>
        <div>A THIRD THING.</div>
      </div>
    </aside>
  );
};

export default SloganTagline;
