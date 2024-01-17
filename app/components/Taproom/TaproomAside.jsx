import React from 'react'
import styles from './Taproom.module.css'

const TaproomAside = () => {
  return (
    <aside className={` bg-2 tagline ${styles.aside}`}>
        <div className={styles.tap}>
        <h3>Full cirlce brewing Co.</h3>
        <p>1234 Boop st Fresno CA 97300</p>
        </div>
        <div className={styles.divider}/>
        <div className={styles.hrs}>
            <p>mon 9-5</p>
            <p>tues 9-5</p>
            <p>wed 9-5</p>
            <p>thurs 9-5</p>
            <p>fri 9-5</p>


        </div>
    

  </aside>
  )
}

export default TaproomAside