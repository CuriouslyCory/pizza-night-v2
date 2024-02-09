import { z } from "zod";
import { UserCreateNestedOneWithoutVoteInputObjectSchema } from "./UserCreateNestedOneWithoutVoteInput.schema";
import { ProposalCreateNestedOneWithoutVotesInputObjectSchema } from "./ProposalCreateNestedOneWithoutVotesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    id: z.string().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutVoteInputObjectSchema),
    proposal: z.lazy(
      () => ProposalCreateNestedOneWithoutVotesInputObjectSchema,
    ),
  })
  .strict();

export const VoteCreateWithoutPizzaInputObjectSchema = Schema;
