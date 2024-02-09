import { z } from "zod";
import { ToppingWhereUniqueInputObjectSchema } from "./ToppingWhereUniqueInput.schema";
import { ToppingUpdateWithoutPizzaInputObjectSchema } from "./ToppingUpdateWithoutPizzaInput.schema";
import { ToppingUncheckedUpdateWithoutPizzaInputObjectSchema } from "./ToppingUncheckedUpdateWithoutPizzaInput.schema";
import { ToppingCreateWithoutPizzaInputObjectSchema } from "./ToppingCreateWithoutPizzaInput.schema";
import { ToppingUncheckedCreateWithoutPizzaInputObjectSchema } from "./ToppingUncheckedCreateWithoutPizzaInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    where: z.lazy(() => ToppingWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => ToppingUpdateWithoutPizzaInputObjectSchema),
      z.lazy(() => ToppingUncheckedUpdateWithoutPizzaInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ToppingCreateWithoutPizzaInputObjectSchema),
      z.lazy(() => ToppingUncheckedCreateWithoutPizzaInputObjectSchema),
    ]),
  })
  .strict();

export const ToppingUpsertWithWhereUniqueWithoutPizzaInputObjectSchema = Schema;
