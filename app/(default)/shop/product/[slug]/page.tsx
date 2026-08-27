import React from "react";
import { dummyProducts } from "@/lib/dummyData";
import { ProductHeroDetails } from "@/components/commerce/product-hero";
import Image from "next/image";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product = dummyProducts.filter((prod) => prod.slug === slug)[0];
  console.log(product);
  return (
    <div>
      <div className="max-w-[1600px] mx-auto">breadcrumbs</div>
      <section className="p-4 py-6 md:p-8 lg:p-16">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.5fr] lg:grid-cols-2 gap-4 md:gap-8">
          <div className="aspect-square w-full h-full bg-neutral-300 relative overflow-hidden">
            <Image
              src={product.image}
              alt={product.imageAltText}
              objectFit="contain"
              fill
              className="aspect-4/5 "
            />
          </div>
          <ProductHeroDetails product={product} />
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
