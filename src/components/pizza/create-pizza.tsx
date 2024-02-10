"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { type Topping } from "@prisma/client";
import { api } from "~/utils/api";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { useToast } from "../ui/use-toast";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import ToppingSelector from "../toppings/topping-selector";
import AddTopping from "../toppings/add-topping";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";

// form validation schema
const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  toppings: z.array(z.string()),
});

// Create new pizza form
export const CreatePizza = () => {
  const { toast } = useToast();
  const [isAddToppingOpen, setIsAddToppingOpen] = React.useState(false);

  const createPizza = api.pizza.create.useMutation();

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", toppings: [] },
  });

  function onSubmit(data: z.infer<typeof schema>) {
    createPizza.mutate({
      name: data.name,
      toppings: data.toppings,
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

  function onToppingsChange(toppings: Topping[]) {
    form.setValue(
      "toppings",
      toppings.map((topping) => topping.id),
    );
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name Your Pizza!</FormLabel>
                <Input placeholder="pizza name" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
          <ToppingSelector
            onToppingsChange={onToppingsChange}
            setIsAddToppingOpen={setIsAddToppingOpen}
          />

          <Button type="submit" disabled={createPizza.isLoading}>
            {createPizza.isLoading ? "Submitting..." : "Create Pizza"}
          </Button>
        </form>
      </Form>
      <Button onClick={() => console.log(form.getValues())}>Get values</Button>
      <Dialog open={isAddToppingOpen}>
        <DialogContent>
          <DialogHeader>Add Topping</DialogHeader>
          <AddTopping onSuccess={() => setIsAddToppingOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreatePizza;
