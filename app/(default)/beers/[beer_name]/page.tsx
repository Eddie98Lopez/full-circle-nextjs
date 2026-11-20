import SectionTitle from "@/components/section-title";
import { ItemCarousel } from "@/components/item-carousel";
import { dummyProducts, dummyMyBeers } from "@/lib/dummyData";
import ProductCard from "@/components/commerce/product-card";
import BeerCard, { BeerHero } from "@/components/beer-card";
import Image from "next/image";
import { BeerClubBanner } from "@/components/beer-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Page = async ({ params }: { params: Promise<{ beer_name: string }> }) => {
  const { beer_name } = await params;
  const beer = dummyMyBeers.filter((beer) => beer.slug == beer_name)[0];
  return (
    <div>
      <section className=" background-brick pb-16 grid grid-rows-[150px_40vh_auto] md:grid-rows-[100px_50vh_auto]  w-full min-h-[60vh] overflow-hidden">
        <div className="w-full h-full relative row-start-1 row-end-3 col-start-1 col-end-2 ">
          <Image
            fill
            src={beer.artwork}
            alt="background"
            className="w-full object-cover mix-blend-multiply"
          />
        </div>
        <div className="w-full h-full row-start-2 row-end-4 col-start-1 col-end-2 px-4 md:px-8 ">
          <BeerHero beer={beer} />
        </div>
      </section>

      <section className="background-brick w-full space-y-8 p-4 py-6 md:p-8 lg:p-16">
        <SectionTitle>
          <span>You Might Like</span>
        </SectionTitle>
        <div className="max-w-[1600px] mx-auto">
          <ItemCarousel
            items={dummyMyBeers.filter((br) =>
              beer.relatedBeers.includes(br.id),
            )}
            getKey={(br) => `beer-card-${br.id}`}
            itemClassName="basis-full lg:basis-1/3"
            renderItem={(br) => (
              <Link href={`/beers/${br.slug}`} className="w-full h-full">
                <BeerCard beer={br} />
              </Link>
            )}
          />
        </div>
      </section>
      <BeerClubBanner />
      <section className="p-4 py-6 md:p-8 lg:p-16 background-logo space-y-8">
        <SectionTitle>Merch</SectionTitle>
        <div className="max-w-[1600px] mx-auto">
          <ItemCarousel
            items={dummyProducts}
            getKey={(p) => `product-card-${p.id}`}
            itemClassName="basis-9/10 lg:basis-1/4"
            renderItem={(p) => <ProductCard product={p} />}
          />
        </div>
        <div className="mx-auto text-center mt-16">
          <Link href="/shop">
            <Button
              variant={"link"}
              className="uppercase font-bold text-foreground group"
            >
              Shop all Merch
              <ArrowRight className="fill-black opacity-0 group-hover:translate-x-1 group-hover:opacity-100 transition-all" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Page;
