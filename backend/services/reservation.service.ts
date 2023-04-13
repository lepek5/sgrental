import Database from "../database";
import { IReservation } from "../interfaces/IReservation";

const getAll = async () => {
  var conn;
  try {
    conn = await Database.getConnection();
    const sql = "SELECT * FROM reservations";
    const res = await conn.query(sql);
    return res;
  } catch (error: unknown) {
    return error instanceof Error ? error.message : "Error at query on reservations";
  } finally {
    if (conn) {
      conn.release();
    }
  }
};

const createReservation = async (payload: any): Promise<IReservation | any> => {
  var conn;
  var date = new Date();
  Object.assign(payload, { created_at: date.toISOString() });
  conn = await Database.getConnection();
  var sql = "INSERT INTO reservations (";
  console.log("payload", payload, typeof (payload))
  const keys = Object.keys(payload);
  const values = Object.values(payload as object).map(p => p);
  sql += keys.join(",");
  sql += ")";
  sql += " VALUES (";
  sql += values.map(p => "?").join(",");
  sql += ")";
  console.log(keys, values);
  console.log("sql", sql)
  conn = await Database.getConnection();
  const res = await conn.query(sql, values);
  return res;

}
const parseValues = (arr: string[]) => {
  return arr.map(i => {
    "\'" + i + "\'"
  });
};
export default {
  getAll,
  createReservation
}
