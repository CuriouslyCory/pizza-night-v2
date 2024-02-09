import { z } from "zod";
import { ProposalCreateNestedOneWithoutVotesInputObjectSchema } from "./ProposalCreateNestedOneWithoutVotesInput.schema";
import { PizzaCreateNestedOneWithoutVoteInputObjectSchema } from "./PizzaCreateNestedOneWithoutVoteInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    id: z.string().optional(),
    proposal: z.lazy(
      () => ProposalCreateNestedOneWithoutVotesInputObjectSchema,
    ),
    pizza: z
      .lazy(() => PizzaCreateNestedOneWithoutVoteInputObjectSchema)
      .optional(),
  })
  .strict();

export const VoteCreateWithoutUserInputObjectSchema = Schema;
