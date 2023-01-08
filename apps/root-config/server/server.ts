// Require the framework and instantiate it
import Fastify from "fastify";

const fastify = Fastify({ logger: true });

// Declare a route
fastify.get("/api", async (request, reply) => {
  return { hello: "world 7000" };
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
