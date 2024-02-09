import { z } from "zod";
import { PizzaCreateWithoutCreatedByInputObjectSchema } from "./PizzaCreateWithoutCreatedByInput.schema";
import { PizzaUncheckedCreateWithoutCreatedByInputObjectSchema } from "./PizzaUncheckedCreateWithoutCreatedByInput.schema";
import { PizzaCreateOrConnectWithoutCreatedByInputObjectSchema } from "./PizzaCreateOrConnectWithoutCreatedByInput.schema";
import { PizzaCreateManyCreatedByInputEnvelopeObjectSchema } from "./PizzaCreateManyCreatedByInputEnvelope.schema";
import { PizzaWhereUniqueInputObjectSchema } from "./PizzaWhereUniqueInput.schema";

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
    createMany: z
      .lazy(() => PizzaCreateManyCreatedByInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => PizzaWhereUniqueInputObjectSchema),
        z.lazy(() => PizzaWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const PizzaCreateNestedManyWithoutCreatedByInputObjectSchema = Schema;
