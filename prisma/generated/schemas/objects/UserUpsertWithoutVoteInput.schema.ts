import { z } from 'zod';
import { UserUpdateWithoutVoteInputObjectSchema } from './UserUpdateWithoutVoteInput.schema';
import { UserUncheckedUpdateWithoutVoteInputObjectSchema } from './UserUncheckedUpdateWithoutVoteInput.schema';
import { UserCreateWithoutVoteInputObjectSchema } from './UserCreateWithoutVoteInput.schema';
import { UserUncheckedCreateWithoutVoteInputObjectSchema } from './UserUncheckedCreateWithoutVoteInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutVoteInputObjectSchema),
z.lazy(() => UserUncheckedUpdateWithoutVoteInputObjectSchema)]),create: z.union([z.lazy(() => UserCreateWithoutVoteInputObjectSchema),
z.lazy(() => UserUncheckedCreateWithoutVoteInputObjectSchema)])
}).strict();

 export const UserUpsertWithoutVoteInputObjectSchema = Schema
