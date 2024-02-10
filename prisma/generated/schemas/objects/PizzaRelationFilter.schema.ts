import { z } from 'zod';
import { PizzaWhereInputObjectSchema } from './PizzaWhereInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  is: z.lazy(() => PizzaWhereInputObjectSchema).optional().nullable(),isNot: z.lazy(() => PizzaWhereInputObjectSchema).optional().nullable()
}).strict();

 export const PizzaRelationFilterObjectSchema = Schema
