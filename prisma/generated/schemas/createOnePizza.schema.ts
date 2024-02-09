import { z } from "zod";
import { PizzaCreateInputObjectSchema } from "./objects/PizzaCreateInput.schema";
import { PizzaUncheckedCreateInputObjectSchema } from "./objects/PizzaUncheckedCreateInput.schema";

export const PizzaCreateOneSchema = z.object({
  data: z.union([
    PizzaCreateInputObjectSchema,
    PizzaUncheckedCreateInputObjectSchema,
  ]),
});
