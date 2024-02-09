import { z } from "zod";
import { PizzaCreateWithoutToppingsInputObjectSchema } from "./PizzaCreateWithoutToppingsInput.schema";
import { PizzaUncheckedCreateWithoutToppingsInputObjectSchema } from "./PizzaUncheckedCreateWithoutToppingsInput.schema";
import { PizzaCreateOrConnectWithoutToppingsInputObjectSchema } from "./PizzaCreateOrConnectWithoutToppingsInput.schema";
import { PizzaUpsertWithWhereUniqueWithoutToppingsInputObjectSchema } from "./PizzaUpsertWithWhereUniqueWithoutToppingsInput.schema";
import { PizzaWhereUniqueInputObjectSchema } from "./PizzaWhereUniqueInput.schema";
import { PizzaUpdateWithWhereUniqueWithoutToppingsInputObjectSchema } from "./PizzaUpdateWithWhereUniqueWithoutToppingsInput.schema";
import { PizzaUpdateManyWithWhereWithoutToppingsInputObjectSchema } from "./PizzaUpdateManyWithWhereWithoutToppingsInput.schema";
import { PizzaScalarWhereInputObjectSchema } from "./PizzaScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    create: z
      .union([
        z.lazy(() => PizzaCreateWithoutToppingsInputObjectSchema),
        z.lazy(() => PizzaCreateWithoutToppingsInputObjectSchema).array(),
        z.lazy(() => PizzaUncheckedCreateWithoutToppingsInputObjectSchema),
        z
          .lazy(() => PizzaUncheckedCreateWithoutToppingsInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => PizzaCreateOrConnectWithoutToppingsInputObjectSchema),
        z
          .lazy(() => PizzaCreateOrConnectWithoutToppingsInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => PizzaUpsertWithWhereUniqueWithoutToppingsInputObjectSchema,
        ),
        z
          .lazy(
            () => PizzaUpsertWithWhereUniqueWithoutToppingsInputObjectSchema,
          )
          .array(),
      ])
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
          () => PizzaUpdateWithWhereUniqueWithoutToppingsInputObjectSchema,
        ),
        z
          .lazy(
            () => PizzaUpdateWithWhereUniqueWithoutToppingsInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => PizzaUpdateManyWithWhereWithoutToppingsInputObjectSchema),
        z
          .lazy(() => PizzaUpdateManyWithWhereWithoutToppingsInputObjectSchema)
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

export const PizzaUncheckedUpdateManyWithoutToppingsNestedInputObjectSchema =
  Schema;
