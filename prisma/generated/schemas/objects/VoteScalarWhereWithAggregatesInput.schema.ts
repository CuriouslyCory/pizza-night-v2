import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  AND: z.union([z.lazy(() => VoteScalarWhereWithAggregatesInputObjectSchema),
z.lazy(() => VoteScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),OR: z.lazy(() => VoteScalarWhereWithAggregatesInputObjectSchema).array().optional(),NOT: z.union([z.lazy(() => VoteScalarWhereWithAggregatesInputObjectSchema),
z.lazy(() => VoteScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
z.string()]).optional(),userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
z.string()]).optional(),proposalId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
z.string()]).optional(),pizzaId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
z.string()]).optional().nullable()
}).strict();

 export const VoteScalarWhereWithAggregatesInputObjectSchema = Schema
