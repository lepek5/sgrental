import sql from "../utils/sql";

const BASEURL = "http://localhost:13331/api/"
const TABLE = "categories";
const ApiUrl = BASEURL + TABLE;
const categoryService = {
  getAll: async () => {
    const query = sql.getAllFromTable(TABLE);
    var conn;
    try {
      conn = await sql.getConnection();
      const result = await conn.query(query);
      return result;
    } catch (err) {
      console.error(err);
    } finally {
      if (conn) conn.release();
    }
  }
}
export default categoryService;