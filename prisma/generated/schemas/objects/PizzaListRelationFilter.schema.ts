import { z } from 'zod';
import { PizzaWhereInputObjectSchema } from './PizzaWhereInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  every: z.lazy(() => PizzaWhereInputObjectSchema).optional(),some: z.lazy(() => PizzaWhereInputObjectSchema).optional(),none: z.lazy(() => PizzaWhereInputObjectSchema).optional()
}).strict();

 export const PizzaListRelationFilterObjectSchema = Schema
