import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HighlightCarousel({ items }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState("right");
  const [animating, setAnimating] = useState(false);

  const handleNavigation = (dir) => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) =>
        dir === "left"
          ? prev === 0
            ? items.length - 1
            : prev - 1
          : prev === items.length - 1
          ? 0
          : prev + 1
      );
      setAnimating(false);
    }, 120); // duração da animação
  };

  return (
    <section className="relative w-full overflow-hidden h-[400px]">
      <div
        key={current}
        className={cn(
          "absolute inset-0 transition-transform duration-300 ease-in-out",
          direction === "right" && animating && "-translate-x-full",
          direction === "left" && animating && "translate-x-full"
        )}
      >
        <img
          src={items[current].imageUrl}
          alt={items[current].title}
          className="w-full h-[400px] object-cover"
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-between px-4 z-10">
        <Button onClick={() => handleNavigation("left")} variant="ghost" className="bg-white/70 hover:bg-white">
          <ChevronLeft size={32} />
        </Button>
        <Button onClick={() => handleNavigation("right")} variant="ghost" className="bg-white/70 hover:bg-white">
          <ChevronRight size={32} />
        </Button>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {items.map((_, index) => (
          <span
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-colors",
              index === current ? "bg-blue-600" : "bg-gray-300"
            )}
          />
        ))}
      </div>
    </section>
  );
}
