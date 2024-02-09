import { z } from "zod";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserCreateWithoutPizzaInputObjectSchema } from "./UserCreateWithoutPizzaInput.schema";
import { UserUncheckedCreateWithoutPizzaInputObjectSchema } from "./UserUncheckedCreateWithoutPizzaInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutPizzaInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutPizzaInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutPizzaInputObjectSchema = Schema;
