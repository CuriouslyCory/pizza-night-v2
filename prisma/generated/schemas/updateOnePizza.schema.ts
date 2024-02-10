import { z } from 'zod';
import { PizzaUpdateInputObjectSchema } from './objects/PizzaUpdateInput.schema';
import { PizzaUncheckedUpdateInputObjectSchema } from './objects/PizzaUncheckedUpdateInput.schema';
import { PizzaWhereUniqueInputObjectSchema } from './objects/PizzaWhereUniqueInput.schema'

export const PizzaUpdateOneSchema = z.object({   data: z.union([PizzaUpdateInputObjectSchema, PizzaUncheckedUpdateInputObjectSchema]), where: PizzaWhereUniqueInputObjectSchema  })