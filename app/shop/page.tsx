import React from "react";
import SectionTitle from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, ListSortDescending } from "lucide-react";
import { dummyProducts } from "@/lib/dummyData";
import { StaggerReveal } from "@/components/ui/stagger-wrapper";
import ProductCard from "@/components/product-card";
const ShopPage = () => {
  return (
    <div className="relative">
      <aside className="bg-primary text-white p-2 sticky top-14 z-5000 flex flex-col md:flex-row justify-center items-center">
        <p>Sign up for our mailing list and get 20% your first order!</p>{" "}
        <Button>Sign Up</Button>
      </aside>
      <section className="py-16 px-8">
        <div className="max-w-[1600px] mx-auto space-y-8">
          <SectionTitle>Merch Store</SectionTitle>
          <div className="border-b-2 border-black/50 p-4 my-8 w-full">
            <ul className="flex gap-8 justify-center ">
              <li>Categroy</li>
              <li>Categroy</li>
              <li>Categroy</li>
              <li>Categroy</li>
              <li>Categroy</li>
            </ul>
          </div>
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
            className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8"
            direction="y"
          >
            {dummyProducts.map((product) => {
              return (
                <li key={`product-card-${product.id}`}>
                  <ProductCard product={product} />
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
