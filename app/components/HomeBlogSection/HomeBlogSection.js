import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import HorizontalSlider from "../HorizontalSlider/HorizontalSlider";
import BlogSliderThumb from "../Blog/BlogSliderThumb/BlogSliderThumb";
import blogDummyData from "../Blog/dummyData";

const HomeBlogSection = () => {
  return (
    <section className="section">
      <SectionHeader title="blog" />
      <HorizontalSlider>
        {blogDummyData.map((thumb) => (
          <BlogSliderThumb key={`blog-thumb-${thumb.id}`} blog={thumb} />
        ))}
      </HorizontalSlider>
    </section>
  );
};

export default HomeBlogSection;
