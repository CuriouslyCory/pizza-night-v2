import { z } from "zod";
import { CategorySchema } from "../enums/Category.schema";
import { PizzaCreateNestedManyWithoutToppingsInputObjectSchema } from "./PizzaCreateNestedManyWithoutToppingsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    category: z.lazy(() => CategorySchema),
    approved: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    Pizza: z
      .lazy(() => PizzaCreateNestedManyWithoutToppingsInputObjectSchema)
      .optional(),
  })
  .strict();

export const ToppingCreateWithoutCreatedByInputObjectSchema = Schema;
