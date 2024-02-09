import { z } from "zod";
import { VoteWhereUniqueInputObjectSchema } from "./objects/VoteWhereUniqueInput.schema";

export const VoteDeleteOneSchema = z.object({
  where: VoteWhereUniqueInputObjectSchema,
});
