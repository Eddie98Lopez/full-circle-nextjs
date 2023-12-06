import React from 'react'
import Link from 'next/link'
import links from '../../../Navigation/links'
import styles from './FooterLinks.module.css'

const FooterLinks = () => {
  return (
    <ul className={`${styles.ul} display-2`}>
        {links.map(item => <Link key={'footer-link' + item.name} href={item.path}>{item.name}</Link>)}
    </ul>
  )
}

export default FooterLinks