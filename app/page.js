import HeroSection from "./components/HeroSection/HeroSection";
import SectionHeader from "./components/SectionHeader/SectionHeader";
import FeaturedSection from "./components/FeaturedBeers/FeaturedSection";
import SloganTagline from "./components/Slogan/SloganTagline";
import SocialList from "./components/SocialComponent/SocialList";
import socialDummyData from "./components/SocialComponent/dummyData";
import ImageLinkList from "./components/ImageLink/ImageLinkList";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <SloganTagline />
      <FeaturedSection />

      <ImageLinkList/>

      <section className="section">image, hours, and map</section>

      <section className="section">
        <SectionHeader title="follow us" />
        <SocialList array={socialDummyData}/>
      </section>


      <section className="section">
        <SectionHeader title="blog" />
      </section>
      
    </main>
  );
}
