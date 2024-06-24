import { FastifyInstance, RouteOptions } from "fastify";
import * as tribesModel from "../models/tribes-model";
import { IdParamsType } from "../schemas/tribe-schema";

export default function (fastify: FastifyInstance): RouteOptions {
  return {
    method: "GET",
    url: "/api/tribes",
    handler: async (request, reply) => {
      const params = request.params as IdParamsType;

      const tribes = await tribesModel.getTribes(fastify);
      reply.code(200).send(tribes);
    },
  };
}
