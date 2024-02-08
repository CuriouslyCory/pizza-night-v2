import { z } from 'zod';
import { PizzaWhereUniqueInputObjectSchema } from './objects/PizzaWhereUniqueInput.schema'

export const PizzaDeleteOneSchema = z.object({   where: PizzaWhereUniqueInputObjectSchema  })