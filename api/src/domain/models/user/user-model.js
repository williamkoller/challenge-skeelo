import { randomUUID } from 'node:crypto';

class User {
  constructor(props, id) {
    this.id = id || randomUUID();
    this.props = {
      ...props,
    };
  }

  static create(props, id) {
    return new User(props, id);
  }

  toJSON() {
    return {
      id: this.id,
      ...this.props,
    };
  }
}

export default User;
