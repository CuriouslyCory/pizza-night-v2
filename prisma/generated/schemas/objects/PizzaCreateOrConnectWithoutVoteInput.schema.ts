import { z } from "zod";
import { PizzaWhereUniqueInputObjectSchema } from "./PizzaWhereUniqueInput.schema";
import { PizzaCreateWithoutVoteInputObjectSchema } from "./PizzaCreateWithoutVoteInput.schema";
import { PizzaUncheckedCreateWithoutVoteInputObjectSchema } from "./PizzaUncheckedCreateWithoutVoteInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    where: z.lazy(() => PizzaWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PizzaCreateWithoutVoteInputObjectSchema),
      z.lazy(() => PizzaUncheckedCreateWithoutVoteInputObjectSchema),
    ]),
  })
  .strict();

export const PizzaCreateOrConnectWithoutVoteInputObjectSchema = Schema;
