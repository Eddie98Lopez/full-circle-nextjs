import React from "react";
import SectionTitle from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, ListSortDescending } from "lucide-react";
import { dummyProducts } from "@/lib/dummyData";
import { StaggerReveal } from "@/components/ui/stagger-wrapper";
import ProductCard from "@/components/commerce/product-card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const categories = ["Merch", "Apparel", "Glassware", "Hats"];
const ShopPage = () => {
  return (
    <div className="relative">
      <aside className="bg-primary text-white p-2 sticky top-14 z-5000 flex flex-col md:flex-row justify-center items-center">
        <p>Sign up for our mailing list and get 20% your first order!</p>{" "}
        <Button>Sign Up</Button>
      </aside>
      <section className="p-4 py-6 md:p-8 lg:p-16">
        <div className="max-w-[1600px] mx-auto space-y-8">
          <SectionTitle>Merch Store</SectionTitle>
          <Separator className="bg-foreground border border-foreground/50 my-8" />
          <Carousel>
            <div className="wfull flex justify-between items-center flex-wrap mb-4">
              <h2 className="font-heading text-2xl">Categories</h2>{" "}
              <div className="space-x-2 md:hidden">
                <CarouselPrevious
                  className="relative -left-0 rounded-none"
                  variant={"secondary"}
                  size={"lg"}
                />
                <CarouselNext
                  className="relative -right-0 rounded-none"
                  variant={"secondary"}
                  size={"lg"}
                />
              </div>
            </div>
            <CarouselContent>
              {categories.map((cat) => (
                <CarouselItem
                  key={`category-${cat}`}
                  className="basis-3/7 md:basis-1/4"
                >
                  <Card className="aspect-5/2 rounded ring-0 bg-primary text-white hover:bg-primary/80 transition-all">
                    <CardContent className="font-bold uppercase text-center h-full grid place-content-center">
                      <div>{cat}</div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <Separator className="bg-foreground border border-foreground/50 my-8" />
          <div className="flex items-center gap-4">
            <div>
              <Button variant={"ghost"}>
                <SlidersHorizontal className="size-6" />{" "}
                <span>Show Filters</span>
              </Button>
            </div>
            <p>{dummyProducts.length} Products</p>

            <div className="ml-auto flex items-center gap-2">
              <ListSortDescending />
              <p>SortBy</p> <select></select>
            </div>
          </div>
          <StaggerReveal
            as="ul"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8"
            direction="y"
          >
            {dummyProducts.map((product) => {
              return (
                <li key={`product-card-${product.id}`}>
                  <Link
                    className="w-full h-full"
                    href={`/shop/product/${product.slug}`}
                  >
                    <ProductCard product={product} />
                  </Link>
                </li>
              );
            })}
          </StaggerReveal>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
