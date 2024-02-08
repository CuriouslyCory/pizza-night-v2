import { z } from 'zod';
import { ToppingCreateManyInputObjectSchema } from './objects/ToppingCreateManyInput.schema'

export const ToppingCreateManySchema = z.object({ data: z.union([ ToppingCreateManyInputObjectSchema, z.array(ToppingCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })