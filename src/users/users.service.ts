import { injectable, inject } from 'tsyringe';
import { IUsersRepository } from './users.repository'
import { IUser } from './user.model';

export interface IUsersService {
  getAll(): IUser[];
}

@injectable()
export default class UsersService implements IUsersService {
  constructor(@inject('IUsersRepository') private usersRepository: IUsersRepository) {}

  getAll() {
    return this.usersRepository.getAll();
  }
}
