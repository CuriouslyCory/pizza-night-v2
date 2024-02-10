"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { api } from "~/utils/api";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useToast } from "../ui/use-toast";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { $Enums } from "@prisma/client";

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  category: z.string().min(1, { message: "Category is required" }),
});

type AddToppingProps = {
  defaultName?: string;
  onSuccess?: () => void;
};

export const AddTopping = ({ defaultName, onSuccess }: AddToppingProps) => {
  const { toast } = useToast();
  const utils = api.useUtils();
  const createTopping = api.topping.create.useMutation({
    onSuccess: async () => {
      console.log("success");
      await utils.topping.invalidate();
      onSuccess?.();
    },
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { name: defaultName ?? "", category: "" },
  });

  function onSubmit(data: z.infer<typeof schema>) {
    createTopping.mutate({
      name: data.name,
      category: data.category,
      approved: false,
    });
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <Input placeholder="topping name" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.values($Enums.Category).map((category) => (
                    <SelectItem key={`key-${category}`} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>Blah blah blah... Get a job!</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={createTopping.isLoading}>
          {createTopping.isLoading ? "Submitting..." : "Submit New Topping"}
        </Button>
      </form>
    </Form>
  );
};

export default AddTopping;
