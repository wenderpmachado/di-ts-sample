import { inject, injectable } from 'tsyringe';
import { IUser } from './user.model';
import { IUsersService } from './users.service';

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
