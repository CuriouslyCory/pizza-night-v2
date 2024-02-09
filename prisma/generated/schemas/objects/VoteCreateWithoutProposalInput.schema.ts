import { z } from "zod";
import { UserCreateNestedOneWithoutVoteInputObjectSchema } from "./UserCreateNestedOneWithoutVoteInput.schema";
import { PizzaCreateNestedOneWithoutVoteInputObjectSchema } from "./PizzaCreateNestedOneWithoutVoteInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    id: z.string().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutVoteInputObjectSchema),
    pizza: z
      .lazy(() => PizzaCreateNestedOneWithoutVoteInputObjectSchema)
      .optional(),
  })
  .strict();

export const VoteCreateWithoutProposalInputObjectSchema = Schema;
