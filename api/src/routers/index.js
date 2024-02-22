import UserController from '../controllers/user/user-controller.js';

const userController = new UserController();

const routers = async (fastify) => {
  fastify.post('/users', async (request, reply) => {
    return await userController.create(request, reply);
  });
};

export default routers;
