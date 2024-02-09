import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { ToppingCountOrderByAggregateInputObjectSchema } from "./ToppingCountOrderByAggregateInput.schema";
import { ToppingMaxOrderByAggregateInputObjectSchema } from "./ToppingMaxOrderByAggregateInput.schema";
import { ToppingMinOrderByAggregateInputObjectSchema } from "./ToppingMinOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    category: z.lazy(() => SortOrderSchema).optional(),
    createdById: z.lazy(() => SortOrderSchema).optional(),
    approved: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ToppingCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => ToppingMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ToppingMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ToppingOrderByWithAggregationInputObjectSchema = Schema;
