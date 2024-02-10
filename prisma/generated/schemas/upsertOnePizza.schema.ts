import { z } from 'zod';
import { PizzaWhereUniqueInputObjectSchema } from './objects/PizzaWhereUniqueInput.schema';
import { PizzaCreateInputObjectSchema } from './objects/PizzaCreateInput.schema';
import { PizzaUncheckedCreateInputObjectSchema } from './objects/PizzaUncheckedCreateInput.schema';
import { PizzaUpdateInputObjectSchema } from './objects/PizzaUpdateInput.schema';
import { PizzaUncheckedUpdateInputObjectSchema } from './objects/PizzaUncheckedUpdateInput.schema'

export const PizzaUpsertSchema = z.object({   where: PizzaWhereUniqueInputObjectSchema, create: z.union([ PizzaCreateInputObjectSchema, PizzaUncheckedCreateInputObjectSchema ]), update: z.union([ PizzaUpdateInputObjectSchema, PizzaUncheckedUpdateInputObjectSchema ])  })