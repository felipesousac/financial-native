import axios from "axios";

export const api = axios.create({
  // baseURL: 'http://192.168.1.8:3333'
  baseURL: "http://192.168.15.15:3333",
  //   baseURL: "http://192.168.0.174:3333",
});
