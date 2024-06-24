import { FastifyInstance, RouteOptions } from "fastify";
import * as employeesModel from "../models/employees-model";
import { searchQuerySchema, searchQueryType } from "../schemas/employee-schema";

export default function (fastify: FastifyInstance): RouteOptions {
  return {
    method: "GET",
    url: "/api/employees",
    schema: {
      querystring: searchQuerySchema,
    },
    handler: async (request, reply) => {
      const searchQuery = request.query as searchQueryType;

      const employees = await employeesModel.getEmployees(fastify, searchQuery);
      if (!employees) reply.code(404).send("Employees not found");
      reply.code(200).send(employees);
    },
  };
}
