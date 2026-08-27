import React from "react";
import { StaggerReveal } from "@/components/ui/stagger-wrapper";
import { dummyBlogPosts } from "@/lib/dummyData";
import BlogCard from "@/components/ui/blog-card";
import { Separator } from "@/components/ui/separator";
import SectionTitle from "@/components/section-title";
import Banner from "@/components/ui/banner";
import EmailOptIn from "@/components/email-subscribe";
import Hop from "@/components/hop";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import DemoDialog from "@/components/demo-dialog";

const categories = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const EventsPage = () => {
  return (
    <div className="background-brick">
      <section className="p-4 py-6 md:p-8 lg:p-16  space-y-8">
        <h1 className="sr-only">The Blog</h1>
        <SectionTitle>The Blog</SectionTitle>
        <Separator className="bg-foreground border border-foreground/50 max-w-[1280px] mx-auto" />
        <div className="max-w-[1280px] mx-auto space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="w-full aspect-4/5 md:aspect-9/7 lg:aspect-13/6 h-full flex rounded overflow-hidden bg-neutral-300 lg:col-span-full">
              <BlogCard post={dummyBlogPosts[0]} />
            </div>
            <div className="w-full h-full aspect-4/3 flex rounded overflow-hidden bg-neutral-300 ">
              <BlogCard post={dummyBlogPosts[1]} />
            </div>
            <Banner>
              <div className="w-full h-full flex flex-col relative justify-end items-center gap-8 ">
                <Hop className="fill-primary mb-2 mx-auto ml-none md:mb-auto md:mx-0 md:self-start" />
                <div className="text-center md:text-left">
                  <h2 className="text-title">Never miss a post</h2>
                  <p className="text-pretty md:text-balance">
                    Subscribe to our newsletter and get special access to all
                    our content and special pricing for cool merch drops.
                  </p>
                </div>
                <div className="md:ml-auto text-center md:text-left">
                  {" "}
                  <EmailOptIn />
                  <p className="text-xs mt-2 text-white/60">
                    By subscribing you consent to receive promotional, marketing
                    emails and updates in accordance with the Privacy Policy.
                  </p>
                </div>
              </div>
            </Banner>
          </div>

          <Separator className="bg-foreground border border-foreground/50 my-8" />
          <Carousel>
            <div className="wfull flex justify-between items-center flex-wrap mb-4">
              <h2 className="font-heading text-2xl">Categories</h2>{" "}
              <div className="space-x-2">
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
                  className="basis-3/7 md:basis-1/7"
                >
                  <Card className="aspect-2/1 rounded ring-0 bg-primary text-white hover:bg-primary/80 transition-all">
                    <CardContent className="font-bold uppercase text-center h-full grid place-content-center">
                      <div>Category {cat}</div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <Separator className="bg-foreground border border-foreground/50 my-8" />

          <Carousel>
            <CarouselContent className="-ml-0 md:-ml-2">
              {dummyBlogPosts.slice(2).map((post) => (
                <CarouselItem
                  key={`blog-card-${post.id}`}
                  className=" flex-none basis-9/10 lg:basis-3/7 snap-center transition-all pl-1 md:pl-4"
                >
                  <div className="decoration-none w-full h-full flex aspect-4/5 md:aspect-9/7">
                    <DemoDialog>
                      <BlogCard post={post} />
                    </DemoDialog>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              className="left-0 rounded-none"
              variant={"secondary"}
              size={"lg"}
            />
            <CarouselNext
              className="right-0 rounded-none"
              variant={"secondary"}
              size={"lg"}
            />
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
