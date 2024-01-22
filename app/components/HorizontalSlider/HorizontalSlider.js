import React from 'react'
import styles from './HorizontalSlider.module.css'

const HorizontalSlider = ({children,className,...props}) => {
  return (
    <div className={`${styles.holster} ${props.className}`}>
        <ul className={styles.container}>
            {children}
        </ul>
    </div>
  )
}

export default HorizontalSlider