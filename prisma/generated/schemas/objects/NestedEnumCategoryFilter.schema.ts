import { z } from "zod";
import { CategorySchema } from "../enums/Category.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    equals: z.lazy(() => CategorySchema).optional(),
    in: z
      .union([
        z.lazy(() => CategorySchema).array(),
        z.lazy(() => CategorySchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => CategorySchema).array(),
        z.lazy(() => CategorySchema),
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => CategorySchema),
        z.lazy(() => NestedEnumCategoryFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const NestedEnumCategoryFilterObjectSchema = Schema;
