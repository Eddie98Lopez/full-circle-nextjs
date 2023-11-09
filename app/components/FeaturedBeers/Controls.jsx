import React from 'react'
import { BsFillArrowRightCircleFill as RightCirle } from "react-icons/bs";
import { BsFillArrowLeftCircleFill as LeftCirle } from "react-icons/bs";
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