import { z } from "zod";
import { ToppingWhereUniqueInputObjectSchema } from "./ToppingWhereUniqueInput.schema";
import { ToppingCreateWithoutPizzaInputObjectSchema } from "./ToppingCreateWithoutPizzaInput.schema";
import { ToppingUncheckedCreateWithoutPizzaInputObjectSchema } from "./ToppingUncheckedCreateWithoutPizzaInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    where: z.lazy(() => ToppingWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ToppingCreateWithoutPizzaInputObjectSchema),
      z.lazy(() => ToppingUncheckedCreateWithoutPizzaInputObjectSchema),
    ]),
  })
  .strict();

export const ToppingCreateOrConnectWithoutPizzaInputObjectSchema = Schema;
