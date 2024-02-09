import { z } from "zod";
import { UserCreateWithoutVoteInputObjectSchema } from "./UserCreateWithoutVoteInput.schema";
import { UserUncheckedCreateWithoutVoteInputObjectSchema } from "./UserUncheckedCreateWithoutVoteInput.schema";
import { UserCreateOrConnectWithoutVoteInputObjectSchema } from "./UserCreateOrConnectWithoutVoteInput.schema";
import { UserUpsertWithoutVoteInputObjectSchema } from "./UserUpsertWithoutVoteInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserUpdateWithoutVoteInputObjectSchema } from "./UserUpdateWithoutVoteInput.schema";
import { UserUncheckedUpdateWithoutVoteInputObjectSchema } from "./UserUncheckedUpdateWithoutVoteInput.schema";

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
    upsert: z.lazy(() => UserUpsertWithoutVoteInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutVoteInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutVoteInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const UserUpdateOneRequiredWithoutVoteNestedInputObjectSchema = Schema;
