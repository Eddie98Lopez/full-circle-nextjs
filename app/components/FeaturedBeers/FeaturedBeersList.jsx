"use client";

import React, { useEffect, useState, useRef } from "react";
import FeaturedBeerCard from "./FeaturedBeerCard";
import { Carousel,CarouselSlide } from "../Carousel";

const FeaturedBeersList = ({ array, ...props }) => {

  return(
    <Carousel array={array}>
      {array.map((item,i)=>{
        return(
        <CarouselSlide key={Math.random()} id={`feature-${i}`} index={i}>
          <FeaturedBeerCard beer={item}/>
        </CarouselSlide>)
      })}
    </Carousel>
  )

};

export default FeaturedBeersList;
