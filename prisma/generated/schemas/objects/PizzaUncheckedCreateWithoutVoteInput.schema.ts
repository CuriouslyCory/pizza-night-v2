import { z } from "zod";
import { ToppingUncheckedCreateNestedManyWithoutPizzaInputObjectSchema } from "./ToppingUncheckedCreateNestedManyWithoutPizzaInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    createdById: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    toppings: z
      .lazy(() => ToppingUncheckedCreateNestedManyWithoutPizzaInputObjectSchema)
      .optional(),
  })
  .strict();

export const PizzaUncheckedCreateWithoutVoteInputObjectSchema = Schema;
