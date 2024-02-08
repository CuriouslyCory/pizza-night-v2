import { z } from 'zod';
import { VoteWhereUniqueInputObjectSchema } from './VoteWhereUniqueInput.schema';
import { VoteCreateWithoutUserInputObjectSchema } from './VoteCreateWithoutUserInput.schema';
import { VoteUncheckedCreateWithoutUserInputObjectSchema } from './VoteUncheckedCreateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  where: z.lazy(() => VoteWhereUniqueInputObjectSchema),create: z.union([z.lazy(() => VoteCreateWithoutUserInputObjectSchema),
z.lazy(() => VoteUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();

 export const VoteCreateOrConnectWithoutUserInputObjectSchema = Schema
