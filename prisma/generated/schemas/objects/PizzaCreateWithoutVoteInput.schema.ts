import { z } from 'zod';
import { ToppingCreateNestedManyWithoutPizzaInputObjectSchema } from './ToppingCreateNestedManyWithoutPizzaInput.schema';
import { UserCreateNestedOneWithoutPizzaInputObjectSchema } from './UserCreateNestedOneWithoutPizzaInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  id: z.string().optional(),name: z.string(),createdAt: z.coerce.date().optional(),updatedAt: z.coerce.date().optional(),toppings: z.lazy(() => ToppingCreateNestedManyWithoutPizzaInputObjectSchema).optional(),createdBy: z.lazy(() => UserCreateNestedOneWithoutPizzaInputObjectSchema)
}).strict();

 export const PizzaCreateWithoutVoteInputObjectSchema = Schema
