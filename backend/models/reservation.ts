import { Model, DataTypes } from "sequelize"
import Database from "../database";
class Reservation extends Model {}
Reservation.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  productId: {
    type: DataTypes.INTEGER
  },
  customerId: {
    type: DataTypes.INTEGER
  },
  employeeId: {
    type: DataTypes.INTEGER,
    defaultValue: null
  },
  startAt: {
    type: DataTypes.STRING
  },
  endAt: {
    type: DataTypes.STRING
  },
  confirmed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
},{
  sequelize: Database.sequelize,
  underscored: true,
  timestamps: false,
  modelName: "reservation"
});

export default Reservation;