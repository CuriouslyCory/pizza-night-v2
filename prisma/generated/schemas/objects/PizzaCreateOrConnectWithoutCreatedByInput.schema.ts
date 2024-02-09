import { z } from "zod";
import { PizzaWhereUniqueInputObjectSchema } from "./PizzaWhereUniqueInput.schema";
import { PizzaCreateWithoutCreatedByInputObjectSchema } from "./PizzaCreateWithoutCreatedByInput.schema";
import { PizzaUncheckedCreateWithoutCreatedByInputObjectSchema } from "./PizzaUncheckedCreateWithoutCreatedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    where: z.lazy(() => PizzaWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PizzaCreateWithoutCreatedByInputObjectSchema),
      z.lazy(() => PizzaUncheckedCreateWithoutCreatedByInputObjectSchema),
    ]),
  })
  .strict();

export const PizzaCreateOrConnectWithoutCreatedByInputObjectSchema = Schema;
