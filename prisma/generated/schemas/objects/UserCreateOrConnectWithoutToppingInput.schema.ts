import { z } from "zod";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserCreateWithoutToppingInputObjectSchema } from "./UserCreateWithoutToppingInput.schema";
import { UserUncheckedCreateWithoutToppingInputObjectSchema } from "./UserUncheckedCreateWithoutToppingInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutToppingInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutToppingInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutToppingInputObjectSchema = Schema;
