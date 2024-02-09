import { z } from "zod";
import { ProposalScalarWhereInputObjectSchema } from "./ProposalScalarWhereInput.schema";
import { ProposalUpdateManyMutationInputObjectSchema } from "./ProposalUpdateManyMutationInput.schema";
import { ProposalUncheckedUpdateManyWithoutProposalParticipantInputObjectSchema } from "./ProposalUncheckedUpdateManyWithoutProposalParticipantInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    where: z.lazy(() => ProposalScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => ProposalUpdateManyMutationInputObjectSchema),
      z.lazy(
        () =>
          ProposalUncheckedUpdateManyWithoutProposalParticipantInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const ProposalUpdateManyWithWhereWithoutParticipantsInputObjectSchema =
  Schema;
