import { z } from "zod";
import { ToppingCreateWithoutPizzaInputObjectSchema } from "./ToppingCreateWithoutPizzaInput.schema";
import { ToppingUncheckedCreateWithoutPizzaInputObjectSchema } from "./ToppingUncheckedCreateWithoutPizzaInput.schema";
import { ToppingCreateOrConnectWithoutPizzaInputObjectSchema } from "./ToppingCreateOrConnectWithoutPizzaInput.schema";
import { ToppingUpsertWithWhereUniqueWithoutPizzaInputObjectSchema } from "./ToppingUpsertWithWhereUniqueWithoutPizzaInput.schema";
import { ToppingWhereUniqueInputObjectSchema } from "./ToppingWhereUniqueInput.schema";
import { ToppingUpdateWithWhereUniqueWithoutPizzaInputObjectSchema } from "./ToppingUpdateWithWhereUniqueWithoutPizzaInput.schema";
import { ToppingUpdateManyWithWhereWithoutPizzaInputObjectSchema } from "./ToppingUpdateManyWithWhereWithoutPizzaInput.schema";
import { ToppingScalarWhereInputObjectSchema } from "./ToppingScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    create: z
      .union([
        z.lazy(() => ToppingCreateWithoutPizzaInputObjectSchema),
        z.lazy(() => ToppingCreateWithoutPizzaInputObjectSchema).array(),
        z.lazy(() => ToppingUncheckedCreateWithoutPizzaInputObjectSchema),
        z
          .lazy(() => ToppingUncheckedCreateWithoutPizzaInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ToppingCreateOrConnectWithoutPizzaInputObjectSchema),
        z
          .lazy(() => ToppingCreateOrConnectWithoutPizzaInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => ToppingUpsertWithWhereUniqueWithoutPizzaInputObjectSchema),
        z
          .lazy(() => ToppingUpsertWithWhereUniqueWithoutPizzaInputObjectSchema)
          .array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => ToppingWhereUniqueInputObjectSchema),
        z.lazy(() => ToppingWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ToppingWhereUniqueInputObjectSchema),
        z.lazy(() => ToppingWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ToppingWhereUniqueInputObjectSchema),
        z.lazy(() => ToppingWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ToppingWhereUniqueInputObjectSchema),
        z.lazy(() => ToppingWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => ToppingUpdateWithWhereUniqueWithoutPizzaInputObjectSchema),
        z
          .lazy(() => ToppingUpdateWithWhereUniqueWithoutPizzaInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ToppingUpdateManyWithWhereWithoutPizzaInputObjectSchema),
        z
          .lazy(() => ToppingUpdateManyWithWhereWithoutPizzaInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ToppingScalarWhereInputObjectSchema),
        z.lazy(() => ToppingScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ToppingUncheckedUpdateManyWithoutPizzaNestedInputObjectSchema =
  Schema;
