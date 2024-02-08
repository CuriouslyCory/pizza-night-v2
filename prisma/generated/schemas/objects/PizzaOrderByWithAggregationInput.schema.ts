import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PizzaCountOrderByAggregateInputObjectSchema } from './PizzaCountOrderByAggregateInput.schema';
import { PizzaMaxOrderByAggregateInputObjectSchema } from './PizzaMaxOrderByAggregateInput.schema';
import { PizzaMinOrderByAggregateInputObjectSchema } from './PizzaMinOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),name: z.lazy(() => SortOrderSchema).optional(),createdById: z.lazy(() => SortOrderSchema).optional(),createdAt: z.lazy(() => SortOrderSchema).optional(),updatedAt: z.lazy(() => SortOrderSchema).optional(),_count: z.lazy(() => PizzaCountOrderByAggregateInputObjectSchema).optional(),_max: z.lazy(() => PizzaMaxOrderByAggregateInputObjectSchema).optional(),_min: z.lazy(() => PizzaMinOrderByAggregateInputObjectSchema).optional()
}).strict();

 export const PizzaOrderByWithAggregationInputObjectSchema = Schema
