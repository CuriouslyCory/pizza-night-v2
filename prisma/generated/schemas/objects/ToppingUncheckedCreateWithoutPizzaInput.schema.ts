import { z } from 'zod';
import { CategorySchema } from '../enums/Category.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  id: z.string().optional(),name: z.string(),category: z.lazy(() => CategorySchema),createdById: z.string(),approved: z.boolean().optional(),createdAt: z.coerce.date().optional(),updatedAt: z.coerce.date().optional()
}).strict();

 export const ToppingUncheckedCreateWithoutPizzaInputObjectSchema = Schema
