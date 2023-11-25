import React from "react";
import styles from "./Hero.module.css";


const HeroSection = (props) => {
  return (
    <section className={`${styles.wrapper} section`} name='hero-section'>
      <div className={styles.tagline}>
        <h1 className="display-2 text-5xl sm:text-7xl text-center">#goodvibesonly</h1>
        <p className="text-2xl font-semibold">
          The world can be negative and full of bad vibes. So we made more
          approachable craft beer that acts as a social lubricant for positive
          people to find their authentic self, craft their vibe, & find
          their tribe.
        </p>
        <button className="btn">Learn More</button>
      </div>
      <video
        className={styles.herovideo}
        preload="auto"
        loop={true}
        autoPlay
        muted
        playsInline
        crossOrigin="anonymous"
      >
        <source src="file.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default HeroSection;
