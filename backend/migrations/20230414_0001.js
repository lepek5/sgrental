import { QueryInterface, DataTypes, Sequelize } from "sequelize"

module.exports = {
  up: async ({context: queryInterface}) => {},
  down: async ({context: queryInterface}) => {
    await queryInterface.dropTable("customers");
  },
}