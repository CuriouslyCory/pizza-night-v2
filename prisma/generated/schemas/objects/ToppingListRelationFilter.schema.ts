import { z } from 'zod';
import { ToppingWhereInputObjectSchema } from './ToppingWhereInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  every: z.lazy(() => ToppingWhereInputObjectSchema).optional(),some: z.lazy(() => ToppingWhereInputObjectSchema).optional(),none: z.lazy(() => ToppingWhereInputObjectSchema).optional()
}).strict();

 export const ToppingListRelationFilterObjectSchema = Schema
