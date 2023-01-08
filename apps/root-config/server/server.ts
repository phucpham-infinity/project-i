// Require the framework and instantiate it
import Fastify from "fastify";
import { sum } from "@libs/curd";

const fastify = Fastify({ logger: true });

// Declare a route
fastify.get("/api", async (request, reply) => {
  const data = sum(100, 1000);
  return { hello: "world" + data };
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 5000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
