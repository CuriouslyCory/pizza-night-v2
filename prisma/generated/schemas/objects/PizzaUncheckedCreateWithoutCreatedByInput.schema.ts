import { z } from "zod";
import { ToppingUncheckedCreateNestedManyWithoutPizzaInputObjectSchema } from "./ToppingUncheckedCreateNestedManyWithoutPizzaInput.schema";
import { VoteUncheckedCreateNestedManyWithoutPizzaInputObjectSchema } from "./VoteUncheckedCreateNestedManyWithoutPizzaInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    toppings: z
      .lazy(() => ToppingUncheckedCreateNestedManyWithoutPizzaInputObjectSchema)
      .optional(),
    Vote: z
      .lazy(() => VoteUncheckedCreateNestedManyWithoutPizzaInputObjectSchema)
      .optional(),
  })
  .strict();

export const PizzaUncheckedCreateWithoutCreatedByInputObjectSchema = Schema;
