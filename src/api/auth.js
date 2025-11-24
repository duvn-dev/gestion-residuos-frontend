import axios from "axios";

const API = "https://gestion-residuos-api.onrender.com/api/auth";

export const registerUser = (data) => axios.post(`${API}/register`, data);
export const loginUser = (data) => axios.post(`${API}/login`, data);
