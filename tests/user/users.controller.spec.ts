import { container } from 'tsyringe';
import '../../src/users/user.ioc';
import UserController from '../../src/users/users.controller';
import usersData from '../../src/users/users.json';


describe('UserController', () => {
  describe('getAll', () => {
    it('should get all users', async () => {
      const controller = container.resolve(UserController);
      const result = await controller.getAll();
      expect(result).toEqual(usersData);
    })
  })
})
