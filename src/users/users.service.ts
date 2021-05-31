import { inject, injectable } from 'tsyringe';
import { IUser } from './user.model';
import { IUsersRepository } from './users.repository';

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
