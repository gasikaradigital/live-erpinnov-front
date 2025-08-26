import { api } from "../config"
import axios from 'axios';

export const fetchEntreprises = async () => {
    try {
        const res = await api.get('/api/entreprises');

        console.log(res);
        if (res.status === 200) {
            return res.data;
        }

        return null;
    } catch (error) {
        console.error('Erreur lors de la récupération de l\'entreprise :', error);
        return null;
    }
}

export const fetchUser = async () => {
    try {
        const res = await axios.get('https://gmg.erpinnov.com/api/index.php/users', {
          headers: {
            DOLAPIKEY: '3at1TxcD44CYN4J9LJ23ldG6r7VrcdTu'
          }
        });

        if(res.status === 200) {
          return res.data;
        }

        return null;

    } catch (error) {
        console.error('Erreur lors de la récupération de l\'entreprise :', error);
        return null;
    }
}

export const createEntreprise = async (entreprise) => {
    try {
      const res = await api.post('/api/create-entreprise', entreprise);
  
      if (res.status === 201) {
        return res.data;
      }
  
      return null;
    } catch (error) {
      if (error.response && error.response.status === 422) {
        return { validationErrors: error.response.data };
      }
  
      console.error("Erreur lors de la création de l'entreprise :", error);
      return null;
    }
  };
  
