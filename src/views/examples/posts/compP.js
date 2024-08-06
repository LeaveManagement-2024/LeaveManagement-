import React, { useState, useEffect } from 'react';
import { getAllPosts, getPostById, addPost, updatePost, deletePost } from './pageapi';

const PostsComponent = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [postNameFr, setPostNameFr] = useState('');
  const [postNameAr, setPostNameAr] = useState('');

  useEffect(() => {
    fetchAllPosts();
  }, []);

  const fetchAllPosts = async () => {
    try {
      const data = await getAllPosts();
      setPosts(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des posts:', error);
    }
  };

  const handleAddPost = async () => {
    try {
      await addPost(postNameFr, postNameAr);
      fetchAllPosts(); // Rafraîchir la liste après ajout
    } catch (error) {
      console.error('Erreur lors de l\'ajout du post:', error);
    }
  };

  const handleUpdatePost = async (id) => {
    try {
      await updatePost(id, postNameFr, postNameAr);
      fetchAllPosts(); // Rafraîchir la liste après mise à jour
    } catch (error) {
      console.error('Erreur lors de la mise à jour du post:', error);
    }
  };

  const handleDeletePost = async (id) => {
    try {
      await deletePost(id);
      fetchAllPosts(); // Rafraîchir la liste après suppression
    } catch (error) {
      console.error('Erreur lors de la suppression du post:', error);
    }
  };

  return (
    <div>
      {/* Votre code pour afficher, ajouter, mettre à jour, et supprimer des posts */}
      {/* Exemple de formulaire pour ajouter un post */}
      <input
        type="text"
        value={postNameFr}
        onChange={(e) => setPostNameFr(e.target.value)}
        placeholder="Nom du post en français"
      />
      <input
        type="text"
        value={postNameAr}
        onChange={(e) => setPostNameAr(e.target.value)}
        placeholder="Nom du post en arabe"
      />
      <button onClick={handleAddPost}>Ajouter Post</button>
    </div>
  );
};

export default PostsComponent;
