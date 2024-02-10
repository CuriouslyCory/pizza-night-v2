import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutProposalParticipantInputObjectSchema } from './UserUpdateWithoutProposalParticipantInput.schema';
import { UserUncheckedUpdateWithoutProposalParticipantInputObjectSchema } from './UserUncheckedUpdateWithoutProposalParticipantInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),data: z.union([z.lazy(() => UserUpdateWithoutProposalParticipantInputObjectSchema),
z.lazy(() => UserUncheckedUpdateWithoutProposalParticipantInputObjectSchema)])
}).strict();

 export const UserUpdateWithWhereUniqueWithoutProposalParticipantInputObjectSchema = Schema
