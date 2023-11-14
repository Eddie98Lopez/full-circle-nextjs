import React from "react";
import SocialLink from "./SocialLink";
import styles from './Social.module.css'

const SocialList = ({ array, ...props }) => {
  return (
    <div className='w-full'>
    <ul className={`${styles.socials} ${props.theme}`} >
      {array.map((link) => {
       return <SocialLink key ={link.id} link={link}/>;
      })}
    </ul>
    </div>
  );
};

export default SocialList;
