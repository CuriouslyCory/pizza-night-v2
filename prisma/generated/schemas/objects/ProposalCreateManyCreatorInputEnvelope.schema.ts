import { z } from 'zod';
import { ProposalCreateManyCreatorInputObjectSchema } from './ProposalCreateManyCreatorInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  data: z.union([z.lazy(() => ProposalCreateManyCreatorInputObjectSchema),
z.lazy(() => ProposalCreateManyCreatorInputObjectSchema).array()]),skipDuplicates: z.boolean().optional()
}).strict();

 export const ProposalCreateManyCreatorInputEnvelopeObjectSchema = Schema
