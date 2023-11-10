import React from 'react'
import Image from 'next/image'
import styles from './Header.module.css'

const SectionHeader = ({title,...props}) => {
  return (
    <div className={styles.wrapper}>
        <Image src='/images/hop.svg'  height={30} width={30} className={styles.icon} alt='beer-hop-icon'/>
        <h2 className='display-2 text-4xl'>{title}</h2>
    </div>
  )
}

export default SectionHeader