import { z } from "zod";
import { UserCreateWithoutVoteInputObjectSchema } from "./UserCreateWithoutVoteInput.schema";
import { UserUncheckedCreateWithoutVoteInputObjectSchema } from "./UserUncheckedCreateWithoutVoteInput.schema";
import { UserCreateOrConnectWithoutVoteInputObjectSchema } from "./UserCreateOrConnectWithoutVoteInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutVoteInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutVoteInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutVoteInputObjectSchema)
      .optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutVoteInputObjectSchema = Schema;
