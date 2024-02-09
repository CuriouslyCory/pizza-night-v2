import { z } from "zod";
import { UserUpdateWithoutToppingInputObjectSchema } from "./UserUpdateWithoutToppingInput.schema";
import { UserUncheckedUpdateWithoutToppingInputObjectSchema } from "./UserUncheckedUpdateWithoutToppingInput.schema";
import { UserCreateWithoutToppingInputObjectSchema } from "./UserCreateWithoutToppingInput.schema";
import { UserUncheckedCreateWithoutToppingInputObjectSchema } from "./UserUncheckedCreateWithoutToppingInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutToppingInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutToppingInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutToppingInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutToppingInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutToppingInputObjectSchema = Schema;
