import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    id: z.literal(true).optional(),
  })
  .strict();

export const PostAvgAggregateInputObjectSchema = Schema;
