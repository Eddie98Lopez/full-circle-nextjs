import React from "react";
import Image from "next/image";
import styles from "./Featured.module.css";
import Details from "./Details";
import Link from "next/link";

const FeaturedBeerCard = ({ beer, ...props }) => {
  const { image_src,id } = beer;
  return (
    
    <li className={`${styles.card}`}>
      <Link href={`/beers/${id}`}>

      <div className={`${styles.background} bg-2`}></div>

      <div className={`${styles.wrapper}`}>
        <div className={styles.imageWrapper}>
          <Image src='/12oz-can.png'alt='can-mockup' width={100} height={200}/>
        </div>

        <Details beer={beer}/>


      </div>
      </Link>
    </li>
    
  );
};

export default FeaturedBeerCard;
