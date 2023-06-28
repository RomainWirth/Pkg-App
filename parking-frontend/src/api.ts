import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001'; // L'URL du backend

export const fetchParkingSpots = () => {
  return axios.get(`${API_BASE_URL}/parking`);
};

export const addParkingSpot = () => {
  return axios.post(`${API_BASE_URL}/parking`);
};

export const removeParkingSpot = (id: number) => {
  return axios.delete(`${API_BASE_URL}/parking/${id}`);
};
