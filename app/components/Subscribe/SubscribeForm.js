"use client";
import React, { useState } from "react";
import styles from './Subscribe.module.css'

const SubscribeForm = () => {
  const [email, setEmail] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmail(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <form onSubmit={handleSubmit} className="">
      <div className="w-full">
        <label className={`${styles.label} display-1 `}>Join the Tribe!</label>
        <div>
        <input
        className={`${styles.input}`}
          name="email"
          placeholder="email"
          type="email"
          onChange={handleChange}
        />
         <button className={`btn ${styles.button}`}>subscribe</button>
      </div>
      </div>
     
    </form>
  );
};

export default SubscribeForm;
