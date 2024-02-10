import { z } from 'zod';
import { UserCreateWithoutProposalCreatorInputObjectSchema } from './UserCreateWithoutProposalCreatorInput.schema';
import { UserUncheckedCreateWithoutProposalCreatorInputObjectSchema } from './UserUncheckedCreateWithoutProposalCreatorInput.schema';
import { UserCreateOrConnectWithoutProposalCreatorInputObjectSchema } from './UserCreateOrConnectWithoutProposalCreatorInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutProposalCreatorInputObjectSchema),
z.lazy(() => UserUncheckedCreateWithoutProposalCreatorInputObjectSchema)]).optional(),connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutProposalCreatorInputObjectSchema).optional(),connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();

 export const UserCreateNestedOneWithoutProposalCreatorInputObjectSchema = Schema
