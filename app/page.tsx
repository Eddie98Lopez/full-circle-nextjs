import ImageLinkCard from "@/components/image-link-card";
import SectionTitle from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { homeActions } from "@/lib/actions";
import Banner from "@/components/ui/banner";
import Image from "next/image";
import SocialLinksBar, { dummySocialLinks } from "@/components/social-bar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <section id="hero" className="grid grid-cols-1 grid-rows-[60vh]">
        {/* Video layer */}
        <div className="col-start-1 row-start-1 bg-gray-500 z-0">
          vidoe wrapper
        </div>

        {/* Content layer, on top */}
        <div className="col-start-1 row-start-1 z-10 flex flex-col items-center justify-center text-center md:w-1/2 md:mx-auto">
          <h1>Feels Like Your Taproom</h1>
          <p>
            You put real care into your brewery. It makes sense to want that
            same level of craftsmanship to carry through to your website. This
            is a demo site, just a concept, but if you see ideas here that could
            translate to your brand, book a call and we'll see whether a custom
            version tailored to your brewery makes sense for your business.
          </p>
          <Button variant={"outline"}>
            <Link
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3Mavz2MffYH9bwfpA4fcYKQlxHUh2JuV636QELOg7nOlRCjM9W7_RUW76BAFJTc3Y1Non5XxRb"
              target="_blank"
            >
              Book A Call
            </Link>
          </Button>
        </div>
      </section>
      <Banner>
        {" "}
        <div className="flex flex-col gap-4 lg:flex-row w-full h-full mx-auto flex items-center justify-center text-white lg:gap-12 font-heading text-6xl">
          <div>Good Beer.</div>
          <div>Good Crowd.</div>
          <div>Great Time.</div>
        </div>
      </Banner>
      <section className="background-brick h-[50vh]">
        <div>
          <SectionTitle>Featured Beers</SectionTitle>
          <div>Carousel</div>
        </div>
      </section>
      <section>
        <div className="w-full h-full grid md:grid-cols-2">
          {homeActions.map((act, i) => (
            <ImageLinkCard
              key={`image-link-home-${i}`}
              href={act.href}
              label={act.label}
              image={act.image}
            />
          ))}
        </div>
      </section>
      <section>
        <div className="w-full max-w-[1280px] mx-auto space-y-4">
          <SectionTitle>Follow Us</SectionTitle>
          <div className="mx-auto w-min">
            <SocialLinksBar links={dummySocialLinks} />
          </div>
          <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="w-full aspect-square bg-gray-200">
              instagram photo
            </div>
            <div className="w-full aspect-square bg-gray-200">
              instagram photo
            </div>
            <div className="w-full aspect-square bg-gray-200">
              instagram photo
            </div>
            <div className="w-full aspect-square bg-gray-200">
              instagram photo
            </div>
            <div className="w-full aspect-square bg-gray-200">
              instagram photo
            </div>
            <div className="w-full aspect-square bg-gray-200">
              instagram photo
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div>image</div>
          <div>banner</div>
          <div>map</div>
        </div>
      </section>
      <section>
        <div>
          <SectionTitle>Blog</SectionTitle>
          <div>Blog horizontal scroll</div>
        </div>
      </section>
    </div>
  );
}
