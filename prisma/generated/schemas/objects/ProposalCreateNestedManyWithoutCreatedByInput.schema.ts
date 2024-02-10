import { z } from 'zod';
import { ProposalCreateWithoutCreatedByInputObjectSchema } from './ProposalCreateWithoutCreatedByInput.schema';
import { ProposalUncheckedCreateWithoutCreatedByInputObjectSchema } from './ProposalUncheckedCreateWithoutCreatedByInput.schema';
import { ProposalCreateOrConnectWithoutCreatedByInputObjectSchema } from './ProposalCreateOrConnectWithoutCreatedByInput.schema';
import { ProposalCreateManyCreatedByInputEnvelopeObjectSchema } from './ProposalCreateManyCreatedByInputEnvelope.schema';
import { ProposalWhereUniqueInputObjectSchema } from './ProposalWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  create: z.union([z.lazy(() => ProposalCreateWithoutCreatedByInputObjectSchema),
z.lazy(() => ProposalCreateWithoutCreatedByInputObjectSchema).array(),
z.lazy(() => ProposalUncheckedCreateWithoutCreatedByInputObjectSchema),
z.lazy(() => ProposalUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),connectOrCreate: z.union([z.lazy(() => ProposalCreateOrConnectWithoutCreatedByInputObjectSchema),
z.lazy(() => ProposalCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),createMany: z.lazy(() => ProposalCreateManyCreatedByInputEnvelopeObjectSchema).optional(),connect: z.union([z.lazy(() => ProposalWhereUniqueInputObjectSchema),
z.lazy(() => ProposalWhereUniqueInputObjectSchema).array()]).optional()
}).strict();

 export const ProposalCreateNestedManyWithoutCreatedByInputObjectSchema = Schema
