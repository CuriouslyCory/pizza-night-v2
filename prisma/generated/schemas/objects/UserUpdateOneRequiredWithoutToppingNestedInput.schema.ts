import { z } from 'zod';
import { UserCreateWithoutToppingInputObjectSchema } from './UserCreateWithoutToppingInput.schema';
import { UserUncheckedCreateWithoutToppingInputObjectSchema } from './UserUncheckedCreateWithoutToppingInput.schema';
import { UserCreateOrConnectWithoutToppingInputObjectSchema } from './UserCreateOrConnectWithoutToppingInput.schema';
import { UserUpsertWithoutToppingInputObjectSchema } from './UserUpsertWithoutToppingInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutToppingInputObjectSchema } from './UserUpdateWithoutToppingInput.schema';
import { UserUncheckedUpdateWithoutToppingInputObjectSchema } from './UserUncheckedUpdateWithoutToppingInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutToppingInputObjectSchema),
z.lazy(() => UserUncheckedCreateWithoutToppingInputObjectSchema)]).optional(),connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutToppingInputObjectSchema).optional(),upsert: z.lazy(() => UserUpsertWithoutToppingInputObjectSchema).optional(),connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),update: z.union([z.lazy(() => UserUpdateWithoutToppingInputObjectSchema),
z.lazy(() => UserUncheckedUpdateWithoutToppingInputObjectSchema)]).optional()
}).strict();

 export const UserUpdateOneRequiredWithoutToppingNestedInputObjectSchema = Schema
