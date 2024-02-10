import { z } from 'zod';
import { UserUpdateWithoutProposalCreatorInputObjectSchema } from './UserUpdateWithoutProposalCreatorInput.schema';
import { UserUncheckedUpdateWithoutProposalCreatorInputObjectSchema } from './UserUncheckedUpdateWithoutProposalCreatorInput.schema';
import { UserCreateWithoutProposalCreatorInputObjectSchema } from './UserCreateWithoutProposalCreatorInput.schema';
import { UserUncheckedCreateWithoutProposalCreatorInputObjectSchema } from './UserUncheckedCreateWithoutProposalCreatorInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutProposalCreatorInputObjectSchema),
z.lazy(() => UserUncheckedUpdateWithoutProposalCreatorInputObjectSchema)]),create: z.union([z.lazy(() => UserCreateWithoutProposalCreatorInputObjectSchema),
z.lazy(() => UserUncheckedCreateWithoutProposalCreatorInputObjectSchema)])
}).strict();

 export const UserUpsertWithoutProposalCreatorInputObjectSchema = Schema
