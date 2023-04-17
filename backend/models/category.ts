import { Model, DataTypes } from "sequelize"
import Database from "../database";
import ProductDetail from "./productDetail";
import Product from "./product";
class Category extends Model {}
Category.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  category: {
    type: DataTypes.STRING
  }
},{
  sequelize: Database.sequelize,
  underscored: true,
  timestamps: false,
  modelName: "category"
});
export default Category;