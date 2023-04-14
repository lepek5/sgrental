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
    type: DataTypes.INTEGER
  },
  categoryId: {
    type: DataTypes.INTEGER
  }
},{
  sequelize: Database.sequelize,
  underscored: true,
  timestamps: false,
  modelName: "productDetail"
});

export default ProductDetail;