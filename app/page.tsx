import ImageLinkCard from "@/components/image-link-card";
import SectionTitle from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { homeActions } from "@/lib/actions";
import Banner from "@/components/ui/banner";
import SocialLinksBar from "@/components/social-bar";
import { dummySocialLinks } from "@/lib/menus";
import Link from "next/link";
import { dummyBlogPosts, dummyMyBeers } from "@/lib/dummyData";
import { StaggerReveal } from "@/components/ui/stagger-wrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import FeaturedBeerCard from "@/components/featured-beer";
import { ImageIcon } from "lucide-react";
import BlogCard from "@/components/ui/blog-card";

export default function Home() {
  return (
    <div className="">
      <section id="hero" className="grid grid-cols-1 lg:grid-rows-[65vh]">
        <div className="w-full h-full bg-foreground col-start-1 row-start-1 aspect-4/5 z-1 lg:aspect-16/9 overflow-hidden flex justify-center items-center">
          <video
            autoPlay
            loop
            muted
            /* ADDED object-cover, REMOVED stray "fill" class */
            className="w-full h-full object-cover object-center opacity-20"
          >
            <source src="/breweryHero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content layer, on top */}
        <StaggerReveal
          preset="default"
          direction="y"
          delay={0.2}
          className="col-start-1 row-start-1 z-5 flex flex-col gap-4 items-center justify-center text-center max-w-4xl md:mx-auto text-background p-8"
        >
          <h1 className="text-display-small">
            Feels Like <br /> Your Taproom
          </h1>
          <p className="text-body text-lg">
            You put real care into your brewery. It makes sense to want that
            same level of craftsmanship to carry through to your website. This
            is a demo site, just a concept, but if you see ideas here that could
            translate to your brand, book a call and we will see whether a
            custom version tailored to your brewery makes sense for your
            business.
          </p>
          <Link
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3Mavz2MffYH9bwfpA4fcYKQlxHUh2JuV636QELOg7nOlRCjM9W7_RUW76BAFJTc3Y1Non5XxRb"
            target="_blank"
          >
            <Button variant={"outline"} size={"lg"}>
              Book A Call
            </Button>
          </Link>
        </StaggerReveal>
      </section>
      <Banner>
        <StaggerReveal
          preset="slower"
          direction="y"
          delay={0.8}
          className="flex flex-col gap-4 lg:flex-row w-full h-full mx-auto flex items-center justify-center text-white lg:gap-12  text-headline"
        >
          <div>Good Beer.</div>
          <div>Good Crowd.</div>
          <div>Great Website.</div>
        </StaggerReveal>
      </Banner>
      <section className="background-brick min-h-[50vh] p-8">
        <div>
          <SectionTitle>Featured Beers</SectionTitle>
          <div className=" max-w-4xl mx-auto p-4">
            <Carousel>
              <CarouselContent>
                {dummyMyBeers
                  .filter((beer) => beer.isFeaturedBeer == true)
                  .map((beer) => (
                    <CarouselItem key={`featured-beer-${beer.id}`}>
                      <FeaturedBeerCard beer={beer} />
                    </CarouselItem>
                  ))}
              </CarouselContent>
              <CarouselNext />
              <CarouselPrevious />
            </Carousel>
          </div>
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
      <section className="py-12 px-8">
        <div className="w-full max-w-[1280px] mx-auto space-y-4">
          <SectionTitle>Follow Us</SectionTitle>
          <div className="mx-auto w-min">
            <SocialLinksBar links={dummySocialLinks} />
          </div>
          <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
          <div className="relative h-[400px] w-full bg-[url(/images/47334.jpg)] bg-cover md:bg-fixed"></div>
          <Banner>
            <div className="h-80">Stuff goes here</div>
          </Banner>
          <div className="bg-gray-300 h-80">map</div>
        </div>
      </section>
      <section className="py-12 px-8 background-logo">
        <div className="space-y-8">
          <SectionTitle>Blog</SectionTitle>
          <StaggerReveal
            direction="y"
            as="ul"
            className="flex flex-nowrap gap-2 lg:gap-4 snap-x overflow-x-scroll overflow-y-visible w-full h-full"
            itemWrapperClass="flex-none basis-9/10 lg:basis-3/7 snap-center transition-all"
          >
            {dummyBlogPosts.map((post) => (
              <li key={`blog-card-${post.id}`} className="decoration-none">
                <BlogCard post={post} />
              </li>
            ))}
          </StaggerReveal>
        </div>
      </section>
    </div>
  );
}
