import React from "react";
import { Card, CardTitle } from "./card";
import { ImageIcon } from "lucide-react";
import type { BlogPost } from "@/lib/dummyData";

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <Card className="rounded group w-full gap-0 p-0 grid grid-cols-1 grid-rows-1 ring-0 overflow-hidden">
      <div
        className="w-full h-full col-start-1 row-start-1 z-1 grid place-content-center group-hover:scale-105 transition-all duration-500"
        style={{
          backgroundImage: `url("${post.image}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="w-full h-full col-start-1 row-start-1 z-2 grid place-content-center bg-linear-to-t from-black to-black/0"></div>
      <div className="col-start-1 row-start-1 z-3 flex flex-col items-start justify-end p-4">
        <CardTitle className="text-3xl md:text-4xl lg:text-5xl font-medium text-pretty text-background group-hover:text-yellow-500 transition-all group-hover:-translate-y-1.25">
          {post.title}
        </CardTitle>
      </div>
    </Card>
  );
};

export default BlogCard;
