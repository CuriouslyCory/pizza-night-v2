import { z } from "zod";
import { UserUpdateWithoutPizzaInputObjectSchema } from "./UserUpdateWithoutPizzaInput.schema";
import { UserUncheckedUpdateWithoutPizzaInputObjectSchema } from "./UserUncheckedUpdateWithoutPizzaInput.schema";
import { UserCreateWithoutPizzaInputObjectSchema } from "./UserCreateWithoutPizzaInput.schema";
import { UserUncheckedCreateWithoutPizzaInputObjectSchema } from "./UserUncheckedCreateWithoutPizzaInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutPizzaInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutPizzaInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutPizzaInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutPizzaInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutPizzaInputObjectSchema = Schema;
