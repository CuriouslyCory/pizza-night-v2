import { z } from "zod";
import { VoteCreateWithoutUserInputObjectSchema } from "./VoteCreateWithoutUserInput.schema";
import { VoteUncheckedCreateWithoutUserInputObjectSchema } from "./VoteUncheckedCreateWithoutUserInput.schema";
import { VoteCreateOrConnectWithoutUserInputObjectSchema } from "./VoteCreateOrConnectWithoutUserInput.schema";
import { VoteCreateManyUserInputEnvelopeObjectSchema } from "./VoteCreateManyUserInputEnvelope.schema";
import { VoteWhereUniqueInputObjectSchema } from "./VoteWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    create: z
      .union([
        z.lazy(() => VoteCreateWithoutUserInputObjectSchema),
        z.lazy(() => VoteCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => VoteUncheckedCreateWithoutUserInputObjectSchema),
        z.lazy(() => VoteUncheckedCreateWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => VoteCreateOrConnectWithoutUserInputObjectSchema),
        z.lazy(() => VoteCreateOrConnectWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => VoteCreateManyUserInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => VoteWhereUniqueInputObjectSchema),
        z.lazy(() => VoteWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const VoteCreateNestedManyWithoutUserInputObjectSchema = Schema;
