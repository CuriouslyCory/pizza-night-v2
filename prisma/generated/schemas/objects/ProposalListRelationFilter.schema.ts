import { z } from 'zod';
import { ProposalWhereInputObjectSchema } from './ProposalWhereInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  every: z.lazy(() => ProposalWhereInputObjectSchema).optional(),some: z.lazy(() => ProposalWhereInputObjectSchema).optional(),none: z.lazy(() => ProposalWhereInputObjectSchema).optional()
}).strict();

 export const ProposalListRelationFilterObjectSchema = Schema
