"use client";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { api } from "~/utils/api";
import { type Topping } from "@prisma/client";
import { Button } from "../ui/button";

interface ToppingSelectorProps {
  onToppingsChange?: (toppings: Topping[]) => void;
  setIsAddToppingOpen?: (isOpen: boolean) => void;
}

const ToppingSelector: React.FC<ToppingSelectorProps> = ({
  onToppingsChange,
  setIsAddToppingOpen,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedToppings, setSelectedToppings] = useState<Topping[]>([]);
  const [suggestedToppings, setSuggestedToppings] = useState<Topping[]>([]);

  const { data: toppings, isLoading } = api.topping.getAll.useQuery();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!value && toppings && toppings.length > 0) {
      setSuggestedToppings(toppings.slice(0, 10));
      setInputValue(value);
      return;
    }
    setInputValue(value);

    // Filter toppings based on the input value
    const filteredToppings = toppings?.filter((topping) =>
      topping.name.toLowerCase().includes(value.toLowerCase()),
    );

    setSuggestedToppings(filteredToppings ?? []);
  };

  const handleToppingSelect = (selectedTopping: Topping) => {
    if (selectedToppings?.find((topping) => topping.id === selectedTopping.id))
      return;

    // Add the selected topping to the list of toppings
    const updatedToppings = [...selectedToppings, selectedTopping];
    setSelectedToppings(updatedToppings);

    // Notify the parent component about the updated toppings
    onToppingsChange?.(updatedToppings);
  };

  const handleToppingRemove = (removedTopping: Topping) => {
    // Remove the selected topping from the list of toppings
    const updatedToppings = selectedToppings?.filter(
      (topping) => topping.id !== removedTopping.id,
    );
    setSelectedToppings(updatedToppings);

    // Notify the parent component about the updated toppings
    onToppingsChange?.(updatedToppings);
  };

  useEffect(() => {
    if (toppings) {
      setSuggestedToppings(toppings.slice(0, 10));
    }
  }, [toppings]);

  return (
    <div className="flex flex-col gap-y-4">
      <h2>Select toppings</h2>
      <Input
        value={inputValue}
        onChange={handleInputChange}
        placeholder="search"
        disabled={isLoading}
      />

      <ul className="flex flex-wrap gap-2">
        {suggestedToppings.map((topping) => (
          <li
            className="rounded-md border border-opacity-50 p-2"
            key={topping.id}
            onClick={() => handleToppingSelect(topping)}
          >
            {topping.name}
          </li>
        ))}
        {suggestedToppings.length === 0 && (
          <>
            <li>No toppings match your input.</li>
            <li>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  setIsAddToppingOpen?.(true);
                }}
              >
                Add a new topping
              </Button>
            </li>
          </>
        )}
      </ul>
      <h2>Selected Toppings</h2>
      <ul className="flex flex-wrap gap-2">
        {selectedToppings?.map((topping) => (
          <li
            className="rounded-md border border-opacity-50 p-2 hover:bg-red-200"
            key={topping.id}
            onClick={() => handleToppingRemove(topping)}
          >
            {topping.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToppingSelector;
