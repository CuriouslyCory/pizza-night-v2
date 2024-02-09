import { z } from "zod";
import { PostCreateWithoutCreatedByInputObjectSchema } from "./PostCreateWithoutCreatedByInput.schema";
import { PostUncheckedCreateWithoutCreatedByInputObjectSchema } from "./PostUncheckedCreateWithoutCreatedByInput.schema";
import { PostCreateOrConnectWithoutCreatedByInputObjectSchema } from "./PostCreateOrConnectWithoutCreatedByInput.schema";
import { PostCreateManyCreatedByInputEnvelopeObjectSchema } from "./PostCreateManyCreatedByInputEnvelope.schema";
import { PostWhereUniqueInputObjectSchema } from "./PostWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    create: z
      .union([
        z.lazy(() => PostCreateWithoutCreatedByInputObjectSchema),
        z.lazy(() => PostCreateWithoutCreatedByInputObjectSchema).array(),
        z.lazy(() => PostUncheckedCreateWithoutCreatedByInputObjectSchema),
        z
          .lazy(() => PostUncheckedCreateWithoutCreatedByInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => PostCreateOrConnectWithoutCreatedByInputObjectSchema),
        z
          .lazy(() => PostCreateOrConnectWithoutCreatedByInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => PostCreateManyCreatedByInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => PostWhereUniqueInputObjectSchema),
        z.lazy(() => PostWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const PostCreateNestedManyWithoutCreatedByInputObjectSchema = Schema;
