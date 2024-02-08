"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { api } from "~/trpc/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { CategorySchema } from "prisma/generated/schemas";

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  category: CategorySchema,
});

const AddTopping = () => {
  const createTopping = api.topping.create.useMutation({
    onSuccess: () => {
      console.log("success");
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    createTopping.mutate({
      name: data.name,
      category: data.category,
      approved: false,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" {...register("name")} />
      </div>
      <div>
        <label htmlFor="price">Category</label>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            {CategorySchema.options.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>{errors.name && <span>{errors.root?.message}</span>}</div>
      <button type="submit">Create Topping</button>
    </form>
  );
};

export default AddTopping;
