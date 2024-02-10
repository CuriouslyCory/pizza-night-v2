import { z } from 'zod';
import { PostCreateWithoutCreatedByInputObjectSchema } from './PostCreateWithoutCreatedByInput.schema';
import { PostUncheckedCreateWithoutCreatedByInputObjectSchema } from './PostUncheckedCreateWithoutCreatedByInput.schema';
import { PostCreateOrConnectWithoutCreatedByInputObjectSchema } from './PostCreateOrConnectWithoutCreatedByInput.schema';
import { PostUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from './PostUpsertWithWhereUniqueWithoutCreatedByInput.schema';
import { PostCreateManyCreatedByInputEnvelopeObjectSchema } from './PostCreateManyCreatedByInputEnvelope.schema';
import { PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from './PostUpdateWithWhereUniqueWithoutCreatedByInput.schema';
import { PostUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from './PostUpdateManyWithWhereWithoutCreatedByInput.schema';
import { PostScalarWhereInputObjectSchema } from './PostScalarWhereInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  create: z.union([z.lazy(() => PostCreateWithoutCreatedByInputObjectSchema),
z.lazy(() => PostCreateWithoutCreatedByInputObjectSchema).array(),
z.lazy(() => PostUncheckedCreateWithoutCreatedByInputObjectSchema),
z.lazy(() => PostUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),connectOrCreate: z.union([z.lazy(() => PostCreateOrConnectWithoutCreatedByInputObjectSchema),
z.lazy(() => PostCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),upsert: z.union([z.lazy(() => PostUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema),
z.lazy(() => PostUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),createMany: z.lazy(() => PostCreateManyCreatedByInputEnvelopeObjectSchema).optional(),set: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema),
z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional(),disconnect: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema),
z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional(),delete: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema),
z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional(),connect: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema),
z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional(),update: z.union([z.lazy(() => PostUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema),
z.lazy(() => PostUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),updateMany: z.union([z.lazy(() => PostUpdateManyWithWhereWithoutCreatedByInputObjectSchema),
z.lazy(() => PostUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array()]).optional(),deleteMany: z.union([z.lazy(() => PostScalarWhereInputObjectSchema),
z.lazy(() => PostScalarWhereInputObjectSchema).array()]).optional()
}).strict();

 export const PostUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema = Schema
