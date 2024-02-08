import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { VoteOrderByRelationAggregateInputObjectSchema } from './VoteOrderByRelationAggregateInput.schema';
import { UserOrderByRelationAggregateInputObjectSchema } from './UserOrderByRelationAggregateInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),createdBy: z.lazy(() => SortOrderSchema).optional(),createdAt: z.lazy(() => SortOrderSchema).optional(),expiresAt: z.lazy(() => SortOrderSchema).optional(),creator: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),votes: z.lazy(() => VoteOrderByRelationAggregateInputObjectSchema).optional(),participants: z.lazy(() => UserOrderByRelationAggregateInputObjectSchema).optional()
}).strict();

 export const ProposalOrderByWithRelationInputObjectSchema = Schema
