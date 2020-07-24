import { inject, injectable } from 'tsyringe';
import { IUsersService } from './users.service'
import { IUser } from './user.model';

export interface IUserController {
  getAll(): IUser[];
}

@injectable()
export default class UsersController {
  constructor(@inject('IUsersService') private usersService: IUsersService) {}

  getAll() {
    return this.usersService.getAll();
  }
}
