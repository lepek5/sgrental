import axios from "axios";
import Config from "../config";
const apiService = axios.create({
  baseURL: Config.API.URI,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});
apiService.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  config.headers.Authorization =  token ? `Bearer ${token}` : '';
  return config;
});
export default apiService;