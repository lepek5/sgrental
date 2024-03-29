import Category from "../models/category";

const createCategory = async (cat: any ) => {
  try {
    const result = await Category.findOne({
      where: {
        category: cat
      },
      attributes: ["id", "category"]
    });
    if (result === null) {
      const newCat = await Category.create({
        category: cat
      });
      return newCat.toJSON();
    }
    return result.toJSON();
  } catch (err) {
    throw err;
  }
};
const getAll = async () => {
  try {
    const categories = await Category.findAll();
    return categories;
  } catch (err) {
    throw err;
  }
}
export default { createCategory, getAll};