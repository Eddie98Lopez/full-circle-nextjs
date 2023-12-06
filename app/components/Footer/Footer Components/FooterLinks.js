import React from 'react'
import Link from 'next/link'
import links from '../../Navigation/links'

const FooterLinks = () => {
  return (
    <ul className='display-2 grid grid-cols-3  w-full text-2xl gap-4 text-right max-[500px]:text-center'>
        {links.map(item => <Link key={'footer-link' + item.name} href={item.path}>{item.name}</Link>)}
    </ul>
  )
}

export default FooterLinks