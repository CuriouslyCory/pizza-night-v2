import { z } from "zod";
import { VoteCreateWithoutUserInputObjectSchema } from "./VoteCreateWithoutUserInput.schema";
import { VoteUncheckedCreateWithoutUserInputObjectSchema } from "./VoteUncheckedCreateWithoutUserInput.schema";
import { VoteCreateOrConnectWithoutUserInputObjectSchema } from "./VoteCreateOrConnectWithoutUserInput.schema";
import { VoteUpsertWithWhereUniqueWithoutUserInputObjectSchema } from "./VoteUpsertWithWhereUniqueWithoutUserInput.schema";
import { VoteCreateManyUserInputEnvelopeObjectSchema } from "./VoteCreateManyUserInputEnvelope.schema";
import { VoteWhereUniqueInputObjectSchema } from "./VoteWhereUniqueInput.schema";
import { VoteUpdateWithWhereUniqueWithoutUserInputObjectSchema } from "./VoteUpdateWithWhereUniqueWithoutUserInput.schema";
import { VoteUpdateManyWithWhereWithoutUserInputObjectSchema } from "./VoteUpdateManyWithWhereWithoutUserInput.schema";
import { VoteScalarWhereInputObjectSchema } from "./VoteScalarWhereInput.schema";

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
    upsert: z
      .union([
        z.lazy(() => VoteUpsertWithWhereUniqueWithoutUserInputObjectSchema),
        z
          .lazy(() => VoteUpsertWithWhereUniqueWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => VoteCreateManyUserInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => VoteWhereUniqueInputObjectSchema),
        z.lazy(() => VoteWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => VoteWhereUniqueInputObjectSchema),
        z.lazy(() => VoteWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => VoteWhereUniqueInputObjectSchema),
        z.lazy(() => VoteWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => VoteWhereUniqueInputObjectSchema),
        z.lazy(() => VoteWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => VoteUpdateWithWhereUniqueWithoutUserInputObjectSchema),
        z
          .lazy(() => VoteUpdateWithWhereUniqueWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => VoteUpdateManyWithWhereWithoutUserInputObjectSchema),
        z
          .lazy(() => VoteUpdateManyWithWhereWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => VoteScalarWhereInputObjectSchema),
        z.lazy(() => VoteScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const VoteUpdateManyWithoutUserNestedInputObjectSchema = Schema;
