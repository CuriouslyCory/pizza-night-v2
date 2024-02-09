import { z } from "zod";
import { ToppingUpdateManyMutationInputObjectSchema } from "./objects/ToppingUpdateManyMutationInput.schema";
import { ToppingWhereInputObjectSchema } from "./objects/ToppingWhereInput.schema";

export const ToppingUpdateManySchema = z.object({
  data: ToppingUpdateManyMutationInputObjectSchema,
  where: ToppingWhereInputObjectSchema.optional(),
});
