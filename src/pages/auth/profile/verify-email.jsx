import React, { useState } from 'react';
import './verify-email.css';
import './darkTheme.css'; // Fichier pour le mode sombre
import NavigationBar from '../../../components/common/navbar/navbarlogin';
import { useDarkMode } from '../../../contexts/DarkModeContext';

const VerifyEmail = () => {
  const { darkMode } = useDarkMode();
  const [status, setStatus] = useState(''); // Simuler session('status')

  const handleResendEmail = (e) => {
    e.preventDefault();
    // Simuler l'envoi d'un nouvel e-mail de vérification
    console.log('Renvoyer l\'e-mail de vérification');
    setStatus('verification-link-sent');
  };

  const handleLogout = (e) => {
    e.preventDefault();
    // Simuler la déconnexion
    console.log('Déconnexion');
  };

  return (
    <div className="main-layout w-full">
      <NavigationBar isAuthenticated={false} user={null} />
      <div className={`min-h-screen flex flex-col justify-center py-12 pt-20 sm:px-12 lg:px-8 ${darkMode ? 'dark-mode' : ''}`}>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center">
            <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </div>
          <div className="mt-2  text-sm text-gray-600 max-w-sm mx-auto">
            Avant de continuer, pourriez-vous vérifier votre adresse e-mail en cliquant sur le lien que nous venons de vous envoyer par e-mail ? Si vous n'avez pas reçu l'e-mail, nous vous en enverrons un autre avec plaisir.
          </div>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-xl sm:px-10 border border-gray-100">
            {status === 'verification-link-sent' && (
              <div className="mb-4 font-medium text-sm text-green-600 bg-green-50 rounded-lg p-4 flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Un nouveau lien de vérification a été envoyé à l'adresse e-mail que vous avez fournie dans les paramètres de votre profil.</span>
              </div>
            )}

            <div className="mt-4 flex items-center justify-between">
              <form onSubmit={handleResendEmail}>
                <button
                  type="submit"
                  className="flex justify-center text1 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-150"
                >
                  Renvoyer l'e-mail de vérification
                </button>
              </form>

              <div className="flex items-center">
                {/* Commenté comme dans le code original */}
                {/* <a
                  href="/profile/show"
                  className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Modifier le profil
                </a> */}
                <form onSubmit={handleLogout} className="inline ms-2">
                  <button
                    type="submit"
                    className="underline text1 text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150"
                  >
                    Se déconnecter
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;