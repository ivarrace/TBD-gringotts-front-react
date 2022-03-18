import axios from "axios";

const API_URL = "http://localhost:8080/auth";
const SESSION_STORAGE_ITEM = "gringotts-user";

class AuthService {
  async login(username, password) {
    return axios
      .post(API_URL + "/login", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          window.sessionStorage.setItem(
            SESSION_STORAGE_ITEM,
            JSON.stringify(response.data)
          );
          //this.getCurrentUser();
        }
        return response.data;
      });
  }

  getCurrentUser() {
    return JSON.parse(window.sessionStorage.getItem(SESSION_STORAGE_ITEM));
  }

  isLogged() {
    const user = this.getCurrentUser();
    return user && user.accessToken;
  }

  logout() {
    window.sessionStorage.removeItem(SESSION_STORAGE_ITEM);
    window.location.href = "/";
  }

  //register(username, email, password) {
  //in progress
  //}
}
export default new AuthService();
