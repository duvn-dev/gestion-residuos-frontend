import axios from "axios";

const API = "https://gestion-residuos-api.onrender.com/api/reportes";

export const getReportes = () => axios.get(API);
export const getReporte = (id) => axios.get(`${API}/${id}`);

export const createReporte = (data, token) =>
  axios.post(API, data, {
    headers: { Authorization: `Bearer ${token}` }
  });

export const updateReporte = (id, data, token) =>
  axios.put(`${API}/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` }
  });

export const deleteReporte = (id, token) =>
  axios.delete(`${API}/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
