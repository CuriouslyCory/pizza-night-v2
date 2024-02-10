import { z } from 'zod';
import { ProposalCreateWithoutCreatedByInputObjectSchema } from './ProposalCreateWithoutCreatedByInput.schema';
import { ProposalUncheckedCreateWithoutCreatedByInputObjectSchema } from './ProposalUncheckedCreateWithoutCreatedByInput.schema';
import { ProposalCreateOrConnectWithoutCreatedByInputObjectSchema } from './ProposalCreateOrConnectWithoutCreatedByInput.schema';
import { ProposalUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from './ProposalUpsertWithWhereUniqueWithoutCreatedByInput.schema';
import { ProposalCreateManyCreatedByInputEnvelopeObjectSchema } from './ProposalCreateManyCreatedByInputEnvelope.schema';
import { ProposalWhereUniqueInputObjectSchema } from './ProposalWhereUniqueInput.schema';
import { ProposalUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from './ProposalUpdateWithWhereUniqueWithoutCreatedByInput.schema';
import { ProposalUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from './ProposalUpdateManyWithWhereWithoutCreatedByInput.schema';
import { ProposalScalarWhereInputObjectSchema } from './ProposalScalarWhereInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  create: z.union([z.lazy(() => ProposalCreateWithoutCreatedByInputObjectSchema),
z.lazy(() => ProposalCreateWithoutCreatedByInputObjectSchema).array(),
z.lazy(() => ProposalUncheckedCreateWithoutCreatedByInputObjectSchema),
z.lazy(() => ProposalUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),connectOrCreate: z.union([z.lazy(() => ProposalCreateOrConnectWithoutCreatedByInputObjectSchema),
z.lazy(() => ProposalCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),upsert: z.union([z.lazy(() => ProposalUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema),
z.lazy(() => ProposalUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),createMany: z.lazy(() => ProposalCreateManyCreatedByInputEnvelopeObjectSchema).optional(),set: z.union([z.lazy(() => ProposalWhereUniqueInputObjectSchema),
z.lazy(() => ProposalWhereUniqueInputObjectSchema).array()]).optional(),disconnect: z.union([z.lazy(() => ProposalWhereUniqueInputObjectSchema),
z.lazy(() => ProposalWhereUniqueInputObjectSchema).array()]).optional(),delete: z.union([z.lazy(() => ProposalWhereUniqueInputObjectSchema),
z.lazy(() => ProposalWhereUniqueInputObjectSchema).array()]).optional(),connect: z.union([z.lazy(() => ProposalWhereUniqueInputObjectSchema),
z.lazy(() => ProposalWhereUniqueInputObjectSchema).array()]).optional(),update: z.union([z.lazy(() => ProposalUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema),
z.lazy(() => ProposalUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),updateMany: z.union([z.lazy(() => ProposalUpdateManyWithWhereWithoutCreatedByInputObjectSchema),
z.lazy(() => ProposalUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array()]).optional(),deleteMany: z.union([z.lazy(() => ProposalScalarWhereInputObjectSchema),
z.lazy(() => ProposalScalarWhereInputObjectSchema).array()]).optional()
}).strict();

 export const ProposalUpdateManyWithoutCreatedByNestedInputObjectSchema = Schema
