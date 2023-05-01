import { useQuery } from "react-query";
import userService from "../services/user.service";

const parseFromEntry = (arr: any[]) => { return { key: arr[0], value: arr[1] } };

const getUser = () => {
  const { data } = useQuery("user", async () => await userService.whoami());
  return data;
}
export {parseFromEntry, getUser};