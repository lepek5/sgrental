export type ProductDB = {
  id: number,
  title: string,
  description: string,
  tags: string,
  price: number
};
export type ProductUI = Omit<ProductDB, "tags"> & {
  tags: ProductTags
};
type ProductTags = {
  tags: string[]
}