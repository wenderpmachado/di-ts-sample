export interface IUser {
  id?: number;
  name?: string;
}

export default class UserModel implements IUser {
  constructor(public id?: number, public name?: string) {}
}
