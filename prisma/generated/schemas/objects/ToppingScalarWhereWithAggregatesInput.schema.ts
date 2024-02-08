import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumCategoryWithAggregatesFilterObjectSchema } from './EnumCategoryWithAggregatesFilter.schema';
import { CategorySchema } from '../enums/Category.schema';
import { BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  AND: z.union([z.lazy(() => ToppingScalarWhereWithAggregatesInputObjectSchema),
z.lazy(() => ToppingScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),OR: z.lazy(() => ToppingScalarWhereWithAggregatesInputObjectSchema).array().optional(),NOT: z.union([z.lazy(() => ToppingScalarWhereWithAggregatesInputObjectSchema),
z.lazy(() => ToppingScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
z.string()]).optional(),name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
z.string()]).optional(),category: z.union([z.lazy(() => EnumCategoryWithAggregatesFilterObjectSchema),
z.lazy(() => CategorySchema)]).optional(),createdById: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
z.string()]).optional(),approved: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema),
z.boolean()]).optional(),createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
z.coerce.date()]).optional(),updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
z.coerce.date()]).optional()
}).strict();

 export const ToppingScalarWhereWithAggregatesInputObjectSchema = Schema
