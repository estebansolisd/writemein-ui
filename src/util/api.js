import axios from "axios";

export const sendPrivateRequest = async (url, method, data = {}) => {
  return await axios({
    method,
    timeout: 60000,
    url,
    data,
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("TOKEN")}`,
    }
  });
};

export const sendRequest = async (url, method, data = {}) => {
  return await axios({
    method,
    timeout: 60000,
    url,
    data
  });
};
