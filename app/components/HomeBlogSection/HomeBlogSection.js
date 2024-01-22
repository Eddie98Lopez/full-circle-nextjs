import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import HorizontalSlider from '../HorizontalSlider/HorizontalSlider'
import BlogSliderThumb from '../Blog/BlogSliderThumb/BlogSliderThumb'

const HomeBlogSection = () => {
  return (
    <section className='section'>
        <SectionHeader title='blog'/>
        <HorizontalSlider>
            <BlogSliderThumb/>
            <BlogSliderThumb/>
            <BlogSliderThumb/>
            <BlogSliderThumb/>
        </HorizontalSlider>
    </section>
  )
}

export default HomeBlogSection