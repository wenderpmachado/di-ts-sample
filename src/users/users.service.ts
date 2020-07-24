import { IUsersRepository } from './users.repository'
import { IUser } from './user.model';

export interface IUsersService {
  getAll(): IUser[];
}

export default class UsersService implements IUsersService {
  constructor(private usersRepository: IUsersRepository) {}

  getAll() {
    return this.usersRepository.getAll();
  }
}
