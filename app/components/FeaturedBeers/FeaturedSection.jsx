import React from 'react'
import FeaturedBeersList from "./FeaturedBeersList";
import SectionHeader from '../SectionHeader/SectionHeader';
import dummyBeers from './dummyData';

const FeaturedSection = () => {
  return (
    <section className="bg-1 section">
    <div className="bg-3 h-full relative">
      <SectionHeader title="featured beers" />
      <FeaturedBeersList array={dummyBeers} />
    </div>
  </section>
  )
}

export default FeaturedSection