import { z } from "zod";
import { ProposalWhereUniqueInputObjectSchema } from "./ProposalWhereUniqueInput.schema";
import { ProposalCreateWithoutParticipantsInputObjectSchema } from "./ProposalCreateWithoutParticipantsInput.schema";
import { ProposalUncheckedCreateWithoutParticipantsInputObjectSchema } from "./ProposalUncheckedCreateWithoutParticipantsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    where: z.lazy(() => ProposalWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProposalCreateWithoutParticipantsInputObjectSchema),
      z.lazy(() => ProposalUncheckedCreateWithoutParticipantsInputObjectSchema),
    ]),
  })
  .strict();

export const ProposalCreateOrConnectWithoutParticipantsInputObjectSchema =
  Schema;
