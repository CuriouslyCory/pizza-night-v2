import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ToppingListRelationFilterObjectSchema } from './ToppingListRelationFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { VoteListRelationFilterObjectSchema } from './VoteListRelationFilter.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  AND: z.union([z.lazy(() => PizzaWhereInputObjectSchema),
z.lazy(() => PizzaWhereInputObjectSchema).array()]).optional(),OR: z.lazy(() => PizzaWhereInputObjectSchema).array().optional(),NOT: z.union([z.lazy(() => PizzaWhereInputObjectSchema),
z.lazy(() => PizzaWhereInputObjectSchema).array()]).optional(),id: z.union([z.lazy(() => StringFilterObjectSchema),
z.string()]).optional(),name: z.union([z.lazy(() => StringFilterObjectSchema),
z.string()]).optional(),createdById: z.union([z.lazy(() => StringFilterObjectSchema),
z.string()]).optional(),createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
z.coerce.date()]).optional(),updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
z.coerce.date()]).optional(),toppings: z.lazy(() => ToppingListRelationFilterObjectSchema).optional(),createdBy: z.union([z.lazy(() => UserRelationFilterObjectSchema),
z.lazy(() => UserWhereInputObjectSchema)]).optional(),Vote: z.lazy(() => VoteListRelationFilterObjectSchema).optional()
}).strict();

 export const PizzaWhereInputObjectSchema = Schema
