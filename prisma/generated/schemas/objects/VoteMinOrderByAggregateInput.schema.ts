import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    proposalId: z.lazy(() => SortOrderSchema).optional(),
    pizzaId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const VoteMinOrderByAggregateInputObjectSchema = Schema;
