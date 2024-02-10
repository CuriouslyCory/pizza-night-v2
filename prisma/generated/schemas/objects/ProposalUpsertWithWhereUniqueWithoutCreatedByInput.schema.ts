import { z } from 'zod';
import { ProposalWhereUniqueInputObjectSchema } from './ProposalWhereUniqueInput.schema';
import { ProposalUpdateWithoutCreatedByInputObjectSchema } from './ProposalUpdateWithoutCreatedByInput.schema';
import { ProposalUncheckedUpdateWithoutCreatedByInputObjectSchema } from './ProposalUncheckedUpdateWithoutCreatedByInput.schema';
import { ProposalCreateWithoutCreatedByInputObjectSchema } from './ProposalCreateWithoutCreatedByInput.schema';
import { ProposalUncheckedCreateWithoutCreatedByInputObjectSchema } from './ProposalUncheckedCreateWithoutCreatedByInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  where: z.lazy(() => ProposalWhereUniqueInputObjectSchema),update: z.union([z.lazy(() => ProposalUpdateWithoutCreatedByInputObjectSchema),
z.lazy(() => ProposalUncheckedUpdateWithoutCreatedByInputObjectSchema)]),create: z.union([z.lazy(() => ProposalCreateWithoutCreatedByInputObjectSchema),
z.lazy(() => ProposalUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();

 export const ProposalUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema = Schema
