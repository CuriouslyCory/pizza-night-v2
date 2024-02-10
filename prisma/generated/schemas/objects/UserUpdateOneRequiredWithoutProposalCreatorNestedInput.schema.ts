import { z } from 'zod';
import { UserCreateWithoutProposalCreatorInputObjectSchema } from './UserCreateWithoutProposalCreatorInput.schema';
import { UserUncheckedCreateWithoutProposalCreatorInputObjectSchema } from './UserUncheckedCreateWithoutProposalCreatorInput.schema';
import { UserCreateOrConnectWithoutProposalCreatorInputObjectSchema } from './UserCreateOrConnectWithoutProposalCreatorInput.schema';
import { UserUpsertWithoutProposalCreatorInputObjectSchema } from './UserUpsertWithoutProposalCreatorInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutProposalCreatorInputObjectSchema } from './UserUpdateWithoutProposalCreatorInput.schema';
import { UserUncheckedUpdateWithoutProposalCreatorInputObjectSchema } from './UserUncheckedUpdateWithoutProposalCreatorInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutProposalCreatorInputObjectSchema),
z.lazy(() => UserUncheckedCreateWithoutProposalCreatorInputObjectSchema)]).optional(),connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutProposalCreatorInputObjectSchema).optional(),upsert: z.lazy(() => UserUpsertWithoutProposalCreatorInputObjectSchema).optional(),connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),update: z.union([z.lazy(() => UserUpdateWithoutProposalCreatorInputObjectSchema),
z.lazy(() => UserUncheckedUpdateWithoutProposalCreatorInputObjectSchema)]).optional()
}).strict();

 export const UserUpdateOneRequiredWithoutProposalCreatorNestedInputObjectSchema = Schema
