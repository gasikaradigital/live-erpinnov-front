import { api } from "../config"

export const createInstance = async (instance) => {
    try {
      await api.get('/api/sanctum/csrf-cookie');

      const res = await api.post('/api/create-instance', instance);
  
      if (res.status === 201) {
        return res.data;
      }
  
      return null;
    } catch (error) {
      if (error.response && error.response.status === 422) {
        return { validationErrors: error.response.data };
      }
  
      console.error("Erreur lors de la création d'instance :", error);
      return null;
    }
  };
  
