import { IReservation } from "../interfaces/IReservation";
import apiService from "./api.service";
const getAll = async (): Promise<IReservation[] | any> => {
  const res = await apiService.get("reservations");
  return res.data;
}
const createReservation = async (payload: any) => {
  const res = await apiService.post("reservations", payload);
  return res.data;
};
const getById = async (id: string) => {
  const res = await apiService.get("reservations/" + id);
  return res.data;
};
const getByCustomer = async (): Promise<IReservation[] | any[]> => {
  const res = await apiService.get("reservations/user");
  return res.data;
}
const updateReservation = async (payload: any) => {

  const res = await apiService.put("reservations/" + payload.id, payload);

  return res.data;
}

export default { getAll, createReservation, getById, updateReservation, getByCustomer };