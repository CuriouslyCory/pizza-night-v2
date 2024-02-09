import { z } from "zod";
import { UserCreateWithoutPizzaInputObjectSchema } from "./UserCreateWithoutPizzaInput.schema";
import { UserUncheckedCreateWithoutPizzaInputObjectSchema } from "./UserUncheckedCreateWithoutPizzaInput.schema";
import { UserCreateOrConnectWithoutPizzaInputObjectSchema } from "./UserCreateOrConnectWithoutPizzaInput.schema";
import { UserUpsertWithoutPizzaInputObjectSchema } from "./UserUpsertWithoutPizzaInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserUpdateWithoutPizzaInputObjectSchema } from "./UserUpdateWithoutPizzaInput.schema";
import { UserUncheckedUpdateWithoutPizzaInputObjectSchema } from "./UserUncheckedUpdateWithoutPizzaInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutPizzaInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutPizzaInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutPizzaInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => UserUpsertWithoutPizzaInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutPizzaInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutPizzaInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const UserUpdateOneRequiredWithoutPizzaNestedInputObjectSchema = Schema;
