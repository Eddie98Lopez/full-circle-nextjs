'use client'
import React, {useState, useEffect} from "react";
import VerifyAge from "./VerifyAge";

const VerifyAgeModal = ({visible}) => {
  const [display,setDisplay] = useState(false)
  const modal = ()=>display ? 'block' : 'none'

  useEffect(()=>{
    const ofAge = localStorage.getItem('ofDrinkingAge')
    console.log(localStorage)
    console.log(ofAge)
    ofAge? setDisplay(false) : setDisplay(true)

  },[display])
  return (
    <div className="modal" style={{display:modal()}}>
      <VerifyAge modal={{display,setDisplay}} />
    </div>
  );
};

export default VerifyAgeModal;
