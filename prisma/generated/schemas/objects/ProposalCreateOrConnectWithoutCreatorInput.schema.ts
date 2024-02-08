import { z } from 'zod';
import { ProposalWhereUniqueInputObjectSchema } from './ProposalWhereUniqueInput.schema';
import { ProposalCreateWithoutCreatorInputObjectSchema } from './ProposalCreateWithoutCreatorInput.schema';
import { ProposalUncheckedCreateWithoutCreatorInputObjectSchema } from './ProposalUncheckedCreateWithoutCreatorInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  where: z.lazy(() => ProposalWhereUniqueInputObjectSchema),create: z.union([z.lazy(() => ProposalCreateWithoutCreatorInputObjectSchema),
z.lazy(() => ProposalUncheckedCreateWithoutCreatorInputObjectSchema)])
}).strict();

 export const ProposalCreateOrConnectWithoutCreatorInputObjectSchema = Schema
