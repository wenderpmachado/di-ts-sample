import 'reflect-metadata';

import { container } from 'tsyringe';
import UserService from './users.service';
import UserRepository from './users.repository';

container.register('IUsersService', {
  useClass: UserService
});

container.register('IUsersRepository', {
  useClass: UserRepository
});

// const userService = container.resolve(Client);
