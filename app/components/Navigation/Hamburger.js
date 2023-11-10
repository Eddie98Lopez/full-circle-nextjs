import React from 'react'
import { useOpen } from './NavProvider'
import Image from 'next/image'



const Hamburger = () => {

const value = useOpen()

const handleClick=()=> {
    console.log('clicked')
}
    
  return (
    <div onClick={handleClick}>
        <Image src={'/images/hamburger.svg'} alt='logo' height={32} width={32}/>
    </div>
  )
}

export default Hamburger