import Category from "./category";
import Customer from "./customer";
import Product from "./product";
import ProductDetail from "./productDetail";
import Reservation from "./reservation";
import User from "./user";

Customer.belongsTo(User)
User.hasOne(Customer, {
  foreignKey: "userId"
})
Product.belongsToMany(Category, {
  through: ProductDetail
})
Category.belongsToMany(Product, {
  through: ProductDetail
})
Reservation.hasOne(Product, {
  foreignKey: "id"
});
Reservation.hasOne(Customer, {
  foreignKey: "id"
});
Product.belongsTo(Reservation, {  foreignKey: "id"});
Customer.belongsTo(Reservation, {  foreignKey: "id"});

export { Product, Category, ProductDetail };