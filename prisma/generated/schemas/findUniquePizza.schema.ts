import { z } from 'zod';
import { PizzaWhereUniqueInputObjectSchema } from './objects/PizzaWhereUniqueInput.schema'

export const PizzaFindUniqueSchema = z.object({   where: PizzaWhereUniqueInputObjectSchema })