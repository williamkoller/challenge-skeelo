import UserModel from './user-model.js';

describe('UserModel Unit Test', () => {
  it('should hould be constructor()', () => {
    const userProps = {
      name: 'any_name',
      surname: 'any_surname',
    };

    const user = UserModel.create(userProps);
    expect(user.props).toEqual({
      ...userProps,
    });
  });

  it('should be toJSON() method', () => {
    const userProps = {
      name: 'any_name',
      surname: 'any_surname',
    };

    const user = UserModel.create(userProps);
    user.toJSON();
    expect(user.toJSON()).toStrictEqual({
      id: user.id,
      name: 'any_name',
      surname: 'any_surname',
    });
  });
});
