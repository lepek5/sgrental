import { DataTypes } from "sequelize"
module.exports = {
  up: async ({context: queryInterface}) => {
    await queryInterface.createTable("customers", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
      date_of_birth: {
        type: DataTypes.STRING
      }
    })
  },
  down: async ({context: queryInterface}) => {
    await queryInterface.dropTable("customers");
  }
}