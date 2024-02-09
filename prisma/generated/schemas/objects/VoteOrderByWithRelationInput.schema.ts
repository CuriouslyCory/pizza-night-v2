import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { UserOrderByWithRelationInputObjectSchema } from "./UserOrderByWithRelationInput.schema";
import { ProposalOrderByWithRelationInputObjectSchema } from "./ProposalOrderByWithRelationInput.schema";
import { PizzaOrderByWithRelationInputObjectSchema } from "./PizzaOrderByWithRelationInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    proposalId: z.lazy(() => SortOrderSchema).optional(),
    pizzaId: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    proposal: z
      .lazy(() => ProposalOrderByWithRelationInputObjectSchema)
      .optional(),
    pizza: z.lazy(() => PizzaOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const VoteOrderByWithRelationInputObjectSchema = Schema;
