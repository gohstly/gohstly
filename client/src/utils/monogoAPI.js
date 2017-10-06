import axios from "axios";

export default {
  // Gets the User with the given skill
  getUser: function(data) {
    return axios.get("/api/users/:id", data);
  },
  // Saves a User to the database
  saveUser: function(userData) {
    return axios.post("/api/users/create", userData);
  },
  //Get the email
  signIn: function(userEmail) {
    return axios.get("/api/users/signIn/" + userEmail);
  }
};
