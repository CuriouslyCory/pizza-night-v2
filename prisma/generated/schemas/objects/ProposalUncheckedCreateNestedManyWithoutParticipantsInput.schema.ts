import { z } from 'zod';
import { ProposalCreateWithoutParticipantsInputObjectSchema } from './ProposalCreateWithoutParticipantsInput.schema';
import { ProposalUncheckedCreateWithoutParticipantsInputObjectSchema } from './ProposalUncheckedCreateWithoutParticipantsInput.schema';
import { ProposalCreateOrConnectWithoutParticipantsInputObjectSchema } from './ProposalCreateOrConnectWithoutParticipantsInput.schema';
import { ProposalWhereUniqueInputObjectSchema } from './ProposalWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  create: z.union([z.lazy(() => ProposalCreateWithoutParticipantsInputObjectSchema),
z.lazy(() => ProposalCreateWithoutParticipantsInputObjectSchema).array(),
z.lazy(() => ProposalUncheckedCreateWithoutParticipantsInputObjectSchema),
z.lazy(() => ProposalUncheckedCreateWithoutParticipantsInputObjectSchema).array()]).optional(),connectOrCreate: z.union([z.lazy(() => ProposalCreateOrConnectWithoutParticipantsInputObjectSchema),
z.lazy(() => ProposalCreateOrConnectWithoutParticipantsInputObjectSchema).array()]).optional(),connect: z.union([z.lazy(() => ProposalWhereUniqueInputObjectSchema),
z.lazy(() => ProposalWhereUniqueInputObjectSchema).array()]).optional()
}).strict();

 export const ProposalUncheckedCreateNestedManyWithoutParticipantsInputObjectSchema = Schema
