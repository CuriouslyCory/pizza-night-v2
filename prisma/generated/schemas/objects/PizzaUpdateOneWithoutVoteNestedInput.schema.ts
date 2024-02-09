import { z } from "zod";
import { PizzaCreateWithoutVoteInputObjectSchema } from "./PizzaCreateWithoutVoteInput.schema";
import { PizzaUncheckedCreateWithoutVoteInputObjectSchema } from "./PizzaUncheckedCreateWithoutVoteInput.schema";
import { PizzaCreateOrConnectWithoutVoteInputObjectSchema } from "./PizzaCreateOrConnectWithoutVoteInput.schema";
import { PizzaUpsertWithoutVoteInputObjectSchema } from "./PizzaUpsertWithoutVoteInput.schema";
import { PizzaWhereUniqueInputObjectSchema } from "./PizzaWhereUniqueInput.schema";
import { PizzaUpdateWithoutVoteInputObjectSchema } from "./PizzaUpdateWithoutVoteInput.schema";
import { PizzaUncheckedUpdateWithoutVoteInputObjectSchema } from "./PizzaUncheckedUpdateWithoutVoteInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    create: z
      .union([
        z.lazy(() => PizzaCreateWithoutVoteInputObjectSchema),
        z.lazy(() => PizzaUncheckedCreateWithoutVoteInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => PizzaCreateOrConnectWithoutVoteInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => PizzaUpsertWithoutVoteInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => PizzaWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => PizzaUpdateWithoutVoteInputObjectSchema),
        z.lazy(() => PizzaUncheckedUpdateWithoutVoteInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const PizzaUpdateOneWithoutVoteNestedInputObjectSchema = Schema;
