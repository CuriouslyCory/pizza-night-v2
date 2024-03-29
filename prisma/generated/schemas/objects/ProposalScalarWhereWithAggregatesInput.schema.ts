import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  AND: z.union([z.lazy(() => ProposalScalarWhereWithAggregatesInputObjectSchema),
z.lazy(() => ProposalScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),OR: z.lazy(() => ProposalScalarWhereWithAggregatesInputObjectSchema).array().optional(),NOT: z.union([z.lazy(() => ProposalScalarWhereWithAggregatesInputObjectSchema),
z.lazy(() => ProposalScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
z.string()]).optional(),name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
z.string()]).optional(),createdById: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
z.string()]).optional(),createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
z.coerce.date()]).optional(),expiresAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
z.coerce.date()]).optional()
}).strict();

 export const ProposalScalarWhereWithAggregatesInputObjectSchema = Schema
