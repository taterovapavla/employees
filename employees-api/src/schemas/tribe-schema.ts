import { Static, Type } from "@sinclair/typebox";

export const tribeBodySchema = Type.Object({
  name: Type.String(),
  department: Type.String(),
});

export const idParamsSchema = Type.Object({
  id: Type.Integer(),
});

export type TribeBodyType = Static<typeof tribeBodySchema>;
export type IdParamsType = Static<typeof idParamsSchema>;
