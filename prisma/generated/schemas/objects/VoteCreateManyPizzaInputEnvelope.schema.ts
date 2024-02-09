import { z } from "zod";
import { VoteCreateManyPizzaInputObjectSchema } from "./VoteCreateManyPizzaInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    data: z.union([
      z.lazy(() => VoteCreateManyPizzaInputObjectSchema),
      z.lazy(() => VoteCreateManyPizzaInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const VoteCreateManyPizzaInputEnvelopeObjectSchema = Schema;
