import { z } from 'zod';
import { PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostUpdateWithoutCreatedByInputObjectSchema } from './PostUpdateWithoutCreatedByInput.schema';
import { PostUncheckedUpdateWithoutCreatedByInputObjectSchema } from './PostUncheckedUpdateWithoutCreatedByInput.schema';
import { PostCreateWithoutCreatedByInputObjectSchema } from './PostCreateWithoutCreatedByInput.schema';
import { PostUncheckedCreateWithoutCreatedByInputObjectSchema } from './PostUncheckedCreateWithoutCreatedByInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  where: z.lazy(() => PostWhereUniqueInputObjectSchema),update: z.union([z.lazy(() => PostUpdateWithoutCreatedByInputObjectSchema),
z.lazy(() => PostUncheckedUpdateWithoutCreatedByInputObjectSchema)]),create: z.union([z.lazy(() => PostCreateWithoutCreatedByInputObjectSchema),
z.lazy(() => PostUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();

 export const PostUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema = Schema
