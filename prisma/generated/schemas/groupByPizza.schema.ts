import { z } from 'zod';
import { PizzaWhereInputObjectSchema } from './objects/PizzaWhereInput.schema';
import { PizzaOrderByWithAggregationInputObjectSchema } from './objects/PizzaOrderByWithAggregationInput.schema';
import { PizzaScalarWhereWithAggregatesInputObjectSchema } from './objects/PizzaScalarWhereWithAggregatesInput.schema';
import { PizzaScalarFieldEnumSchema } from './enums/PizzaScalarFieldEnum.schema'

export const PizzaGroupBySchema = z.object({ where: PizzaWhereInputObjectSchema.optional(), orderBy: z.union([PizzaOrderByWithAggregationInputObjectSchema, PizzaOrderByWithAggregationInputObjectSchema.array()]).optional(), having: PizzaScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(PizzaScalarFieldEnumSchema)  })