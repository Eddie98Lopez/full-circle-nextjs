import SectionTitle from "@/components/section-title";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  CarouselItem,
} from "@/components/ui/carousel";
import { dummyProducts, dummyMyBeers } from "@/lib/dummyData";
import ProductCard from "@/components/commerce/product-card";
import React from "react";
import BeerCard, { BeerHero } from "@/components/beer-card";
import Image from "next/image";

const Page = async ({ params }: { params: Promise<{ beer_name: string }> }) => {
  const { beer_name } = await params;
  console.log(beer_name);
  const beer = dummyMyBeers.filter((beer) => beer.slug == beer_name)[0];
  return (
    <div>
      <section className=" background-brick pb-16 grid grid-rows-[10vh_35vh_auto]  w-full min-h-[60vh]">
        <div className="w-full h-full relative row-start-1 row-end-3 col-start-1 col-end-2 ">
          <Image
            fill
            src="/images/product-bg.jpg"
            alt="background"
            className="w-full object-cover opacity-20"
          />
        </div>
        <div className="w-full h-full row-start-2 row-end-4 col-start-1 col-end-2 px-4 md:px-8 ">
          <BeerHero beer={beer} />
        </div>
      </section>

      <section className="background-paper w-full px-8 py-16 space-y-8">
        <SectionTitle>
          <span className="text-white">You Might Like</span>
        </SectionTitle>
        <div className="max-w-[1600px] mx-auto">
          <Carousel>
            <CarouselContent className="-m-0">
              {dummyMyBeers
                .filter((br) => beer.relatedBeers.includes(br.id))
                .map((br) => (
                  <CarouselItem
                    key={`beer-card-${br.id}`}
                    className=" px-1 md:px-2 flex-none basis-9/10 lg:basis-1/3 snap-center transition-all"
                  >
                    <div className="decoration-none w-full h-full flex ">
                      <BeerCard beer={br} />
                    </div>
                  </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious
              className="left-0 rounded-none"
              variant={"secondary"}
            />
            <CarouselNext
              className="right-0 rounded-none"
              variant={"secondary"}
            />
          </Carousel>
        </div>
      </section>
      <section className="px-8 py-16 background-logo space-y-8">
        <SectionTitle>Merch</SectionTitle>
        <div className="max-w-[1600px] mx-auto">
          <Carousel>
            <CarouselContent className="-m-0">
              {dummyProducts.map((product) => (
                <CarouselItem
                  key={`product-card-${product.id}`}
                  className=" px-1 md:px-2 flex-none basis-9/10 lg:basis-1/4 snap-center transition-all"
                >
                  <div className="decoration-none w-full h-full flex ">
                    <ProductCard product={product} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              className="left-0 rounded-none"
              variant={"secondary"}
            />
            <CarouselNext
              className="right-0 rounded-none"
              variant={"secondary"}
            />
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default Page;
