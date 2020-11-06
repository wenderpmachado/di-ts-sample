// import { Collection, ObjectId, OptionalId } from "mongodb";
// import { IRepository } from "./repository.base";

// export class MongoDBBaseRepository<T, U extends OptionalId<T>, V, W extends string>
//        implements IRepository<T, U, V, W> {

//   constructor(private collection: Collection<T>) {}

//   async create(data: U): Promise<T> {
//     const result = await this.collection.insertOne(data);
//     return result.ops[0] as T;
//   }

//   async updateById(id: string, data: U): Promise<T> {
//     const objectId = new ObjectId(id)
//     const result = await this.collection.updateOne({ _id: objectId }, data);
//     return result.ops[0] as T;
//   }

//   async save(user: T): Promise<T> {
//   }

//   async findAll(data: V): Promise<T[]> {
//   }

//   async findById(id: string): Promise<T | undefined> {
//     const objectId = ObjectId(id);
//     return this.collection.findById(id);
//   }
// }
