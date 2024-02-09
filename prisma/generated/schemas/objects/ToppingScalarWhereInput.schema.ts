import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { EnumCategoryFilterObjectSchema } from "./EnumCategoryFilter.schema";
import { CategorySchema } from "../enums/Category.schema";
import { BoolFilterObjectSchema } from "./BoolFilter.schema";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    AND: z
      .union([
        z.lazy(() => ToppingScalarWhereInputObjectSchema),
        z.lazy(() => ToppingScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ToppingScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ToppingScalarWhereInputObjectSchema),
        z.lazy(() => ToppingScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    category: z
      .union([
        z.lazy(() => EnumCategoryFilterObjectSchema),
        z.lazy(() => CategorySchema),
      ])
      .optional(),
    createdById: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    approved: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
  })
  .strict();

export const ToppingScalarWhereInputObjectSchema = Schema;
