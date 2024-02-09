import { z } from "zod";
import { VoteUncheckedCreateNestedManyWithoutPizzaInputObjectSchema } from "./VoteUncheckedCreateNestedManyWithoutPizzaInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    createdById: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    Vote: z
      .lazy(() => VoteUncheckedCreateNestedManyWithoutPizzaInputObjectSchema)
      .optional(),
  })
  .strict();

export const PizzaUncheckedCreateWithoutToppingsInputObjectSchema = Schema;
