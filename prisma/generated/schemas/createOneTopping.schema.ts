import { z } from 'zod';
import { ToppingCreateInputObjectSchema } from './objects/ToppingCreateInput.schema';
import { ToppingUncheckedCreateInputObjectSchema } from './objects/ToppingUncheckedCreateInput.schema'

export const ToppingCreateOneSchema = z.object({   data: z.union([ToppingCreateInputObjectSchema, ToppingUncheckedCreateInputObjectSchema])  })