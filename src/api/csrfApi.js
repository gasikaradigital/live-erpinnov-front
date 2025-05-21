import { api } from "../config";

export const csrf = async () => {
    try {
        const response = await api.get(`/api/csrf-cookie`,{ otp });
    } catch (error) {
        if (error.response) {
            console.error('Erreur serveur:', error.response.status, error.response.data);
        } 
        return null;
    }
};