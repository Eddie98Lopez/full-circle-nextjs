import React from 'react'
import { IoMdArrowDroprightCircle as RightCirle } from "react-icons/io";

import { IoMdArrowDropleftCircle as LeftCirle } from "react-icons/io";
import styles from './Controls.module.css'

const Controls = ({previous,next}) => {

  const handlePrevious = (e)=>{

    previous()
  }

  const handleNext = (e)=>{
 
    next()
  }
  return (
    <>

    <button onClick={handlePrevious} className={styles.left}>
      <LeftCirle />
    </button>
    <button onClick={handleNext} className={styles.right}>
      <RightCirle />
    </button>
  </>
  )
}

export default Controls