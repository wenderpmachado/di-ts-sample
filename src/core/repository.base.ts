export interface IRepository<T, U, V, W> {
  create(data: U): Promise<T>
  updateById(id: W, data: U): Promise<T>
  save(user: T): Promise<T>
  findAll(data: V): Promise<T[]>
  findById(id: string): Promise<T | undefined>
}
