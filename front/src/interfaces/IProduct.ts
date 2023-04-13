export interface IProduct {
  id?: number
  title: string,
  description?: string,
  price: number
}
export interface IProductDB extends Omit<IProduct, "tags"> {
  tags?: string
}