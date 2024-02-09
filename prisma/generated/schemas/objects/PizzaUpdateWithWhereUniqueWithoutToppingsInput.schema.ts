import { z } from "zod";
import { PizzaWhereUniqueInputObjectSchema } from "./PizzaWhereUniqueInput.schema";
import { PizzaUpdateWithoutToppingsInputObjectSchema } from "./PizzaUpdateWithoutToppingsInput.schema";
import { PizzaUncheckedUpdateWithoutToppingsInputObjectSchema } from "./PizzaUncheckedUpdateWithoutToppingsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    where: z.lazy(() => PizzaWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => PizzaUpdateWithoutToppingsInputObjectSchema),
      z.lazy(() => PizzaUncheckedUpdateWithoutToppingsInputObjectSchema),
    ]),
  })
  .strict();

export const PizzaUpdateWithWhereUniqueWithoutToppingsInputObjectSchema =
  Schema;
