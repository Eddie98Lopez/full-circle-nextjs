import React from 'react'
import Image from 'next/image'
import styles from './Header.module.css'
import HopIcon from '../HopIcon'

const SectionHeader = ({title,...props}) => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.icon}>
          <HopIcon/>
        </div>
        <h2 className='display-2 text-4xl'>{title}</h2>
    </div>
  )
}

export default SectionHeader