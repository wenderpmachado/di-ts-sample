import { IUsersService } from './users.service'
import { IUser } from './user.model';

export interface IUserController {
  getAll(): IUser[];
}

export default class UsersController {
  constructor(private usersService: IUsersService) {}

  getAll() {
    return this.usersService.getAll();
  }
}
