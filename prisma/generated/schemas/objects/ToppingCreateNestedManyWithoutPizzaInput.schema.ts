import { z } from 'zod';
import { ToppingCreateWithoutPizzaInputObjectSchema } from './ToppingCreateWithoutPizzaInput.schema';
import { ToppingUncheckedCreateWithoutPizzaInputObjectSchema } from './ToppingUncheckedCreateWithoutPizzaInput.schema';
import { ToppingCreateOrConnectWithoutPizzaInputObjectSchema } from './ToppingCreateOrConnectWithoutPizzaInput.schema';
import { ToppingWhereUniqueInputObjectSchema } from './ToppingWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  create: z.union([z.lazy(() => ToppingCreateWithoutPizzaInputObjectSchema),
z.lazy(() => ToppingCreateWithoutPizzaInputObjectSchema).array(),
z.lazy(() => ToppingUncheckedCreateWithoutPizzaInputObjectSchema),
z.lazy(() => ToppingUncheckedCreateWithoutPizzaInputObjectSchema).array()]).optional(),connectOrCreate: z.union([z.lazy(() => ToppingCreateOrConnectWithoutPizzaInputObjectSchema),
z.lazy(() => ToppingCreateOrConnectWithoutPizzaInputObjectSchema).array()]).optional(),connect: z.union([z.lazy(() => ToppingWhereUniqueInputObjectSchema),
z.lazy(() => ToppingWhereUniqueInputObjectSchema).array()]).optional()
}).strict();

 export const ToppingCreateNestedManyWithoutPizzaInputObjectSchema = Schema
