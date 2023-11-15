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

      <ImageLinkList />

      <section className="section">
        <SectionHeader title="follow us" />
        <SocialList array={socialDummyData} />
      </section>

      <section className="section">
        <div>image</div>
        <aside className="tagline bg-2">
          <h3>Full cirlce brewing Co.</h3>
          <p>1234 Boop st Fresno CA 97300</p>
        </aside>
        <div>map</div>
      </section>

      <section className="section">
        <SectionHeader title="blog" />
      </section>
    </main>
  );
}
