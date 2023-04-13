import { PoolConnection } from "mariadb";
import Database from "../database";
const sql = {
  getAllFromTable: (table: string): string => "SELECT * FROM " + table,
  getByIdFromTable: (table: string, id: number) => "SELECT * FROM "+ table +  " WHERE id="+id,
  parseForInsert: (table: string, payload: any) => {
    const keys = Object.keys(payload);
    const values = Object.values(payload);
    var sql = "INSERT INTO " + table + "(";
    sql += keys.join(",");
    sql += ")";
    sql += " VALUES (";
    sql += keys.map(v => "?").join(",");
    sql += ")";
    return { query: sql, values};
  }
}
export default sql;