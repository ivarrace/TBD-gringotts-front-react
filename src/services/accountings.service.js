import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/accounting";

class AccountingService {
  getAccountings() {
    return axios.get(API_URL + "/", { headers: authHeader() });
  }

  getById(id) {
    return axios.get(API_URL + "/" + id, { headers: authHeader() });
  }

  updateGroup(accountingId, groupId, type, name) {
    return axios.put(
      API_URL + "/" + accountingId + "/" + type + "/" + groupId,
      {
        name,
      },
      { headers: authHeader() }
    );
  }

  addGroup(accountingId, type) {
    return axios.post(
      API_URL + "/" + accountingId + "/" + type + "/",
      {
        name: "New Group",
      },
      { headers: authHeader() }
    );
  }

  deleteGroup(accountingId, type, groupId) {
    return axios.delete(
      API_URL + "/" + accountingId + "/" + type + "/" + groupId,
      { headers: authHeader() }
    );
  }

  updateCategory(accountingId, groupId, type, categoryId, name) {
    return axios.put(
      API_URL +
        "/" +
        accountingId +
        "/" +
        type +
        "/" +
        groupId +
        "/categories/" +
        categoryId,
      {
        name,
      },
      { headers: authHeader() }
    );
  }

  addRecord(type, accountingId, groupId, categoryId, newRecord) {
    return axios.post(
      API_URL +
        "/" +
        accountingId +
        "/" +
        type +
        "/" +
        groupId +
        "/categories/" +
        categoryId +
        "/records",
      newRecord,
      { headers: authHeader() }
    );
  }

  deleteRecord(type, accountingId, groupId, categoryId, recordId) {
    return axios.delete(
      API_URL +
        "/" +
        accountingId +
        "/" +
        type +
        "/" +
        groupId +
        "/categories/" +
        categoryId +
        "/records/" +
        recordId,
      { headers: authHeader() }
    );
  }

  deleteCategory(accountingId, groupId, type, categoryId) {
    return axios.delete(
      API_URL +
        "/" +
        accountingId +
        "/" +
        type +
        "/" +
        groupId +
        "/categories/" +
        categoryId,
      { headers: authHeader() }
    );
  }

  addCategory(accountingId, groupId, type, name) {
    return axios.post(
      API_URL +
        "/" +
        accountingId +
        "/" +
        type +
        "/" +
        groupId +
        "/categories/",

      {
        name,
      },
      { headers: authHeader() }
    );
  }
}
export default new AccountingService();
