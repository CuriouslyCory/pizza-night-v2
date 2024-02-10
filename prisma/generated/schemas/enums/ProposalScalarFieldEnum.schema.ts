import { z } from 'zod';

export const ProposalScalarFieldEnumSchema = z.enum(["id","name","createdById","createdAt","expiresAt"])