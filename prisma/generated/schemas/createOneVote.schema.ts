import { z } from "zod";
import { VoteCreateInputObjectSchema } from "./objects/VoteCreateInput.schema";
import { VoteUncheckedCreateInputObjectSchema } from "./objects/VoteUncheckedCreateInput.schema";

export const VoteCreateOneSchema = z.object({
  data: z.union([
    VoteCreateInputObjectSchema,
    VoteUncheckedCreateInputObjectSchema,
  ]),
});
