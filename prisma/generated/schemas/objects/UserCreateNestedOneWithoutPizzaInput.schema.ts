import { z } from 'zod';
import { UserCreateWithoutPizzaInputObjectSchema } from './UserCreateWithoutPizzaInput.schema';
import { UserUncheckedCreateWithoutPizzaInputObjectSchema } from './UserUncheckedCreateWithoutPizzaInput.schema';
import { UserCreateOrConnectWithoutPizzaInputObjectSchema } from './UserCreateOrConnectWithoutPizzaInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutPizzaInputObjectSchema),
z.lazy(() => UserUncheckedCreateWithoutPizzaInputObjectSchema)]).optional(),connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPizzaInputObjectSchema).optional(),connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();

 export const UserCreateNestedOneWithoutPizzaInputObjectSchema = Schema
