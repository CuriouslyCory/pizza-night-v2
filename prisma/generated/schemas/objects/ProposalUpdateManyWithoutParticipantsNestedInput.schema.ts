import { z } from "zod";
import { ProposalCreateWithoutParticipantsInputObjectSchema } from "./ProposalCreateWithoutParticipantsInput.schema";
import { ProposalUncheckedCreateWithoutParticipantsInputObjectSchema } from "./ProposalUncheckedCreateWithoutParticipantsInput.schema";
import { ProposalCreateOrConnectWithoutParticipantsInputObjectSchema } from "./ProposalCreateOrConnectWithoutParticipantsInput.schema";
import { ProposalUpsertWithWhereUniqueWithoutParticipantsInputObjectSchema } from "./ProposalUpsertWithWhereUniqueWithoutParticipantsInput.schema";
import { ProposalWhereUniqueInputObjectSchema } from "./ProposalWhereUniqueInput.schema";
import { ProposalUpdateWithWhereUniqueWithoutParticipantsInputObjectSchema } from "./ProposalUpdateWithWhereUniqueWithoutParticipantsInput.schema";
import { ProposalUpdateManyWithWhereWithoutParticipantsInputObjectSchema } from "./ProposalUpdateManyWithWhereWithoutParticipantsInput.schema";
import { ProposalScalarWhereInputObjectSchema } from "./ProposalScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    create: z
      .union([
        z.lazy(() => ProposalCreateWithoutParticipantsInputObjectSchema),
        z
          .lazy(() => ProposalCreateWithoutParticipantsInputObjectSchema)
          .array(),
        z.lazy(
          () => ProposalUncheckedCreateWithoutParticipantsInputObjectSchema,
        ),
        z
          .lazy(
            () => ProposalUncheckedCreateWithoutParticipantsInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(
          () => ProposalCreateOrConnectWithoutParticipantsInputObjectSchema,
        ),
        z
          .lazy(
            () => ProposalCreateOrConnectWithoutParticipantsInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () =>
            ProposalUpsertWithWhereUniqueWithoutParticipantsInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              ProposalUpsertWithWhereUniqueWithoutParticipantsInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => ProposalWhereUniqueInputObjectSchema),
        z.lazy(() => ProposalWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ProposalWhereUniqueInputObjectSchema),
        z.lazy(() => ProposalWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ProposalWhereUniqueInputObjectSchema),
        z.lazy(() => ProposalWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ProposalWhereUniqueInputObjectSchema),
        z.lazy(() => ProposalWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () =>
            ProposalUpdateWithWhereUniqueWithoutParticipantsInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              ProposalUpdateWithWhereUniqueWithoutParticipantsInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => ProposalUpdateManyWithWhereWithoutParticipantsInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              ProposalUpdateManyWithWhereWithoutParticipantsInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ProposalScalarWhereInputObjectSchema),
        z.lazy(() => ProposalScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ProposalUpdateManyWithoutParticipantsNestedInputObjectSchema =
  Schema;
