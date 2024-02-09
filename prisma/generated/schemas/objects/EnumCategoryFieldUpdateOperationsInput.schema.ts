import { z } from "zod";
import { CategorySchema } from "../enums/Category.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    set: z.lazy(() => CategorySchema).optional(),
  })
  .strict();

export const EnumCategoryFieldUpdateOperationsInputObjectSchema = Schema;
