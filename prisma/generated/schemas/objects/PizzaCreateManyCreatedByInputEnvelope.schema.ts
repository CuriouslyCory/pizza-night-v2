import { z } from "zod";
import { PizzaCreateManyCreatedByInputObjectSchema } from "./PizzaCreateManyCreatedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    data: z.union([
      z.lazy(() => PizzaCreateManyCreatedByInputObjectSchema),
      z.lazy(() => PizzaCreateManyCreatedByInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const PizzaCreateManyCreatedByInputEnvelopeObjectSchema = Schema;
