import UserController from '../../src/users/users.controller'
import UsersService from '../../src/users/users.service';
import UsersRepository from '../../src/users/users.repository';
import usersData from '../../src/users/users.json';

describe('UserController', () => {
  const repository = new UsersRepository();
  const service = new UsersService(repository);
  const controller = new UserController(service);

  describe('getAll', () => {
    it('should get all users', async () => {
      const result = await controller.getAll();
      expect(result).toEqual(usersData);
    })
  })
})
