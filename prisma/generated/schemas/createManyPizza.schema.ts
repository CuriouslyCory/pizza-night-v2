import { z } from 'zod';
import { PizzaCreateManyInputObjectSchema } from './objects/PizzaCreateManyInput.schema'

export const PizzaCreateManySchema = z.object({ data: z.union([ PizzaCreateManyInputObjectSchema, z.array(PizzaCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })