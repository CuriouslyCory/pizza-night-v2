import { z } from 'zod';

export const VoteScalarFieldEnumSchema = z.enum(["id","userId","proposalId","pizzaId"])