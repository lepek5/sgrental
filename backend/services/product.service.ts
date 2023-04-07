import { PoolConnection } from "mariadb";
import Database from "../database";
import { ProductDB } from "../types/product.types";
const ReleaseConnection = (conn: PoolConnection | undefined) => {
  if (conn) conn.release();
}
const ProductService = {
  getAll: async () => {
    var conn;
    const sql = "SELECT * FROM products";
    try {
      conn = await Database.getConnection();
      const result = await conn.query(sql);
      return result;
    } catch (error: unknown) {
      return error;
    } finally {
      ReleaseConnection(conn);
    }
  },
  get: () => { return "plaaplaa" },
  getById: async (id: number): Promise<ProductDB | any> => {
    var connection;
    const sql = "SELECT * FROM products WHERE id = " + id;
    console.log(sql)
    try {
      connection = await Database.getConnection();
      const result = await connection.query(sql);
      return result;
    } catch (error: unknown) {
      return error;
    } finally {
      ReleaseConnection(connection);
    }
  }
};
export default ProductService;