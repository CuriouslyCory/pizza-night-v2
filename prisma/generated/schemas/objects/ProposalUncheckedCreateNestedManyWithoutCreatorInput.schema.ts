import { z } from 'zod';
import { ProposalCreateWithoutCreatorInputObjectSchema } from './ProposalCreateWithoutCreatorInput.schema';
import { ProposalUncheckedCreateWithoutCreatorInputObjectSchema } from './ProposalUncheckedCreateWithoutCreatorInput.schema';
import { ProposalCreateOrConnectWithoutCreatorInputObjectSchema } from './ProposalCreateOrConnectWithoutCreatorInput.schema';
import { ProposalCreateManyCreatorInputEnvelopeObjectSchema } from './ProposalCreateManyCreatorInputEnvelope.schema';
import { ProposalWhereUniqueInputObjectSchema } from './ProposalWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  create: z.union([z.lazy(() => ProposalCreateWithoutCreatorInputObjectSchema),
z.lazy(() => ProposalCreateWithoutCreatorInputObjectSchema).array(),
z.lazy(() => ProposalUncheckedCreateWithoutCreatorInputObjectSchema),
z.lazy(() => ProposalUncheckedCreateWithoutCreatorInputObjectSchema).array()]).optional(),connectOrCreate: z.union([z.lazy(() => ProposalCreateOrConnectWithoutCreatorInputObjectSchema),
z.lazy(() => ProposalCreateOrConnectWithoutCreatorInputObjectSchema).array()]).optional(),createMany: z.lazy(() => ProposalCreateManyCreatorInputEnvelopeObjectSchema).optional(),connect: z.union([z.lazy(() => ProposalWhereUniqueInputObjectSchema),
z.lazy(() => ProposalWhereUniqueInputObjectSchema).array()]).optional()
}).strict();

 export const ProposalUncheckedCreateNestedManyWithoutCreatorInputObjectSchema = Schema
