import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    id: z.string().optional(),
    userId: z.string(),
    proposalId: z.string(),
  })
  .strict();

export const VoteCreateManyPizzaInputObjectSchema = Schema;
