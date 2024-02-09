import { z } from "zod";
import { UserCreateWithoutProposalParticipantInputObjectSchema } from "./UserCreateWithoutProposalParticipantInput.schema";
import { UserUncheckedCreateWithoutProposalParticipantInputObjectSchema } from "./UserUncheckedCreateWithoutProposalParticipantInput.schema";
import { UserCreateOrConnectWithoutProposalParticipantInputObjectSchema } from "./UserCreateOrConnectWithoutProposalParticipantInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";

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
    connect: z
      .union([
        z.lazy(() => UserWhereUniqueInputObjectSchema),
        z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const UserCreateNestedManyWithoutProposalParticipantInputObjectSchema =
  Schema;
