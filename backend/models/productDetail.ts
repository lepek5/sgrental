import { Model, DataTypes } from "sequelize"
import Database from "../database";
class ProductDetail extends Model {}
ProductDetail.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  productId: {
    type: DataTypes.INTEGER,
    references: {
      model: "products",
      key: "id"
    }
  },
  categoryId: {
    type: DataTypes.INTEGER,
    references: {
      model: "categories",
      key: "id"
    }
  }
},{
  sequelize: Database.sequelize,
  underscored: true,
  timestamps: false,
  modelName: "productDetail"
});

export default ProductDetail;