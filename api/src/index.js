import Fastify from 'fastify';
import routes from './routers/index.js';

const port = process.env.PORT ?? 3004;
const host = '0.0.0.0';

const fastify = Fastify({ logger: false });

fastify.register(routes);

const start = () => {
  fastify.listen({ port, host }, (err, address) => {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
    fastify.log.info(`Server is now listening on ${address}`);
  });
};

start();
