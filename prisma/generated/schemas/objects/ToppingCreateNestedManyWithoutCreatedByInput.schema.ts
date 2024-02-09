import { z } from "zod";
import { ToppingCreateWithoutCreatedByInputObjectSchema } from "./ToppingCreateWithoutCreatedByInput.schema";
import { ToppingUncheckedCreateWithoutCreatedByInputObjectSchema } from "./ToppingUncheckedCreateWithoutCreatedByInput.schema";
import { ToppingCreateOrConnectWithoutCreatedByInputObjectSchema } from "./ToppingCreateOrConnectWithoutCreatedByInput.schema";
import { ToppingCreateManyCreatedByInputEnvelopeObjectSchema } from "./ToppingCreateManyCreatedByInputEnvelope.schema";
import { ToppingWhereUniqueInputObjectSchema } from "./ToppingWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    create: z
      .union([
        z.lazy(() => ToppingCreateWithoutCreatedByInputObjectSchema),
        z.lazy(() => ToppingCreateWithoutCreatedByInputObjectSchema).array(),
        z.lazy(() => ToppingUncheckedCreateWithoutCreatedByInputObjectSchema),
        z
          .lazy(() => ToppingUncheckedCreateWithoutCreatedByInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ToppingCreateOrConnectWithoutCreatedByInputObjectSchema),
        z
          .lazy(() => ToppingCreateOrConnectWithoutCreatedByInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ToppingCreateManyCreatedByInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => ToppingWhereUniqueInputObjectSchema),
        z.lazy(() => ToppingWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ToppingCreateNestedManyWithoutCreatedByInputObjectSchema = Schema;
