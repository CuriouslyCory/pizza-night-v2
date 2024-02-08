import { z } from 'zod';
import { ProposalWhereUniqueInputObjectSchema } from './ProposalWhereUniqueInput.schema';
import { ProposalUpdateWithoutCreatorInputObjectSchema } from './ProposalUpdateWithoutCreatorInput.schema';
import { ProposalUncheckedUpdateWithoutCreatorInputObjectSchema } from './ProposalUncheckedUpdateWithoutCreatorInput.schema';
import { ProposalCreateWithoutCreatorInputObjectSchema } from './ProposalCreateWithoutCreatorInput.schema';
import { ProposalUncheckedCreateWithoutCreatorInputObjectSchema } from './ProposalUncheckedCreateWithoutCreatorInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  where: z.lazy(() => ProposalWhereUniqueInputObjectSchema),update: z.union([z.lazy(() => ProposalUpdateWithoutCreatorInputObjectSchema),
z.lazy(() => ProposalUncheckedUpdateWithoutCreatorInputObjectSchema)]),create: z.union([z.lazy(() => ProposalCreateWithoutCreatorInputObjectSchema),
z.lazy(() => ProposalUncheckedCreateWithoutCreatorInputObjectSchema)])
}).strict();

 export const ProposalUpsertWithWhereUniqueWithoutCreatorInputObjectSchema = Schema
