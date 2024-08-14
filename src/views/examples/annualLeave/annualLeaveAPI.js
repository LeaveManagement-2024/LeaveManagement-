import axios from 'axios';

// Base URL de votre API
const API_URL = 'http://localhost:8093/annualLeave';  // Remplacez par l'URL de votre API

// Fonction pour obtenir tous les AnnualLeave
export const getAllAnnualLeave= async () => {
  try {
    const response = await axios.get(`${API_URL}/getAll`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des AnnualLeave:', error);
    throw error;
  }
};

// Fonction pour obtenir un AnnualLeave par ID
export const getAnnualLeaveById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/getById/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la récupération du AnnualLeave avec l'ID ${id}:`, error);
    throw error;
  }
};

// Fonction pour ajouter un nouveau AnnualLeave
export const addAnnualLeave = async (AnnualLeaveNameFr, AnnualLeaveNameAr) => {
  try {
    const response = await axios.post(`${API_URL}/save`, { AnnualLeaveNameFr, AnnualLeaveNameAr });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'ajout du AnnualLeave:', error);
    throw error;
  }
};

// Fonction pour mettre à jour un AnnualLeave
export const updateAnnualLeave = async (id, AnnualLeaveNameFr, AnnualLeaveNameAr) => {
  try {
    const response = await axios.put(`${API_URL}/update/${id}`, { AnnualLeaveNameFr, AnnualLeaveNameAr });
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la mise à jour du AnnualLeave avec l'ID ${id}:`, error);
    throw error;
  }
};

// Fonction pour supprimer un AnnualLeave
export const deleteAnnualLeave = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/delete/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la suppression du AnnualLeave avec l'ID ${id}:`, error);
    throw error;
  }
};
