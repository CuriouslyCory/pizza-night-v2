import { z } from 'zod';
import { VoteCreateWithoutPizzaInputObjectSchema } from './VoteCreateWithoutPizzaInput.schema';
import { VoteUncheckedCreateWithoutPizzaInputObjectSchema } from './VoteUncheckedCreateWithoutPizzaInput.schema';
import { VoteCreateOrConnectWithoutPizzaInputObjectSchema } from './VoteCreateOrConnectWithoutPizzaInput.schema';
import { VoteCreateManyPizzaInputEnvelopeObjectSchema } from './VoteCreateManyPizzaInputEnvelope.schema';
import { VoteWhereUniqueInputObjectSchema } from './VoteWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  create: z.union([z.lazy(() => VoteCreateWithoutPizzaInputObjectSchema),
z.lazy(() => VoteCreateWithoutPizzaInputObjectSchema).array(),
z.lazy(() => VoteUncheckedCreateWithoutPizzaInputObjectSchema),
z.lazy(() => VoteUncheckedCreateWithoutPizzaInputObjectSchema).array()]).optional(),connectOrCreate: z.union([z.lazy(() => VoteCreateOrConnectWithoutPizzaInputObjectSchema),
z.lazy(() => VoteCreateOrConnectWithoutPizzaInputObjectSchema).array()]).optional(),createMany: z.lazy(() => VoteCreateManyPizzaInputEnvelopeObjectSchema).optional(),connect: z.union([z.lazy(() => VoteWhereUniqueInputObjectSchema),
z.lazy(() => VoteWhereUniqueInputObjectSchema).array()]).optional()
}).strict();

 export const VoteUncheckedCreateNestedManyWithoutPizzaInputObjectSchema = Schema
