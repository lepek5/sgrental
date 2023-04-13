import { PoolConnection } from "mariadb";
import Database from "../database";
const sql = {
  getAllFromTable: (table: string): string => "SELECT * FROM " + table,
  getByIdFromTable: (table: string, id: number) => "SELECT * FROM "+ table +  " WHERE id="+id,
  getConnection: async (): Promise<PoolConnection | any> => {
    try {
      return await Database.getConnection();
    } catch (err) {
      return err;
    }
  },
  parseForInsert: (table: string, payload: any) => {
    /**
     * @param table
     * @description hölöö
     * @param payload
     */
    const keys = Object.keys(payload);
    const values = Object.values(payload);
    var sql = "INSERT INTO " + table + "(";
    sql += keys.join(",");
    sql += ")";
    sql += " VALUES (";
    sql += keys.map(v => "?").join(",");
    sql += ")";
    return {sql, values};
  }
}
export default sql;