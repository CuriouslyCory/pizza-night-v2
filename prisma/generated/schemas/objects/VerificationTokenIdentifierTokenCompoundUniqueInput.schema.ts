import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    identifier: z.string(),
    token: z.string(),
  })
  .strict();

export const VerificationTokenIdentifierTokenCompoundUniqueInputObjectSchema =
  Schema;
