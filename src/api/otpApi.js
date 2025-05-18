import { api } from "../config";

export const verifyOtp = async (otp) => {
    console.log('Starting');
    try {
        const response = await api.post(`/api/verify-otp`,{ otp });

        if (response.status === 200) {
            console.log('OTP vérifié avec succès:', response.data);
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
