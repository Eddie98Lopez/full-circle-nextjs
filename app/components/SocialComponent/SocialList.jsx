import React from "react";
import SocialLink from "./SocialLink";
import styles from './Social.module.css'

const SocialList = ({ array, align, ...props }) => {
  const flex = ()=>{
    if (align==='left'){return 'justify-start'}
    else if (align==='right'){return 'justify-end'}
    else{return 'justify-center'}
  }
  return (
    <div className='w-full'>
    <ul className={` ${flex()} ${styles.socials} ${props.theme}`} >
      {array.map((link) => {
       return <SocialLink key ={link.id} link={link}/>;
      })}
    </ul>
    </div>
  );
};

export default SocialList;
