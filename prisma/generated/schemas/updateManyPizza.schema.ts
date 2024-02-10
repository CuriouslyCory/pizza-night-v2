import { z } from 'zod';
import { PizzaUpdateManyMutationInputObjectSchema } from './objects/PizzaUpdateManyMutationInput.schema';
import { PizzaWhereInputObjectSchema } from './objects/PizzaWhereInput.schema'

export const PizzaUpdateManySchema = z.object({ data: PizzaUpdateManyMutationInputObjectSchema, where: PizzaWhereInputObjectSchema.optional()  })