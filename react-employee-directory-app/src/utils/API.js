import axios from "axios";

// Export an object containing methods we will use for accessing the Dog.Ceo API

//dog.ceo/api/breeds/image/random"

//https://randomuser.me/api/?inc=gender,name,email,phone,dob,picture&results=10
export class EmployeeApi {
  static getEmployeeList() {
    return axios.get(
      "https://randomuser.me/api/?inc=gender,name,email,phone,dob,picture&results=10"
    );
  }
}
