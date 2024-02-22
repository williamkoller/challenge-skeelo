import AddUserUseCase from '../../usecases/user/add-user/add-user-usecase.js';

export default class UserController {
  async create(req, reply) {
    const { name, surname } = req.body;

    const userProps = {
      name,
      surname,
    };

    const addUserUseCase = new AddUserUseCase();

    const userCreated = addUserUseCase.create(userProps);

    return reply.code(201).send(userCreated);
  }
}
