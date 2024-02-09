import { z } from "zod";
import { UserCreateWithoutToppingInputObjectSchema } from "./UserCreateWithoutToppingInput.schema";
import { UserUncheckedCreateWithoutToppingInputObjectSchema } from "./UserUncheckedCreateWithoutToppingInput.schema";
import { UserCreateOrConnectWithoutToppingInputObjectSchema } from "./UserCreateOrConnectWithoutToppingInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutToppingInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutToppingInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutToppingInputObjectSchema)
      .optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutToppingInputObjectSchema = Schema;
