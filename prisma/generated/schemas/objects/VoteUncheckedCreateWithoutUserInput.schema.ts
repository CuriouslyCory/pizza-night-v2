import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    id: z.string().optional(),
    proposalId: z.string(),
    pizzaId: z.string().optional().nullable(),
  })
  .strict();

export const VoteUncheckedCreateWithoutUserInputObjectSchema = Schema;
