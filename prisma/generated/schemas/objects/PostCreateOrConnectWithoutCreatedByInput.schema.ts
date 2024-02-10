import { z } from 'zod';
import { PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostCreateWithoutCreatedByInputObjectSchema } from './PostCreateWithoutCreatedByInput.schema';
import { PostUncheckedCreateWithoutCreatedByInputObjectSchema } from './PostUncheckedCreateWithoutCreatedByInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  where: z.lazy(() => PostWhereUniqueInputObjectSchema),create: z.union([z.lazy(() => PostCreateWithoutCreatedByInputObjectSchema),
z.lazy(() => PostUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();

 export const PostCreateOrConnectWithoutCreatedByInputObjectSchema = Schema
