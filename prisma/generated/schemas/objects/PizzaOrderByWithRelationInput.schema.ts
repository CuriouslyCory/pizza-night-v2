import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { ToppingOrderByRelationAggregateInputObjectSchema } from "./ToppingOrderByRelationAggregateInput.schema";
import { UserOrderByWithRelationInputObjectSchema } from "./UserOrderByWithRelationInput.schema";
import { VoteOrderByRelationAggregateInputObjectSchema } from "./VoteOrderByRelationAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    createdById: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    toppings: z
      .lazy(() => ToppingOrderByRelationAggregateInputObjectSchema)
      .optional(),
    createdBy: z
      .lazy(() => UserOrderByWithRelationInputObjectSchema)
      .optional(),
    Vote: z
      .lazy(() => VoteOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const PizzaOrderByWithRelationInputObjectSchema = Schema;
