import { api } from "../config";

export const logout = async (otp) => {
    try {
        const response = await api.post(`/api/logout`,{ otp });

        if (response.status === 200) {
            console.log('Déconnexion réussi');
            return response;
        } else {
            console.warn('Réponse inattendue du serveur:', response.status, response.data);
            return null;
        }
    } catch (error) {
        if (error.response) {
            console.error('Erreur serveur:', error.response.status, error.response.data);
        } else if (error.request) {
            console.error('Aucune réponse du serveur:', error.request);
        } else {
            console.error('Erreur lors de la requête OTP:', error.message);
        }
        return null;
    }
};