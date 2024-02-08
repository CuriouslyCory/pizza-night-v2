import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AccountOrderByRelationAggregateInputObjectSchema } from './AccountOrderByRelationAggregateInput.schema';
import { SessionOrderByRelationAggregateInputObjectSchema } from './SessionOrderByRelationAggregateInput.schema';
import { PostOrderByRelationAggregateInputObjectSchema } from './PostOrderByRelationAggregateInput.schema';
import { PizzaOrderByRelationAggregateInputObjectSchema } from './PizzaOrderByRelationAggregateInput.schema';
import { ToppingOrderByRelationAggregateInputObjectSchema } from './ToppingOrderByRelationAggregateInput.schema';
import { VoteOrderByRelationAggregateInputObjectSchema } from './VoteOrderByRelationAggregateInput.schema';
import { ProposalOrderByRelationAggregateInputObjectSchema } from './ProposalOrderByRelationAggregateInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),name: z.lazy(() => SortOrderSchema).optional(),email: z.lazy(() => SortOrderSchema).optional(),emailVerified: z.lazy(() => SortOrderSchema).optional(),image: z.lazy(() => SortOrderSchema).optional(),accounts: z.lazy(() => AccountOrderByRelationAggregateInputObjectSchema).optional(),sessions: z.lazy(() => SessionOrderByRelationAggregateInputObjectSchema).optional(),posts: z.lazy(() => PostOrderByRelationAggregateInputObjectSchema).optional(),pizza: z.lazy(() => PizzaOrderByRelationAggregateInputObjectSchema).optional(),topping: z.lazy(() => ToppingOrderByRelationAggregateInputObjectSchema).optional(),vote: z.lazy(() => VoteOrderByRelationAggregateInputObjectSchema).optional(),proposalCreator: z.lazy(() => ProposalOrderByRelationAggregateInputObjectSchema).optional(),proposalParticipant: z.lazy(() => ProposalOrderByRelationAggregateInputObjectSchema).optional()
}).strict();

 export const UserOrderByWithRelationInputObjectSchema = Schema
