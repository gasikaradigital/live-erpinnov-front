import { api } from "../config"

export const createSubscription = async (planId) => {
    try {
      await api.get('/api/sanctum/csrf-cookie');
      
      const res = await api.post('/api/create-subscription', planId);
  
      if (res.status === 201) {
        return res.data;
      }
  
      return null;
    } catch (error) {
      if (error.response && error.response.status === 422) {
        return { validationErrors: error.response.data };
      }
  
      console.error("Erreur lors de la création de subscrption :", error);
      return null;
    }
  };
  
