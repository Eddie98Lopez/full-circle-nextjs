import React from "react";
import { Button } from "../ui/button";
import { PlusIcon, MinusIcon } from "lucide-react";

function QuantityCounter({
  value,
  onIncrease,
  onDecrease,
  min = null,
}: {
  value: number;
  min?: number | null;
  onIncrease: () => void;
  onDecrease: () => void;
}) {
  const handleDecrease = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onDecrease();
  };
  const handleIncrease = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onIncrease();
  };

  const isDecreaseDisabled = () => {
    if (min !== null && typeof min == "number") {
      return value <= min;
    }
    return false;
  };
  return (
    <div className="flex w-fit items-center rounded-md">
      <Button
        type="button"
        variant="secondary"
        size="icon"
        className="aspect-square rounded"
        onClick={handleDecrease}
        disabled={isDecreaseDisabled()}
        aria-label="Decrease quantity"
      >
        <MinusIcon className="h-4 w-4" />
      </Button>
      <span className="w-10 text-center text-sm tabular-nums">{value}</span>
      <Button
        type="button"
        variant="default"
        size="icon"
        className="aspect-square rounded"
        onClick={handleIncrease}
        aria-label="Increase quantity"
      >
        <PlusIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}

export default QuantityCounter;
