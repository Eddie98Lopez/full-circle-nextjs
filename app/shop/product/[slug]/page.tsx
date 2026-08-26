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
      <div>breadcrumbs</div>
      <section>
        <div className="max-w-[1600px] mx-auto  p-4 py-6 md:p-8 lg:p-16">
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
