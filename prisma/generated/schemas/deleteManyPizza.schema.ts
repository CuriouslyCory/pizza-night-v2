import { z } from "zod";
import { PizzaWhereInputObjectSchema } from "./objects/PizzaWhereInput.schema";

export const PizzaDeleteManySchema = z.object({
  where: PizzaWhereInputObjectSchema.optional(),
});
