import { z } from "zod";
import { VoteWhereUniqueInputObjectSchema } from "./VoteWhereUniqueInput.schema";
import { VoteUpdateWithoutUserInputObjectSchema } from "./VoteUpdateWithoutUserInput.schema";
import { VoteUncheckedUpdateWithoutUserInputObjectSchema } from "./VoteUncheckedUpdateWithoutUserInput.schema";
import { VoteCreateWithoutUserInputObjectSchema } from "./VoteCreateWithoutUserInput.schema";
import { VoteUncheckedCreateWithoutUserInputObjectSchema } from "./VoteUncheckedCreateWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    where: z.lazy(() => VoteWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => VoteUpdateWithoutUserInputObjectSchema),
      z.lazy(() => VoteUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VoteCreateWithoutUserInputObjectSchema),
      z.lazy(() => VoteUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const VoteUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
