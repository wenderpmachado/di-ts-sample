import 'reflect-metadata';
import { container } from 'tsyringe';
import UserRepository from './users.repository';
import UserService from './users.service';


container.register('IUsersService', {
  useClass: UserService
});

container.register('IUsersRepository', {
  useClass: UserRepository
});

// const userService = container.resolve(Client);
