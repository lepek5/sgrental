import axios from "axios"
import { IReservation } from "../interfaces/IReservation";
const BASEURL = "http://localhost:13331/api/reservations"
const getAll = async (): Promise<IReservation[] | any> => {
  const res = await axios.get(BASEURL);
  return res;
}
const createReservation = async (payload: IReservation) => {
  console.log(payload);
  const res = await axios.post(BASEURL, payload);
  console.log("res");
}
export default { getAll, createReservation };