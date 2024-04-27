
const token = localStorage.getItem("token");

const initialState = {
  token: token ? token : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};