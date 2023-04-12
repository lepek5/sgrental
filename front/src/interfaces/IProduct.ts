export interface IProductUI {
  id?: number
  title: string,
  description?: string,
  tags?: string[],
  price: number
}
export interface IProductDB extends Omit<IProductUI, "tags"> {
  tags?: string
}