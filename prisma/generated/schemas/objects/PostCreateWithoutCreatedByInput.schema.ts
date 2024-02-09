import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    name: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict();

export const PostCreateWithoutCreatedByInputObjectSchema = Schema;
