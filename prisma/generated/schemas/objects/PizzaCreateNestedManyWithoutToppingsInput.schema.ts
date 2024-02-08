import { z } from 'zod';
import { PizzaCreateWithoutToppingsInputObjectSchema } from './PizzaCreateWithoutToppingsInput.schema';
import { PizzaUncheckedCreateWithoutToppingsInputObjectSchema } from './PizzaUncheckedCreateWithoutToppingsInput.schema';
import { PizzaCreateOrConnectWithoutToppingsInputObjectSchema } from './PizzaCreateOrConnectWithoutToppingsInput.schema';
import { PizzaWhereUniqueInputObjectSchema } from './PizzaWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  create: z.union([z.lazy(() => PizzaCreateWithoutToppingsInputObjectSchema),
z.lazy(() => PizzaCreateWithoutToppingsInputObjectSchema).array(),
z.lazy(() => PizzaUncheckedCreateWithoutToppingsInputObjectSchema),
z.lazy(() => PizzaUncheckedCreateWithoutToppingsInputObjectSchema).array()]).optional(),connectOrCreate: z.union([z.lazy(() => PizzaCreateOrConnectWithoutToppingsInputObjectSchema),
z.lazy(() => PizzaCreateOrConnectWithoutToppingsInputObjectSchema).array()]).optional(),connect: z.union([z.lazy(() => PizzaWhereUniqueInputObjectSchema),
z.lazy(() => PizzaWhereUniqueInputObjectSchema).array()]).optional()
}).strict();

 export const PizzaCreateNestedManyWithoutToppingsInputObjectSchema = Schema
