import React, { useState, useEffect } from 'react';
import { getAllProfiles, getProfileById, addProfile, updateProfile, deleteProfile } from './pageapi';

const ProfilesComponent = () => {
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [profileName, setProfileName] = useState('');

  useEffect(() => {
    fetchAllProfiles();
  }, []);

  const fetchAllProfiles = async () => {
    try {
      const data = await getAllProfiles();
      setProfiles(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des profils:', error);
    }
  };

  const handleAddProfile = async () => {
    try {
      await addProfile(profileName);
      fetchAllProfiles(); // Rafraîchir la liste après ajout
    } catch (error) {
      console.error('Erreur lors de l\'ajout du profil:', error);
    }
  };

  const handleUpdateProfile = async (id) => {
    try {
      await updateProfile(id, profileName);
      fetchAllProfiles(); // Rafraîchir la liste après mise à jour
    } catch (error) {
      console.error('Erreur lors de la mise à jour du profil:', error);
    }
  };

  const handleDeleteProfile = async (id) => {
    try {
      await deleteProfile(id);
      fetchAllProfiles(); // Rafraîchir la liste après suppression
    } catch (error) {
      console.error('Erreur lors de la suppression du profil:', error);
    }
  };

  return (
    <div>
      {/* Votre code pour afficher, ajouter, mettre à jour, et supprimer des profils */}
      {/* Exemple de formulaire pour ajouter un profil */}
      <input
        type="text"
        value={profileName}
        onChange={(e) => setProfileName(e.target.value)}
        placeholder="Nom du profil"
      />
      <button onClick={handleAddProfile}>Ajouter Profil</button>
      {/* Ajouter des fonctionnalités pour afficher, mettre à jour et supprimer des profils */}
    </div>
  );
};

export default ProfilesComponent;
