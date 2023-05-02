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
Reservation.belongsTo(Product, {
  foreignKey: "productId"
});
Reservation.belongsTo(Customer, {
  foreignKey: "customerId"
});
Product.hasMany(Reservation, {
  foreignKey: "productId"
});
Customer.hasMany(Reservation, {  foreignKey: "customerId"});

export { Product, Category, ProductDetail };