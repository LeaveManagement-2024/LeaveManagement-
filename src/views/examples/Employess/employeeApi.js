import axios from 'axios';

const BASE_URL = 'http://localhost:8093/employee';

const loginEmployee = async (logInDTO) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, logInDTO);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

const addEmployee = async (employeeDTO) => {
  try {
    const formData = new FormData();
    for (const key in employeeDTO) {
      if (employeeDTO.hasOwnProperty(key)) {
        formData.append(key, employeeDTO[key]);
      }
    }
    const response = await axios.post(`${BASE_URL}/save`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error adding employee:', error);
    throw error;
  }
};

const getAllEmployees = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/getAll`);
    return response.data;
  } catch (error) {
    console.error('Error fetching all employees:', error);
    throw error;
  }
};

const getEmployeeById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/getById/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching employee with id ${id}:`, error);
    throw error;
  }
};

const updateEmployee = async (id, employeeDTO) => {
  try {
    const formData = new FormData();
    for (const key in employeeDTO) {
      if (employeeDTO.hasOwnProperty(key)) {
        formData.append(key, employeeDTO[key]);
      }
    }
    const response = await axios.put(`${BASE_URL}/update/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error updating employee with id ${id}:`, error);
    throw error;
  }
};

const deleteEmployee = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/delete/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting employee with id ${id}:`, error);
    throw error;
  }
};

const getManagerByIdEmp = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/getManagerByIdEmp/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching manager of employee with id ${id}:`, error);
    throw error;
  }
};

const getResponsibleByIdEmp = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/getResponsibleByIdEmp${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching responsible of employee with id ${id}:`, error);
    throw error;
  }
};

export {
  loginEmployee,
  addEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
  getManagerByIdEmp,
  getResponsibleByIdEmp
};
