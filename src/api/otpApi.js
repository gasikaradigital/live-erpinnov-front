import axios from "axios";
import { API_BASE_URL } from "../config";


const verifyOtp = async (otp) => {
    console.log('Starting');
    try {
        const response = await axios.post(
            `${API_BASE_URL}/api/verify-otp`,
            { otp },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                withCredentials: true,
            }
        );

        if (response.status === 200) {
            console.log('OTP vérifié avec succès:', response.data);
            return response.data;
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

export {verifyOtp};
