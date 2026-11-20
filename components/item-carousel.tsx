import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

type ItemCarouselProps<T> = {
  items: T[];
  getKey: (item: T) => React.Key;
  renderItem: (item: T) => React.ReactNode;
  itemClassName?: string; // controls the basis per usage
  className?: string;
};

export function ItemCarousel<T>({
  items,
  getKey,
  renderItem,
  itemClassName,
  className,
}: ItemCarouselProps<T>) {
  return (
    <Carousel className={className}>
      <CarouselContent className="-m-0">
        {items.map((item) => (
          <CarouselItem
            key={getKey(item)}
            className={cn(
              "px-1 md:px-2 flex-none snap-center transition-all",
              itemClassName,
            )}
          >
            <div className="w-full h-full flex">{renderItem(item)}</div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0 rounded-none" variant="secondary" />
      <CarouselNext className="right-0 rounded-none" variant="secondary" />
    </Carousel>
  );
}
