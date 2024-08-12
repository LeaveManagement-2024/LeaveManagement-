// src/services/statistiqueService.js
import axios from 'axios';

const API_URL = 'http://localhost:8093/api/statistics'; // Replace with your actual API URL

export const getNewLeaveRequests = async () => {
  const response = await axios.get(`${API_URL}/newLeaveRequests`);
  return response.data;
};

export const getTotalEmployees = async () => {
  const response = await axios.get(`${API_URL}/totalEmployees`);
  return response.data;
};

export const getUnconfirmedLeaves = async () => {
  const response = await axios.get(`${API_URL}/numberUnconfirmedLeaves`);
  return response.data;
};

export const getNumberOfEmployeesOnLeaveToday = async () => {
  const response = await axios.get(`${API_URL}/numberLeaves-today`);
  return response.data;
};

export const getCountNewEmployees = async () => {
  const response = await axios.get(`${API_URL}/countNewEmp`);
  return response.data;
};

export const getCountOldEmployees = async () => {
  const response = await axios.get(`${API_URL}/countOldEmp`);
  return response.data;
};
