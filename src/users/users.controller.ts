import { inject, injectable } from 'tsyringe';
import { IUsersService } from './users.service'
import { IUser, ICreateUser } from './user.model';

export interface IUserController {
  // create(user: ICreateUser): IUser;
  // create(user: IUser): IUser;
  // getAll(): IUser[];
}

@injectable()
export default class UsersController {
  constructor(@inject('IUsersService') private usersService: IUsersService) {}

  // create(user: ICreateUser) {
  //   this.usersService.create();
  // }

  // update(user: IUser) {
  //   user.id
  // }

  // getAll() {
  //   return this.usersService.getAll();
  // }
}
