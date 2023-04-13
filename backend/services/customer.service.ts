import Database from "../database";
import sql from "../utils/sql";
const TABLE = "customers";
const customerService = {
  getAll: async () => {
    var conn;
    try {
      conn = await Database.getConnection();
      const result = await conn.query(sql.getAllFromTable(TABLE));
      return result;
    } catch (err) {
      throw err;
    }
  },
  createCustomer: async (payload: any) => {
    const { query, values } = sql.parseForInsert(TABLE, payload);
    var conn;
    try {
      conn = await sql.getConnection();
      const result = await conn.query(query, values);
      console.log("Query", result)
    } catch (err: unknown) {
      throw err;
    } finally {
      if (conn) conn.release();
    }
  },
  getCustomerById: async () => {

  }
}