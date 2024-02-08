import { z } from 'zod';
import { ToppingCreateWithoutCreatedByInputObjectSchema } from './ToppingCreateWithoutCreatedByInput.schema';
import { ToppingUncheckedCreateWithoutCreatedByInputObjectSchema } from './ToppingUncheckedCreateWithoutCreatedByInput.schema';
import { ToppingCreateOrConnectWithoutCreatedByInputObjectSchema } from './ToppingCreateOrConnectWithoutCreatedByInput.schema';
import { ToppingUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from './ToppingUpsertWithWhereUniqueWithoutCreatedByInput.schema';
import { ToppingCreateManyCreatedByInputEnvelopeObjectSchema } from './ToppingCreateManyCreatedByInputEnvelope.schema';
import { ToppingWhereUniqueInputObjectSchema } from './ToppingWhereUniqueInput.schema';
import { ToppingUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from './ToppingUpdateWithWhereUniqueWithoutCreatedByInput.schema';
import { ToppingUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from './ToppingUpdateManyWithWhereWithoutCreatedByInput.schema';
import { ToppingScalarWhereInputObjectSchema } from './ToppingScalarWhereInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  create: z.union([z.lazy(() => ToppingCreateWithoutCreatedByInputObjectSchema),
z.lazy(() => ToppingCreateWithoutCreatedByInputObjectSchema).array(),
z.lazy(() => ToppingUncheckedCreateWithoutCreatedByInputObjectSchema),
z.lazy(() => ToppingUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),connectOrCreate: z.union([z.lazy(() => ToppingCreateOrConnectWithoutCreatedByInputObjectSchema),
z.lazy(() => ToppingCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),upsert: z.union([z.lazy(() => ToppingUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema),
z.lazy(() => ToppingUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),createMany: z.lazy(() => ToppingCreateManyCreatedByInputEnvelopeObjectSchema).optional(),set: z.union([z.lazy(() => ToppingWhereUniqueInputObjectSchema),
z.lazy(() => ToppingWhereUniqueInputObjectSchema).array()]).optional(),disconnect: z.union([z.lazy(() => ToppingWhereUniqueInputObjectSchema),
z.lazy(() => ToppingWhereUniqueInputObjectSchema).array()]).optional(),delete: z.union([z.lazy(() => ToppingWhereUniqueInputObjectSchema),
z.lazy(() => ToppingWhereUniqueInputObjectSchema).array()]).optional(),connect: z.union([z.lazy(() => ToppingWhereUniqueInputObjectSchema),
z.lazy(() => ToppingWhereUniqueInputObjectSchema).array()]).optional(),update: z.union([z.lazy(() => ToppingUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema),
z.lazy(() => ToppingUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),updateMany: z.union([z.lazy(() => ToppingUpdateManyWithWhereWithoutCreatedByInputObjectSchema),
z.lazy(() => ToppingUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array()]).optional(),deleteMany: z.union([z.lazy(() => ToppingScalarWhereInputObjectSchema),
z.lazy(() => ToppingScalarWhereInputObjectSchema).array()]).optional()
}).strict();

 export const ToppingUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema = Schema
