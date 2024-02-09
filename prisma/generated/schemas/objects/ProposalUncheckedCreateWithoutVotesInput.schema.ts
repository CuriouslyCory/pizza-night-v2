import { z } from "zod";
import { UserUncheckedCreateNestedManyWithoutProposalParticipantInputObjectSchema } from "./UserUncheckedCreateNestedManyWithoutProposalParticipantInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    createdById: z.string(),
    createdAt: z.coerce.date().optional(),
    expiresAt: z.coerce.date(),
    participants: z
      .lazy(
        () =>
          UserUncheckedCreateNestedManyWithoutProposalParticipantInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ProposalUncheckedCreateWithoutVotesInputObjectSchema = Schema;
