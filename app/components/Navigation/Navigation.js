'use client'

import React, {useState} from 'react'
import NavBar from './NavBar'

import NavProvider from './NavProvider'
import { type } from 'os';


const Navigation = () => {
  return (
    
    <NavProvider>
    
    <NavBar/>
   
    
    </NavProvider>
   
  )
}

export default Navigation