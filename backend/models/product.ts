import { Model, DataTypes } from "sequelize"
import Database from "../database";
import Category from "./category";
import ProductDetail from "./productDetail";
class Product extends Model {}
Product.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.BIGINT
  }
},{
  sequelize: Database.sequelize,
  underscored: true,
  timestamps: false,
  modelName: "product"
});

export default Product;