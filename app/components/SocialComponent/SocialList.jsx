import React from "react";
import SocialLink from "./SocialLink";
import styles from './Social.module.css'

const SocialList = ({ array, ...props }) => {
  return (
    <ul className={`${styles.list} ${props.theme}`} >
      {array.map((link) => {
       return <SocialLink key ={link.id} link={link}/>;
      })}
    </ul>
  );
};

export default SocialList;
