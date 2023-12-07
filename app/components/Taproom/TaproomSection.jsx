import React from "react";
import Image from "next/image";
import styles from "./Taproom.module.css";

const TaproomSection = () => {
  return (
    <section>
      <div className={styles.imageWrapper}>
        <Image
          width={300}
          height={100}
          src="/images/location.webp"
          alt="photo-of-Taproom-street-view"
        />
      </div>
      <aside className={` bg-2 tagline`}>
        <h3>Full cirlce brewing Co.</h3>
        <p>1234 Boop st Fresno CA 97300</p>
      </aside>

      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12790.556090670494!2d-119.7869797!3d36.7312298!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8094609d3e68cc39%3A0xee1a58dff09675b7!2sFull%20Circle%20Brewing%20Co.!5e0!3m2!1sen!2sus!4v1700114567795!5m2!1sen!2sus"
          width="100%"
          height="450"
          allowfFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default TaproomSection;
