import axios from 'axios';

// Base URL de votre API
const API_URL = 'http://localhost:8080/profiles';  // Remplacez par l'URL de votre API

// Fonction pour obtenir tous les profils
export const getAllProfiles = async () => {
  try {
    const response = await axios.get(`${API_URL}/getAll`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des profils:', error);
    throw error;
  }
};

// Fonction pour obtenir un profil par ID
export const getProfileById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/getById/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la récupération du profil avec l'ID ${id}:`, error);
    throw error;
  }
};

// Fonction pour ajouter un nouveau profil
export const addProfile = async (profileName) => {
  try {
    const response = await axios.post(`${API_URL}/save`, {
       profileName:profileName });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'ajout du profil:', error);
    throw error;
  }
};

// Fonction pour mettre à jour un profil
export const updateProfile = async (id, profileName) => {
  try {
    const response = await axios.put(`${API_URL}/update/${id}`, { profileName });
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la mise à jour du profil avec l'ID ${id}:`, error);
    throw error;
  }
};

// Fonction pour supprimer un profil
export const deleteProfile = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/delete/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la suppression du profil avec l'ID ${id}:`, error);
    throw error;
  }
};
