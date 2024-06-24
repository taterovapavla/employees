import Fastify from "fastify";
import knexPlugin from "./plugins/knex-plugin";
import routes from "./routes";
import redisPlugin from "./plugins/redis-plugin";

const fastify = Fastify();

fastify.register(routes);
fastify.register(knexPlugin);
fastify.register(redisPlugin);

async function main() {
  try {
    await fastify.listen({ port: 3000, host: "0.0.0.0" });
    console.log("server is running ✅");
  } catch (e) {
    console.log("error 🫡");
    console.log((e as Error).message);
  }
}

main();
