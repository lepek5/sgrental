import apiService from "./api.service";

const createEmployee = async (payload: any) => {
  try {
    const result = await apiService.post("employees", payload);
    return result;
  } catch (err) {
    throw (err);
  }
};
const getAll = async () =>  {
  try {
    const result = await apiService.get("employees");
    return result.data;
  } catch (err) {
    throw err;
  }
}
export default { createEmployee, getAll };