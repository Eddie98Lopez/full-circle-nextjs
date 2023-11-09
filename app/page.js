import FeaturedBeersList from "./components/FeaturedBeers/FeaturedBeersList";
import HeroSection from "./components/HeroSection/HeroSection";
import SectionHeader from "./components/SectionHeader/SectionHeader";
import dummyBeers from "./components/FeaturedBeers/dummyData";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <aside className="bg-2 tagline text-5xl ">
        <div className="flex flex-row w-full justify-apart gap-10">
        <div>COLD BEER.</div>
        <div>LIVE MUSIC.</div>
        <div>A THIRD THING.</div>
        </div>
      </aside>

      <section className="bg-1 section">
        <div className="bg-3 h-full relative" >
        <SectionHeader title="featured beers" />
        <FeaturedBeersList array={dummyBeers}/>
        </div>
      </section>

      <section className='section'>image, hours, and map</section>

      <section className='section'>
        <SectionHeader title="follow us" />
      </section>
      <section className='section'>
        <SectionHeader title="blog" />
      </section>
    </main>
  );
}
