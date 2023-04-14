import { QueryInterface, DataTypes, Sequelize } from "sequelize"

module.exports = {
  up: async ({context: queryInterface}) => {
    await queryInterface.createTable('users', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      password: {
        type: DataTypes.STRING
      },
    })
    await queryInterface.createTable('products', {
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
      },
    })
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
    await queryInterface.createTable("employees", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING
      },
      phone: {
        type: DataTypes.STRING
      }
    })
    await queryInterface.createTable("categories", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      category: {
        type: DataTypes.STRING
      }
    })
    await queryInterface.createTable("reservations", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      start_at: {
        type: DataTypes.STRING
      },
      end_at: {
        type: DataTypes.STRING
      },
      confirmed: {
        type: DataTypes.BOOLEAN
      },
      completed: {
        type: DataTypes.BOOLEAN
      }
    })
    await queryInterface.createTable("product_details", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      }
    })
    await queryInterface.addColumn('employees', 'user_id', {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'users', key: 'id' },
    })
    await queryInterface.addColumn("customers", "user_id", {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "users", key: "id" }
    })
    await queryInterface.addColumn("reservations", "product_id", {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "products", key: "id" }
    })
    await queryInterface.addColumn("reservations", "customer_id", {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "customers", key: "id" }
    })
    await queryInterface.addColumn("reservations", "employee_id", {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "employees", key: "id" }
    })
    await queryInterface.addColumn("product_details", "product_id", {
      type: DataTypes.INTEGER,
      references: {model: "products", key: "id"}
    })
    await queryInterface.addColumn("product_details", "category_id", {
      type: DataTypes.INTEGER,
      references: { model: "categories", key: "id"}
    })
  },
  down: async ({context: queryInterface}) => {
  },
}