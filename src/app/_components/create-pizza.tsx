"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { api } from "~/trpc/react";

const NewPizzaSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  toppings: z
    .array(z.string())
    .min(1, { message: "At least one topping is required" }),
});

export function CreatePizza() {
  const router = useRouter();
  const [name, setName] = useState("");

  const createPizza = api.pizza.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setName("");
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(NewPizzaSchema),
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        createPizza.mutate({ name: data.name, toppings: data.toppings });
      })}
      className="flex flex-col gap-2"
    >
      <input
        type="text"
        placeholder="Title"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <button
        type="submit"
        className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
        disabled={createPizza.isLoading}
      >
        {createPizza.isLoading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
