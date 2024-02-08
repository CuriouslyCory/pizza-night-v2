import { z } from 'zod';
import { ProposalWhereUniqueInputObjectSchema } from './ProposalWhereUniqueInput.schema';
import { ProposalUpdateWithoutCreatorInputObjectSchema } from './ProposalUpdateWithoutCreatorInput.schema';
import { ProposalUncheckedUpdateWithoutCreatorInputObjectSchema } from './ProposalUncheckedUpdateWithoutCreatorInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  where: z.lazy(() => ProposalWhereUniqueInputObjectSchema),data: z.union([z.lazy(() => ProposalUpdateWithoutCreatorInputObjectSchema),
z.lazy(() => ProposalUncheckedUpdateWithoutCreatorInputObjectSchema)])
}).strict();

 export const ProposalUpdateWithWhereUniqueWithoutCreatorInputObjectSchema = Schema
