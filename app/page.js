import HeroSection from "./components/HeroSection/HeroSection";
import SectionHeader from "./components/SectionHeader/SectionHeader";
import FeaturedSection from "./components/FeaturedBeers/FeaturedSection";
import SloganTagline from "./components/Slogan/SloganTagline";
import SocialList from "./components/SocialComponent/SocialList";
import socialDummyData from "./components/SocialComponent/dummyData";
import ImageLinkList from "./components/ImageLink/ImageLinkList";
import TaproomSection from "./components/Taproom/TaproomSection";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <SloganTagline />

      <FeaturedSection />

      <ImageLinkList />

      <section className="section">
        <SectionHeader title="follow us" />
        <SocialList array={socialDummyData} />
      </section>

      
      <TaproomSection/>
     

      <section className="section">
        <SectionHeader title="blog" />
      </section>
    </main>
  );
}
