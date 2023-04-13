import Database from "../database";

const createUser = async (payload: any) => {
  console.log("payload", payload)
  const keys = Object.keys(payload);
  const values = Object.values(payload);
  const sql = formatSqlQuery("users", keys);
  try {
    var conn = await Database.getConnection();
    const query = await conn.query(sql, values);
    console.log("Query", query)
  } catch (err:unknown) {
    console.error(err instanceof Error ? err.message : "omg")
  } 
}

const formatSqlQuery = (table: any, keys: any[]) => {
  /**
   * @param table
   * @description Table to insert
   * $
   */
  var sql = "INSERT INTO " + table + "(";
  sql += keys.join(",");
  sql += ")";
  sql += " VALUES (";
  sql += keys.map(value => "?").join(",");
  sql += ")";
  return sql;
}
export default {
  createUser
}