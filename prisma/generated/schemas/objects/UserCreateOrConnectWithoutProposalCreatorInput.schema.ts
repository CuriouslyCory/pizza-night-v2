import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutProposalCreatorInputObjectSchema } from './UserCreateWithoutProposalCreatorInput.schema';
import { UserUncheckedCreateWithoutProposalCreatorInputObjectSchema } from './UserUncheckedCreateWithoutProposalCreatorInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),create: z.union([z.lazy(() => UserCreateWithoutProposalCreatorInputObjectSchema),
z.lazy(() => UserUncheckedCreateWithoutProposalCreatorInputObjectSchema)])
}).strict();

 export const UserCreateOrConnectWithoutProposalCreatorInputObjectSchema = Schema
