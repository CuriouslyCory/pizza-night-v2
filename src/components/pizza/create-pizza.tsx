"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import AddTopping from "../toppings/add-topping";
import { PizzaCreateInputObjectSchema } from "prisma/generated/schemas";
import { api } from "~/utils/api";

const NewPizzaSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  toppings: z
    .array(PizzaCreateInputObjectSchema)
    .min(1, { message: "At least one topping is required" }),
});

export function CreatePizza() {
  const createPizza = api.pizza.create.useMutation({
    onSuccess: () => {
      console.log("success submitted pizza");
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof NewPizzaSchema>>({
    resolver: zodResolver(NewPizzaSchema),
  });

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          createPizza.mutate({ name: data.name, toppings: data.toppings });
        })}
        className="flex flex-col gap-2"
      >
        <button
          type="submit"
          className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
          disabled={createPizza.isLoading}
        >
          {createPizza.isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
      <AddTopping />
    </>
  );
}
