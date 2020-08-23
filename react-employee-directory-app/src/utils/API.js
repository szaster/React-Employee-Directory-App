import axios from "axios";

// Export an object containing methods we will use for accessing https://randomuser.me API

export class EmployeeApi {
  static getEmployeeList() {
    return axios.get(
      "https://randomuser.me/api/?inc=gender,name,email,phone,dob,picture&results=10"
    );
  }
}
