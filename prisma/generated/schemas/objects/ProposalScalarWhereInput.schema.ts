import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  AND: z.union([z.lazy(() => ProposalScalarWhereInputObjectSchema),
z.lazy(() => ProposalScalarWhereInputObjectSchema).array()]).optional(),OR: z.lazy(() => ProposalScalarWhereInputObjectSchema).array().optional(),NOT: z.union([z.lazy(() => ProposalScalarWhereInputObjectSchema),
z.lazy(() => ProposalScalarWhereInputObjectSchema).array()]).optional(),id: z.union([z.lazy(() => StringFilterObjectSchema),
z.string()]).optional(),createdBy: z.union([z.lazy(() => StringFilterObjectSchema),
z.string()]).optional(),createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
z.coerce.date()]).optional(),expiresAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
z.coerce.date()]).optional()
}).strict();

 export const ProposalScalarWhereInputObjectSchema = Schema
