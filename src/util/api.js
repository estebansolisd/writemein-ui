import axios from "axios";

export const sendPrivateRequest = async (url, method, data = {}) => {
  return await axios({
    method,
    timeout: 60000,
    url,
    data,
    headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTQ4Njk4ODQzMjU0ODVkNWJhODc0MGQiLCJpYXQiOjE1ODE5MTA3Mjl9.Abtkla3qOBqFYnIx6eMpB3llDGbAQj2lv1Px3FurqSE" //`Bearer ${localStorage.getItem("Authorization")}`
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
