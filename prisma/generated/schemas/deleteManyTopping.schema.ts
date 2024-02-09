import { z } from "zod";
import { ToppingWhereInputObjectSchema } from "./objects/ToppingWhereInput.schema";

export const ToppingDeleteManySchema = z.object({
  where: ToppingWhereInputObjectSchema.optional(),
});
