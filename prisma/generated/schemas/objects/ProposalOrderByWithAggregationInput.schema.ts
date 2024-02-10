import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProposalCountOrderByAggregateInputObjectSchema } from './ProposalCountOrderByAggregateInput.schema';
import { ProposalMaxOrderByAggregateInputObjectSchema } from './ProposalMaxOrderByAggregateInput.schema';
import { ProposalMinOrderByAggregateInputObjectSchema } from './ProposalMinOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),name: z.lazy(() => SortOrderSchema).optional(),createdById: z.lazy(() => SortOrderSchema).optional(),createdAt: z.lazy(() => SortOrderSchema).optional(),expiresAt: z.lazy(() => SortOrderSchema).optional(),_count: z.lazy(() => ProposalCountOrderByAggregateInputObjectSchema).optional(),_max: z.lazy(() => ProposalMaxOrderByAggregateInputObjectSchema).optional(),_min: z.lazy(() => ProposalMinOrderByAggregateInputObjectSchema).optional()
}).strict();

 export const ProposalOrderByWithAggregationInputObjectSchema = Schema
