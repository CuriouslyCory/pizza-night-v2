import { z } from "zod";
import { PizzaScalarWhereInputObjectSchema } from "./PizzaScalarWhereInput.schema";
import { PizzaUpdateManyMutationInputObjectSchema } from "./PizzaUpdateManyMutationInput.schema";
import { PizzaUncheckedUpdateManyWithoutPizzaInputObjectSchema } from "./PizzaUncheckedUpdateManyWithoutPizzaInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    where: z.lazy(() => PizzaScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => PizzaUpdateManyMutationInputObjectSchema),
      z.lazy(() => PizzaUncheckedUpdateManyWithoutPizzaInputObjectSchema),
    ]),
  })
  .strict();

export const PizzaUpdateManyWithWhereWithoutToppingsInputObjectSchema = Schema;
