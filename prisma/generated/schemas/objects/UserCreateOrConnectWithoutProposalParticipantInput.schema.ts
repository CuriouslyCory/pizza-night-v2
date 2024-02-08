import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutProposalParticipantInputObjectSchema } from './UserCreateWithoutProposalParticipantInput.schema';
import { UserUncheckedCreateWithoutProposalParticipantInputObjectSchema } from './UserUncheckedCreateWithoutProposalParticipantInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),create: z.union([z.lazy(() => UserCreateWithoutProposalParticipantInputObjectSchema),
z.lazy(() => UserUncheckedCreateWithoutProposalParticipantInputObjectSchema)])
}).strict();

 export const UserCreateOrConnectWithoutProposalParticipantInputObjectSchema = Schema
