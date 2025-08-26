import { API_BASE_URL,api } from "../config";


export const fetchProfile = async () => {
    try {
      const response = await api.get('/api/user');
      console.log(response);
      if (response.status === 200) {
        return response?.data?.profile ?? response?.data;
      }
      return null;
    } catch (error) {
      console.error('Erreur lors de la récupération du profil :', error);
      return null;
    }
  };


export const updateProfile = async (profile) => {
  try{  
  let body = {
    fname: profile.fname,
    is_public: profile.is_public,
    lname: profile.lname,
    adresse: profile.adresse,
    ville: profile.ville,
    zipcode: profile.zipcode,
    pays: profile.pays,
    bio: profile.bio,
    civilite: profile.civilite,
    telephone: profile.telephone
}  
  console.log(body);
  const updateProfileResponse = await api.patch('/api/profile',body )
    if (updateProfileResponse.status === 200) {
      return updateProfileResponse;
    }
    return null;
  } catch (error) {
    console.error('Erreur lors de la mise à jours du profil :', error);
    return null;
  }
}