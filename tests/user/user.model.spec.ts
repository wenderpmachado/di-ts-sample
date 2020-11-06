import UserModel from '../../src/users/user.model'

describe('UserModel', () => {
  it('should create a new object', () => {
    const user = new UserModel();
    expect(user).not.toBe(null);
  })
})
