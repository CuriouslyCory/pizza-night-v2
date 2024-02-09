import { z } from "zod";
import { UserCreateWithoutProposalParticipantInputObjectSchema } from "./UserCreateWithoutProposalParticipantInput.schema";
import { UserUncheckedCreateWithoutProposalParticipantInputObjectSchema } from "./UserUncheckedCreateWithoutProposalParticipantInput.schema";
import { UserCreateOrConnectWithoutProposalParticipantInputObjectSchema } from "./UserCreateOrConnectWithoutProposalParticipantInput.schema";
import { UserUpsertWithWhereUniqueWithoutProposalParticipantInputObjectSchema } from "./UserUpsertWithWhereUniqueWithoutProposalParticipantInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserUpdateWithWhereUniqueWithoutProposalParticipantInputObjectSchema } from "./UserUpdateWithWhereUniqueWithoutProposalParticipantInput.schema";
import { UserUpdateManyWithWhereWithoutProposalParticipantInputObjectSchema } from "./UserUpdateManyWithWhereWithoutProposalParticipantInput.schema";
import { UserScalarWhereInputObjectSchema } from "./UserScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutProposalParticipantInputObjectSchema),
        z
          .lazy(() => UserCreateWithoutProposalParticipantInputObjectSchema)
          .array(),
        z.lazy(
          () => UserUncheckedCreateWithoutProposalParticipantInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              UserUncheckedCreateWithoutProposalParticipantInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(
          () => UserCreateOrConnectWithoutProposalParticipantInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              UserCreateOrConnectWithoutProposalParticipantInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () =>
            UserUpsertWithWhereUniqueWithoutProposalParticipantInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              UserUpsertWithWhereUniqueWithoutProposalParticipantInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => UserWhereUniqueInputObjectSchema),
        z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => UserWhereUniqueInputObjectSchema),
        z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => UserWhereUniqueInputObjectSchema),
        z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => UserWhereUniqueInputObjectSchema),
        z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () =>
            UserUpdateWithWhereUniqueWithoutProposalParticipantInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              UserUpdateWithWhereUniqueWithoutProposalParticipantInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () =>
            UserUpdateManyWithWhereWithoutProposalParticipantInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              UserUpdateManyWithWhereWithoutProposalParticipantInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => UserScalarWhereInputObjectSchema),
        z.lazy(() => UserScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const UserUpdateManyWithoutProposalParticipantNestedInputObjectSchema =
  Schema;
