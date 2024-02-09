import { z } from "zod";
import { PizzaCreateWithoutCreatedByInputObjectSchema } from "./PizzaCreateWithoutCreatedByInput.schema";
import { PizzaUncheckedCreateWithoutCreatedByInputObjectSchema } from "./PizzaUncheckedCreateWithoutCreatedByInput.schema";
import { PizzaCreateOrConnectWithoutCreatedByInputObjectSchema } from "./PizzaCreateOrConnectWithoutCreatedByInput.schema";
import { PizzaUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from "./PizzaUpsertWithWhereUniqueWithoutCreatedByInput.schema";
import { PizzaCreateManyCreatedByInputEnvelopeObjectSchema } from "./PizzaCreateManyCreatedByInputEnvelope.schema";
import { PizzaWhereUniqueInputObjectSchema } from "./PizzaWhereUniqueInput.schema";
import { PizzaUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from "./PizzaUpdateWithWhereUniqueWithoutCreatedByInput.schema";
import { PizzaUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from "./PizzaUpdateManyWithWhereWithoutCreatedByInput.schema";
import { PizzaScalarWhereInputObjectSchema } from "./PizzaScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    create: z
      .union([
        z.lazy(() => PizzaCreateWithoutCreatedByInputObjectSchema),
        z.lazy(() => PizzaCreateWithoutCreatedByInputObjectSchema).array(),
        z.lazy(() => PizzaUncheckedCreateWithoutCreatedByInputObjectSchema),
        z
          .lazy(() => PizzaUncheckedCreateWithoutCreatedByInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => PizzaCreateOrConnectWithoutCreatedByInputObjectSchema),
        z
          .lazy(() => PizzaCreateOrConnectWithoutCreatedByInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => PizzaUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema,
        ),
        z
          .lazy(
            () => PizzaUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => PizzaCreateManyCreatedByInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => PizzaWhereUniqueInputObjectSchema),
        z.lazy(() => PizzaWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => PizzaWhereUniqueInputObjectSchema),
        z.lazy(() => PizzaWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => PizzaWhereUniqueInputObjectSchema),
        z.lazy(() => PizzaWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => PizzaWhereUniqueInputObjectSchema),
        z.lazy(() => PizzaWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => PizzaUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema,
        ),
        z
          .lazy(
            () => PizzaUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => PizzaUpdateManyWithWhereWithoutCreatedByInputObjectSchema),
        z
          .lazy(() => PizzaUpdateManyWithWhereWithoutCreatedByInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => PizzaScalarWhereInputObjectSchema),
        z.lazy(() => PizzaScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const PizzaUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema =
  Schema;
