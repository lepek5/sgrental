import { Model, DataTypes } from "sequelize"
import Database from "../database";
class Customer extends Model {}
Customer.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING
  },
  address: {
    type: DataTypes.STRING
  },
  phone: {
    type: DataTypes.STRING
  },
  dateOfBirth: {
    type: DataTypes.STRING
  }
},{
  sequelize: Database.sequelize,
  underscored: true,
  timestamps: true,
  modelName: "customer"
});

export default Customer;