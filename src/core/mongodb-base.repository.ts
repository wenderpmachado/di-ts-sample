// export interface IRepository<T, U, V> {
//   create(data: U): Promise<T>
//   save(user: T): Promise<T>
//   findAll(data: V): Promise<T[]>
//   findById(id: string): Promise<T | undefined>
// }

// export interface IDB<T, U> {
//   save(data: U): Promise<T>
// }

// export class MongoDBBaseRepository<T, U, V> implements IRepository<T, U, V> {
//   constructor(private db: IDB<T, U>) {}

//   create(data: U): Promise<T> {
//     return this.db.save(data);
//   }

//   save(user: T): Promise<T> {
//   }

//   findAll(data: V): Promise<T[]> {
//   }

//   findById(id: string): Promise<T | undefined> {
//     const objectId = ObjectId(id);
//     return this.db.findById(id);
//   }
// }
