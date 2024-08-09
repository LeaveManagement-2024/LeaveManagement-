import axios from 'axios';

// Base URL de votre API
const API_URL = 'http://localhost:8093/filieres';  // Remplacez par l'URL de votre API

// Fonction pour obtenir tous les Filieres
export const getAllFilieres = async () => {
  try {
    const response = await axios.get(`${API_URL}/getAll`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des Filieres:', error);
    throw error;
  }
};

// Fonction pour obtenir un Filiere par ID
export const getFiliereById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/getById/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la récupération du Filiere avec l'ID ${id}:`, error);
    throw error;
  }
};

// Fonction pour ajouter un nouveau Filiere
export const addFiliere = async (FiliereNameFr, FiliereNameAr) => {
  try {
    const response = await axios.post(`${API_URL}/save`, { FiliereNameFr, FiliereNameAr });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'ajout du Filiere:', error);
    throw error;
  }
};

// Fonction pour mettre à jour un Filiere
export const updateFiliere = async (id, FiliereNameFr, FiliereNameAr) => {
  try {
    const response = await axios.put(`${API_URL}/update/${id}`, { FiliereNameFr, FiliereNameAr });
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la mise à jour du Filiere avec l'ID ${id}:`, error);
    throw error;
  }
};

// Fonction pour supprimer un Filiere
export const deleteFiliere = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/delete/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la suppression du Filiere avec l'ID ${id}:`, error);
    throw error;
  }
};
