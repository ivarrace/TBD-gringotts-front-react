import axios from "axios";
import authHeader from "./auth-header";
import Config from "./config";

const API_URL = Config.baseURL + "/dashboard";

class DashboardService {
  getDashboardData() {
    return axios.get(API_URL + "/", { headers: authHeader() });
  }
}
export default new DashboardService();
