import { z } from "zod";
import { PizzaWhereUniqueInputObjectSchema } from "./PizzaWhereUniqueInput.schema";
import { PizzaCreateWithoutToppingsInputObjectSchema } from "./PizzaCreateWithoutToppingsInput.schema";
import { PizzaUncheckedCreateWithoutToppingsInputObjectSchema } from "./PizzaUncheckedCreateWithoutToppingsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    where: z.lazy(() => PizzaWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PizzaCreateWithoutToppingsInputObjectSchema),
      z.lazy(() => PizzaUncheckedCreateWithoutToppingsInputObjectSchema),
    ]),
  })
  .strict();

export const PizzaCreateOrConnectWithoutToppingsInputObjectSchema = Schema;
