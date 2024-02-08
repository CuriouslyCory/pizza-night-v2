import { z } from 'zod';
import { ProposalCreateWithoutCreatorInputObjectSchema } from './ProposalCreateWithoutCreatorInput.schema';
import { ProposalUncheckedCreateWithoutCreatorInputObjectSchema } from './ProposalUncheckedCreateWithoutCreatorInput.schema';
import { ProposalCreateOrConnectWithoutCreatorInputObjectSchema } from './ProposalCreateOrConnectWithoutCreatorInput.schema';
import { ProposalUpsertWithWhereUniqueWithoutCreatorInputObjectSchema } from './ProposalUpsertWithWhereUniqueWithoutCreatorInput.schema';
import { ProposalCreateManyCreatorInputEnvelopeObjectSchema } from './ProposalCreateManyCreatorInputEnvelope.schema';
import { ProposalWhereUniqueInputObjectSchema } from './ProposalWhereUniqueInput.schema';
import { ProposalUpdateWithWhereUniqueWithoutCreatorInputObjectSchema } from './ProposalUpdateWithWhereUniqueWithoutCreatorInput.schema';
import { ProposalUpdateManyWithWhereWithoutCreatorInputObjectSchema } from './ProposalUpdateManyWithWhereWithoutCreatorInput.schema';
import { ProposalScalarWhereInputObjectSchema } from './ProposalScalarWhereInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  create: z.union([z.lazy(() => ProposalCreateWithoutCreatorInputObjectSchema),
z.lazy(() => ProposalCreateWithoutCreatorInputObjectSchema).array(),
z.lazy(() => ProposalUncheckedCreateWithoutCreatorInputObjectSchema),
z.lazy(() => ProposalUncheckedCreateWithoutCreatorInputObjectSchema).array()]).optional(),connectOrCreate: z.union([z.lazy(() => ProposalCreateOrConnectWithoutCreatorInputObjectSchema),
z.lazy(() => ProposalCreateOrConnectWithoutCreatorInputObjectSchema).array()]).optional(),upsert: z.union([z.lazy(() => ProposalUpsertWithWhereUniqueWithoutCreatorInputObjectSchema),
z.lazy(() => ProposalUpsertWithWhereUniqueWithoutCreatorInputObjectSchema).array()]).optional(),createMany: z.lazy(() => ProposalCreateManyCreatorInputEnvelopeObjectSchema).optional(),set: z.union([z.lazy(() => ProposalWhereUniqueInputObjectSchema),
z.lazy(() => ProposalWhereUniqueInputObjectSchema).array()]).optional(),disconnect: z.union([z.lazy(() => ProposalWhereUniqueInputObjectSchema),
z.lazy(() => ProposalWhereUniqueInputObjectSchema).array()]).optional(),delete: z.union([z.lazy(() => ProposalWhereUniqueInputObjectSchema),
z.lazy(() => ProposalWhereUniqueInputObjectSchema).array()]).optional(),connect: z.union([z.lazy(() => ProposalWhereUniqueInputObjectSchema),
z.lazy(() => ProposalWhereUniqueInputObjectSchema).array()]).optional(),update: z.union([z.lazy(() => ProposalUpdateWithWhereUniqueWithoutCreatorInputObjectSchema),
z.lazy(() => ProposalUpdateWithWhereUniqueWithoutCreatorInputObjectSchema).array()]).optional(),updateMany: z.union([z.lazy(() => ProposalUpdateManyWithWhereWithoutCreatorInputObjectSchema),
z.lazy(() => ProposalUpdateManyWithWhereWithoutCreatorInputObjectSchema).array()]).optional(),deleteMany: z.union([z.lazy(() => ProposalScalarWhereInputObjectSchema),
z.lazy(() => ProposalScalarWhereInputObjectSchema).array()]).optional()
}).strict();

 export const ProposalUpdateManyWithoutCreatorNestedInputObjectSchema = Schema
