import axios from "axios";

const baseUrl = import.meta.env;

export async function login(userData) {
  const loginUrl = baseUrl + "/users/login";
  const response = await axios.post(loginUrl, userData);
  if (response.status === 200) {
    axios.defaults.headers.common["authorization"] = response.data.token;
    localStorage.setItem("token", response.data.token)
  }
  console.log('response in auth service in login')
  console.log(response)
  return response;
}

export async function signup(userData) {
  const signupUrl = baseUrl + "/users";
  const response = await axios.post(signupUrl, userData);
  console.log("response in auth service for signup");
  console.log(response);
  return response.data;
}
