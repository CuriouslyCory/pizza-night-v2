import { z } from 'zod';
import { ProposalWhereUniqueInputObjectSchema } from './ProposalWhereUniqueInput.schema';
import { ProposalUpdateWithoutParticipantsInputObjectSchema } from './ProposalUpdateWithoutParticipantsInput.schema';
import { ProposalUncheckedUpdateWithoutParticipantsInputObjectSchema } from './ProposalUncheckedUpdateWithoutParticipantsInput.schema';
import { ProposalCreateWithoutParticipantsInputObjectSchema } from './ProposalCreateWithoutParticipantsInput.schema';
import { ProposalUncheckedCreateWithoutParticipantsInputObjectSchema } from './ProposalUncheckedCreateWithoutParticipantsInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  where: z.lazy(() => ProposalWhereUniqueInputObjectSchema),update: z.union([z.lazy(() => ProposalUpdateWithoutParticipantsInputObjectSchema),
z.lazy(() => ProposalUncheckedUpdateWithoutParticipantsInputObjectSchema)]),create: z.union([z.lazy(() => ProposalCreateWithoutParticipantsInputObjectSchema),
z.lazy(() => ProposalUncheckedCreateWithoutParticipantsInputObjectSchema)])
}).strict();

 export const ProposalUpsertWithWhereUniqueWithoutParticipantsInputObjectSchema = Schema
