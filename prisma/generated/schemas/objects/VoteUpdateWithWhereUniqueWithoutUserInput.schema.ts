import { z } from 'zod';
import { VoteWhereUniqueInputObjectSchema } from './VoteWhereUniqueInput.schema';
import { VoteUpdateWithoutUserInputObjectSchema } from './VoteUpdateWithoutUserInput.schema';
import { VoteUncheckedUpdateWithoutUserInputObjectSchema } from './VoteUncheckedUpdateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  where: z.lazy(() => VoteWhereUniqueInputObjectSchema),data: z.union([z.lazy(() => VoteUpdateWithoutUserInputObjectSchema),
z.lazy(() => VoteUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();

 export const VoteUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema
