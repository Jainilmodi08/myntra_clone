import axios from "axios";

const axiosClient = axios.create({
  baseURL: `https://myntra-back.herokuapp.com/`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export { axiosClient };
