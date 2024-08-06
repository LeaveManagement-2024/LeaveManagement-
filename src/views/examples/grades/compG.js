import React, { useState, useEffect } from 'react';
import { getAllGrades, getGradeById, addGrade, updateGrade, deleteGrade } from './pageapi';

const GradesComponent = () => {
  const [grades, setGrades] = useState([]);
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [gradeNameFr, setGradeNameFr] = useState('');
  const [gradeNameAr, setGradeNameAr] = useState('');

  useEffect(() => {
    fetchAllGrades();
  }, []);

  const fetchAllGrades = async () => {
    try {
      const data = await getAllGrades();
      setGrades(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des grades:', error);
    }
  };

  const handleAddGrade = async () => {
    try {
      await addGrade(gradeNameFr, gradeNameAr);
      fetchAllGrades(); // Rafraîchir la liste après ajout
    } catch (error) {
      console.error('Erreur lors de l\'ajout du grade:', error);
    }
  };

  const handleUpdateGrade = async (id) => {
    try {
      await updateGrade(id, gradeNameFr, gradeNameAr);
      fetchAllGrades(); // Rafraîchir la liste après mise à jour
    } catch (error) {
      console.error('Erreur lors de la mise à jour du grade:', error);
    }
  };

  const handleDeleteGrade = async (id) => {
    try {
      await deleteGrade(id);
      fetchAllGrades(); // Rafraîchir la liste après suppression
    } catch (error) {
      console.error('Erreur lors de la suppression du grade:', error);
    }
  };

  return (
    <div>
      {/* Votre code pour afficher, ajouter, mettre à jour, et supprimer des grades */}
      {/* Exemple de formulaire pour ajouter un grade */}
      <input
        type="text"
        value={gradeNameFr}
        onChange={(e) => setGradeNameFr(e.target.value)}
        placeholder="Nom du grade en français"
      />
      <input
        type="text"
        value={gradeNameAr}
        onChange={(e) => setGradeNameAr(e.target.value)}
        placeholder="Nom du grade en arabe"
      />
      <button onClick={handleAddGrade}>Ajouter Grade</button>
    </div>
  );
};

export default GradesComponent;
