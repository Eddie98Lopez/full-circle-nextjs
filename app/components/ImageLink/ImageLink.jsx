'use client'

import React, { useRef } from 'react'
import styles from './ImageLink.module.css'
import useOnScreen from "@/app/utils/useOnScreen";

const ImageLink = ({link,...props}) => {
  const linkRef= useRef()
  const visible = useOnScreen(linkRef)
  
 
    const {background, display, href } = link
  return (
    <li
    ref={linkRef}
      key={Math.random()}
      className={`${styles.item} display-2 ${visible && 'animate__fadeIn'}`}
      style={{ backgroundImage: `url(${href})` }}
    >
      <div className={styles.bgdiv}>
        
      </div>
      <a>{display}</a>
    </li>
  )
}

export default ImageLink