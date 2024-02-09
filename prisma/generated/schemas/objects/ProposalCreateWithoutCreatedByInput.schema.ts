import { z } from "zod";
import { VoteCreateNestedManyWithoutProposalInputObjectSchema } from "./VoteCreateNestedManyWithoutProposalInput.schema";
import { UserCreateNestedManyWithoutProposalParticipantInputObjectSchema } from "./UserCreateNestedManyWithoutProposalParticipantInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    createdAt: z.coerce.date().optional(),
    expiresAt: z.coerce.date(),
    votes: z
      .lazy(() => VoteCreateNestedManyWithoutProposalInputObjectSchema)
      .optional(),
    participants: z
      .lazy(
        () => UserCreateNestedManyWithoutProposalParticipantInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ProposalCreateWithoutCreatedByInputObjectSchema = Schema;
