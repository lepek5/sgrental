import { PoolConnection } from "mariadb";
import Database from "../database";
import { ProductDB, ProductUI } from "../types/product.types";
import { SGRRespond } from "../types/response.types";
const ReleaseConnection = (conn: PoolConnection | undefined) => {
  if (conn) conn.release();
}
const ParseDBDataToUI = (product: ProductDB): ProductUI => {
  const array = ParseProductTagsToArray(product.tags);
  return { ...product, tags: array }
}
const ParseProductTagsToArray = (tags: string) => tags === null ? [] : tags.split(",");

const ProductService = {
  getAll: async (): Promise<SGRRespond> => {
    var conn;
    const sql = "SELECT * FROM products";
    try {
      conn = await Database.getConnection();
      const result: ProductDB[] = await conn.query(sql);
      const parsed: ProductUI[] = [];
      result.forEach((e, i) => {
        parsed.push(ParseDBDataToUI(e));
      })
      return {
        status: 200,
        error: null,
        data: parsed
      };
    } catch (error: unknown) {
      return {
        status: 500,
        error: error instanceof Error ? error.message : "Error fetching items from api.",
        data: []
      };
    } finally {
      ReleaseConnection(conn);
    }
  },
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