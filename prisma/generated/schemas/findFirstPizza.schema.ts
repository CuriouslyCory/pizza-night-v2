import { z } from 'zod';
import { PizzaOrderByWithRelationInputObjectSchema } from './objects/PizzaOrderByWithRelationInput.schema';
import { PizzaWhereInputObjectSchema } from './objects/PizzaWhereInput.schema';
import { PizzaWhereUniqueInputObjectSchema } from './objects/PizzaWhereUniqueInput.schema';
import { PizzaScalarFieldEnumSchema } from './enums/PizzaScalarFieldEnum.schema'

export const PizzaFindFirstSchema = z.object({   orderBy: z.union([PizzaOrderByWithRelationInputObjectSchema, PizzaOrderByWithRelationInputObjectSchema.array()]).optional(), where: PizzaWhereInputObjectSchema.optional(), cursor: PizzaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(PizzaScalarFieldEnumSchema).optional() })