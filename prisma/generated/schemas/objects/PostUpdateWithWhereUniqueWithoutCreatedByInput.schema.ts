import { z } from "zod";
import { PostWhereUniqueInputObjectSchema } from "./PostWhereUniqueInput.schema";
import { PostUpdateWithoutCreatedByInputObjectSchema } from "./PostUpdateWithoutCreatedByInput.schema";
import { PostUncheckedUpdateWithoutCreatedByInputObjectSchema } from "./PostUncheckedUpdateWithoutCreatedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    where: z.lazy(() => PostWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => PostUpdateWithoutCreatedByInputObjectSchema),
      z.lazy(() => PostUncheckedUpdateWithoutCreatedByInputObjectSchema),
    ]),
  })
  .strict();

export const PostUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema =
  Schema;
