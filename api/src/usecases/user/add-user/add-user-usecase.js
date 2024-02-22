import UserModel from '../../../domain/models/user/user-model.js';

class AddUserUseCase {
  create(userProps) {
    return UserModel.create(userProps);
  }
}

export default AddUserUseCase;
