"use client";
import { type UseFormReturn } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Switch } from "../ui/switch";
import { type Topping } from "@prisma/client";
import { useState } from "react";

type ToppingSwitchProps = {
  form: UseFormReturn<
    { name: string; toppings: string[] },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any,
    { name: string; toppings: string[] }
  >;
  name: `toppings.${number}`;
  topping: Topping;
};

export const ToppingSwitch = ({ form, name, topping }: ToppingSwitchProps) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
          <div className="space-y-0.5">
            <FormLabel className="text-base">{topping.name}</FormLabel>
          </div>
          <FormControl>
            <Switch
              checked={isChecked}
              onCheckedChange={(value) => {
                setIsChecked(value);
                field.onChange(topping);
                if (value) {
                  form.setValue(name, topping.id);
                }
              }}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default ToppingSwitch;
