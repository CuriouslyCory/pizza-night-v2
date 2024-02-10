import { z } from 'zod';
import { VoteCreateWithoutPizzaInputObjectSchema } from './VoteCreateWithoutPizzaInput.schema';
import { VoteUncheckedCreateWithoutPizzaInputObjectSchema } from './VoteUncheckedCreateWithoutPizzaInput.schema';
import { VoteCreateOrConnectWithoutPizzaInputObjectSchema } from './VoteCreateOrConnectWithoutPizzaInput.schema';
import { VoteUpsertWithWhereUniqueWithoutPizzaInputObjectSchema } from './VoteUpsertWithWhereUniqueWithoutPizzaInput.schema';
import { VoteCreateManyPizzaInputEnvelopeObjectSchema } from './VoteCreateManyPizzaInputEnvelope.schema';
import { VoteWhereUniqueInputObjectSchema } from './VoteWhereUniqueInput.schema';
import { VoteUpdateWithWhereUniqueWithoutPizzaInputObjectSchema } from './VoteUpdateWithWhereUniqueWithoutPizzaInput.schema';
import { VoteUpdateManyWithWhereWithoutPizzaInputObjectSchema } from './VoteUpdateManyWithWhereWithoutPizzaInput.schema';
import { VoteScalarWhereInputObjectSchema } from './VoteScalarWhereInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  create: z.union([z.lazy(() => VoteCreateWithoutPizzaInputObjectSchema),
z.lazy(() => VoteCreateWithoutPizzaInputObjectSchema).array(),
z.lazy(() => VoteUncheckedCreateWithoutPizzaInputObjectSchema),
z.lazy(() => VoteUncheckedCreateWithoutPizzaInputObjectSchema).array()]).optional(),connectOrCreate: z.union([z.lazy(() => VoteCreateOrConnectWithoutPizzaInputObjectSchema),
z.lazy(() => VoteCreateOrConnectWithoutPizzaInputObjectSchema).array()]).optional(),upsert: z.union([z.lazy(() => VoteUpsertWithWhereUniqueWithoutPizzaInputObjectSchema),
z.lazy(() => VoteUpsertWithWhereUniqueWithoutPizzaInputObjectSchema).array()]).optional(),createMany: z.lazy(() => VoteCreateManyPizzaInputEnvelopeObjectSchema).optional(),set: z.union([z.lazy(() => VoteWhereUniqueInputObjectSchema),
z.lazy(() => VoteWhereUniqueInputObjectSchema).array()]).optional(),disconnect: z.union([z.lazy(() => VoteWhereUniqueInputObjectSchema),
z.lazy(() => VoteWhereUniqueInputObjectSchema).array()]).optional(),delete: z.union([z.lazy(() => VoteWhereUniqueInputObjectSchema),
z.lazy(() => VoteWhereUniqueInputObjectSchema).array()]).optional(),connect: z.union([z.lazy(() => VoteWhereUniqueInputObjectSchema),
z.lazy(() => VoteWhereUniqueInputObjectSchema).array()]).optional(),update: z.union([z.lazy(() => VoteUpdateWithWhereUniqueWithoutPizzaInputObjectSchema),
z.lazy(() => VoteUpdateWithWhereUniqueWithoutPizzaInputObjectSchema).array()]).optional(),updateMany: z.union([z.lazy(() => VoteUpdateManyWithWhereWithoutPizzaInputObjectSchema),
z.lazy(() => VoteUpdateManyWithWhereWithoutPizzaInputObjectSchema).array()]).optional(),deleteMany: z.union([z.lazy(() => VoteScalarWhereInputObjectSchema),
z.lazy(() => VoteScalarWhereInputObjectSchema).array()]).optional()
}).strict();

 export const VoteUpdateManyWithoutPizzaNestedInputObjectSchema = Schema
