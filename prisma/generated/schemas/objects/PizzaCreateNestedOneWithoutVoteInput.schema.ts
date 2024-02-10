import { z } from 'zod';
import { PizzaCreateWithoutVoteInputObjectSchema } from './PizzaCreateWithoutVoteInput.schema';
import { PizzaUncheckedCreateWithoutVoteInputObjectSchema } from './PizzaUncheckedCreateWithoutVoteInput.schema';
import { PizzaCreateOrConnectWithoutVoteInputObjectSchema } from './PizzaCreateOrConnectWithoutVoteInput.schema';
import { PizzaWhereUniqueInputObjectSchema } from './PizzaWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  create: z.union([z.lazy(() => PizzaCreateWithoutVoteInputObjectSchema),
z.lazy(() => PizzaUncheckedCreateWithoutVoteInputObjectSchema)]).optional(),connectOrCreate: z.lazy(() => PizzaCreateOrConnectWithoutVoteInputObjectSchema).optional(),connect: z.lazy(() => PizzaWhereUniqueInputObjectSchema).optional()
}).strict();

 export const PizzaCreateNestedOneWithoutVoteInputObjectSchema = Schema
