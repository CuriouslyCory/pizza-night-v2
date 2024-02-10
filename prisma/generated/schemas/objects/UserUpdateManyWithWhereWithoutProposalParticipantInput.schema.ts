import { z } from 'zod';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';
import { UserUpdateManyMutationInputObjectSchema } from './UserUpdateManyMutationInput.schema';
import { UserUncheckedUpdateManyWithoutParticipantsInputObjectSchema } from './UserUncheckedUpdateManyWithoutParticipantsInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  where: z.lazy(() => UserScalarWhereInputObjectSchema),data: z.union([z.lazy(() => UserUpdateManyMutationInputObjectSchema),
z.lazy(() => UserUncheckedUpdateManyWithoutParticipantsInputObjectSchema)])
}).strict();

 export const UserUpdateManyWithWhereWithoutProposalParticipantInputObjectSchema = Schema
