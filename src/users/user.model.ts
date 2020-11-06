export interface IUser {
  id?: number;
  name?: string;
}

export type ICreateUser = Omit<IUser, 'id'>;

// export default class UserModel implements IUser {
//   constructor(public id?: number, public name?: string) {}
// }
