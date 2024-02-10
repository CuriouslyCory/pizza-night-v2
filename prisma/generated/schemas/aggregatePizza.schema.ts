import { z } from 'zod';
import { PizzaOrderByWithRelationInputObjectSchema } from './objects/PizzaOrderByWithRelationInput.schema';
import { PizzaWhereInputObjectSchema } from './objects/PizzaWhereInput.schema';
import { PizzaWhereUniqueInputObjectSchema } from './objects/PizzaWhereUniqueInput.schema';
import { PizzaCountAggregateInputObjectSchema } from './objects/PizzaCountAggregateInput.schema';
import { PizzaMinAggregateInputObjectSchema } from './objects/PizzaMinAggregateInput.schema';
import { PizzaMaxAggregateInputObjectSchema } from './objects/PizzaMaxAggregateInput.schema'

export const PizzaAggregateSchema = z.object({ orderBy: z.union([PizzaOrderByWithRelationInputObjectSchema, PizzaOrderByWithRelationInputObjectSchema.array()]).optional(), where: PizzaWhereInputObjectSchema.optional(), cursor: PizzaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), PizzaCountAggregateInputObjectSchema ]).optional(), _min: PizzaMinAggregateInputObjectSchema.optional(), _max: PizzaMaxAggregateInputObjectSchema.optional() })