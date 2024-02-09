import { z } from "zod";
import { ProposalWhereUniqueInputObjectSchema } from "./ProposalWhereUniqueInput.schema";
import { ProposalUpdateWithoutParticipantsInputObjectSchema } from "./ProposalUpdateWithoutParticipantsInput.schema";
import { ProposalUncheckedUpdateWithoutParticipantsInputObjectSchema } from "./ProposalUncheckedUpdateWithoutParticipantsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    where: z.lazy(() => ProposalWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ProposalUpdateWithoutParticipantsInputObjectSchema),
      z.lazy(() => ProposalUncheckedUpdateWithoutParticipantsInputObjectSchema),
    ]),
  })
  .strict();

export const ProposalUpdateWithWhereUniqueWithoutParticipantsInputObjectSchema =
  Schema;
