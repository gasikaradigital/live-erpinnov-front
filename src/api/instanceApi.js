import { api } from "../config"

// export const fetchEntreprises = async () => {
//     try {
//         const res = await api.get('/api/entreprises');

//         console.log(res);
//         if (res.status === 200) {
//             return res.data;
//         }

//         return null;
//     } catch (error) {
//         console.error('Erreur lors de la récupération de l\'entreprise :', error);
//         return null;
//     }
// }

export const createInstance = async (instance) => {
    try {
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
  
