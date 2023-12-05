"use client";
import React, { useState } from "react";
import styles from './Subscribe.module.css'

const SubscribeForm = () => {
  const [email, setEmail] = useState();

  const handleChange = (e) => {
    const { name, value } = e;
    setEmail(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className={`${styles.label} display-1 `}>Join the Tribe!</label>
        <input
        className={`${styles.input}`}
          name="email"
          placeholder="email"
          type="email"
          onChange={handleChange}
        />
         <button className={`btn ${styles.button}`}>subscribe</button>
      </div>
     
    </form>
  );
};

export default SubscribeForm;
