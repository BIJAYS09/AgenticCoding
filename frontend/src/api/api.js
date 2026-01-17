import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api",
});

export const generateCode = (data) => API.post("/generate", data);
