import { z } from "zod";
import { AccountCreateNestedManyWithoutUserInputObjectSchema } from "./AccountCreateNestedManyWithoutUserInput.schema";
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from "./SessionCreateNestedManyWithoutUserInput.schema";
import { PostCreateNestedManyWithoutCreatedByInputObjectSchema } from "./PostCreateNestedManyWithoutCreatedByInput.schema";
import { PizzaCreateNestedManyWithoutCreatedByInputObjectSchema } from "./PizzaCreateNestedManyWithoutCreatedByInput.schema";
import { VoteCreateNestedManyWithoutUserInputObjectSchema } from "./VoteCreateNestedManyWithoutUserInput.schema";
import { ProposalCreateNestedManyWithoutCreatedByInputObjectSchema } from "./ProposalCreateNestedManyWithoutCreatedByInput.schema";
import { ProposalCreateNestedManyWithoutParticipantsInputObjectSchema } from "./ProposalCreateNestedManyWithoutParticipantsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    emailVerified: z.coerce.date().optional().nullable(),
    image: z.string().optional().nullable(),
    accounts: z
      .lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    posts: z
      .lazy(() => PostCreateNestedManyWithoutCreatedByInputObjectSchema)
      .optional(),
    pizza: z
      .lazy(() => PizzaCreateNestedManyWithoutCreatedByInputObjectSchema)
      .optional(),
    vote: z
      .lazy(() => VoteCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    proposalCreator: z
      .lazy(() => ProposalCreateNestedManyWithoutCreatedByInputObjectSchema)
      .optional(),
    proposalParticipant: z
      .lazy(() => ProposalCreateNestedManyWithoutParticipantsInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserCreateWithoutToppingInputObjectSchema = Schema;
