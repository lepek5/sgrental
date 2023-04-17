import axios from "axios";
import Config from "../config";
const apiService = axios.create({
  baseURL: Config.API.URI,
  withCredentials: true
});
export default apiService;