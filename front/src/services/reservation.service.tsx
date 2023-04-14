import axios from "axios"
import Config from "../config";
import { IReservation } from "../interfaces/IReservation";

const BASEURL = Config.API.URI + "reservations";

const getAll = async (): Promise<IReservation[] | any> => {
  const res = await axios.get(BASEURL);
  return res.data;
}
const createReservation = async (payload: IReservation) => {
  const res = await axios.post(BASEURL, payload);
  return res.data;
}
export default { getAll, createReservation };