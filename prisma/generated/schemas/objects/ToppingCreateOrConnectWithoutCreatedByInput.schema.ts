import { z } from "zod";
import { ToppingWhereUniqueInputObjectSchema } from "./ToppingWhereUniqueInput.schema";
import { ToppingCreateWithoutCreatedByInputObjectSchema } from "./ToppingCreateWithoutCreatedByInput.schema";
import { ToppingUncheckedCreateWithoutCreatedByInputObjectSchema } from "./ToppingUncheckedCreateWithoutCreatedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    where: z.lazy(() => ToppingWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ToppingCreateWithoutCreatedByInputObjectSchema),
      z.lazy(() => ToppingUncheckedCreateWithoutCreatedByInputObjectSchema),
    ]),
  })
  .strict();

export const ToppingCreateOrConnectWithoutCreatedByInputObjectSchema = Schema;
