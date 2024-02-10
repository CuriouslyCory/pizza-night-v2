import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutProposalParticipantInputObjectSchema } from './UserUpdateWithoutProposalParticipantInput.schema';
import { UserUncheckedUpdateWithoutProposalParticipantInputObjectSchema } from './UserUncheckedUpdateWithoutProposalParticipantInput.schema';
import { UserCreateWithoutProposalParticipantInputObjectSchema } from './UserCreateWithoutProposalParticipantInput.schema';
import { UserUncheckedCreateWithoutProposalParticipantInputObjectSchema } from './UserUncheckedCreateWithoutProposalParticipantInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),update: z.union([z.lazy(() => UserUpdateWithoutProposalParticipantInputObjectSchema),
z.lazy(() => UserUncheckedUpdateWithoutProposalParticipantInputObjectSchema)]),create: z.union([z.lazy(() => UserCreateWithoutProposalParticipantInputObjectSchema),
z.lazy(() => UserUncheckedCreateWithoutProposalParticipantInputObjectSchema)])
}).strict();

 export const UserUpsertWithWhereUniqueWithoutProposalParticipantInputObjectSchema = Schema
