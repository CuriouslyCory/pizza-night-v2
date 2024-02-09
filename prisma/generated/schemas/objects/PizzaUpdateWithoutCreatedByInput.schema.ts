import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema";
import { ToppingUpdateManyWithoutPizzaNestedInputObjectSchema } from "./ToppingUpdateManyWithoutPizzaNestedInput.schema";
import { VoteUpdateManyWithoutPizzaNestedInputObjectSchema } from "./VoteUpdateManyWithoutPizzaNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    toppings: z
      .lazy(() => ToppingUpdateManyWithoutPizzaNestedInputObjectSchema)
      .optional(),
    Vote: z
      .lazy(() => VoteUpdateManyWithoutPizzaNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const PizzaUpdateWithoutCreatedByInputObjectSchema = Schema;
