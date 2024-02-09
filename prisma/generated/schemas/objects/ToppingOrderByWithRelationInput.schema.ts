import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { UserOrderByWithRelationInputObjectSchema } from "./UserOrderByWithRelationInput.schema";
import { PizzaOrderByRelationAggregateInputObjectSchema } from "./PizzaOrderByRelationAggregateInput.schema";

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
    createdBy: z
      .lazy(() => UserOrderByWithRelationInputObjectSchema)
      .optional(),
    Pizza: z
      .lazy(() => PizzaOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ToppingOrderByWithRelationInputObjectSchema = Schema;
