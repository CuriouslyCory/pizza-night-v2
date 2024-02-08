import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),createdBy: z.lazy(() => SortOrderSchema).optional(),createdAt: z.lazy(() => SortOrderSchema).optional(),expiresAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

 export const ProposalMinOrderByAggregateInputObjectSchema = Schema
