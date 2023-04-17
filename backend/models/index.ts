import Category from "./category";
import Customer from "./customer";
import Product from "./product";
import ProductDetail from "./productDetail";
import User from "./user";

Product.belongsToMany(Category, {
  through: ProductDetail
})
Category.belongsToMany(Product, {
  through: ProductDetail
})

export { Product, Category, ProductDetail };