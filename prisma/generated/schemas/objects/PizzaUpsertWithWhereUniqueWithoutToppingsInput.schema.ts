import { z } from "zod";
import { PizzaWhereUniqueInputObjectSchema } from "./PizzaWhereUniqueInput.schema";
import { PizzaUpdateWithoutToppingsInputObjectSchema } from "./PizzaUpdateWithoutToppingsInput.schema";
import { PizzaUncheckedUpdateWithoutToppingsInputObjectSchema } from "./PizzaUncheckedUpdateWithoutToppingsInput.schema";
import { PizzaCreateWithoutToppingsInputObjectSchema } from "./PizzaCreateWithoutToppingsInput.schema";
import { PizzaUncheckedCreateWithoutToppingsInputObjectSchema } from "./PizzaUncheckedCreateWithoutToppingsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    where: z.lazy(() => PizzaWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => PizzaUpdateWithoutToppingsInputObjectSchema),
      z.lazy(() => PizzaUncheckedUpdateWithoutToppingsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PizzaCreateWithoutToppingsInputObjectSchema),
      z.lazy(() => PizzaUncheckedCreateWithoutToppingsInputObjectSchema),
    ]),
  })
  .strict();

export const PizzaUpsertWithWhereUniqueWithoutToppingsInputObjectSchema =
  Schema;
