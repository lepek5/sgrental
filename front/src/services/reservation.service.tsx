import { IReservation } from "../interfaces/IReservation";
import apiService from "./api.service";
const getAll = async (): Promise<IReservation[] | any> => {
  const res = await apiService.get("reservations");
  return res.data;
}
const createReservation = async (payload: any) => {
  const res = await apiService.post("reservations", payload);
  return res.data;
}
export default { getAll, createReservation };