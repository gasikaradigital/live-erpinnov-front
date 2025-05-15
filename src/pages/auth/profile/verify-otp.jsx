import React, { useState, useEffect, useRef } from 'react';
import './VerifyOtp.css';
import './darkTheme.css';
import NavigationBar from '../../../components/common/navbar/navbarlogin';
import { useDarkMode } from '../../../contexts/DarkModeContext';

const VerifyOtp = () => {
  const [otp, setOtp] = useState('');
  const [otpValues, setOtpValues] = useState(Array(6).fill(''));
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const inputRefs = useRef([]);
  const { darkMode } = useDarkMode();

  useEffect(() => {
    // Focus sur le premier champ au chargement
    const timer = setTimeout(() => {
      if (inputRefs.current[0]) {
        inputRefs.current[0].focus();
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleInput = (index, value) => {
    // Accepter uniquement les chiffres
    if (!/^\d*$/.test(value)) {
      return;
    }

    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    // Mettre à jour le champ caché
    setOtp(newOtpValues.join(''));
    
    // Effacer les erreurs quand l'utilisateur tape
    if (error) {
      setError('');
    }

    // Déplacer le focus vers la case suivante si remplie
    if (value.length === 1 && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && otpValues[index] === '' && index > 0) {
      // Retour au champ précédent si Backspace est pressé dans un champ vide
      inputRefs.current[index - 1].focus();
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1].focus();
    } else if (e.key === 'ArrowRight' && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handlePaste = (index, e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text').trim();

    if (/^\d+$/.test(pasteData) && pasteData.length <= 6) {
      const newOtpValues = [...otpValues];
      for (let i = 0; i < pasteData.length; i++) {
        if (i + index < 6) {
          newOtpValues[i + index] = pasteData[i];
        }
      }
      setOtpValues(newOtpValues);
      setOtp(newOtpValues.join(''));

      // Focus sur le dernier champ ou le suivant après la séquence
      const focusIndex = Math.min(index + pasteData.length, 5);
      inputRefs.current[focusIndex].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Vérification que tous les champs sont remplis
    if (otp.length !== 6) {
      setError('Veuillez entrer un code à 6 chiffres complet');
      setStatus('');
      return;
    }
    
    // Logique de soumission à implémenter
    console.log('OTP soumis:', otp);
    
    // Simulation de réponse (à remplacer par l'appel API réel)
    // Succès
    // setStatus('Code vérifié avec succès');
    // setError('');
    
    // Erreur
    // setError('Code invalide');
    // setStatus('');
  };

  const handleResend = (e) => {
    e.preventDefault();
    
    // Réinitialiser le formulaire
    setOtpValues(Array(6).fill(''));
    setOtp('');
    setError('');
    
    // Logique de renvoi du code à implémenter
    console.log('Renvoyer le code');
    
    // Afficher le message de succès
    setStatus('Un nouveau code a été envoyé à votre adresse email');
    
    // Focus sur le premier champ
    setTimeout(() => {
      if (inputRefs.current[0]) {
        inputRefs.current[0].focus();
      }
    }, 100);
  };

  return (<div className="main-layout w-full">
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
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Vérification de votre compte
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 max-w-sm mx-auto">
            Un code de vérification à 6 chiffres a été envoyé à votre adresse email
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-xl sm:px-10 border border-gray-100">
            {status && (
              <div className="mb-4 text-sm font-medium text-green-700 bg-green-50 rounded-lg p-4 flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{status}</span>
              </div>
            )}

            {error && (
              <div className="mb-4 text-sm font-medium text-red-700 bg-red-50 rounded-lg p-4 flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="otp_1" className="block text-sm font-medium text-gray-700 mb-1">
                  Code de vérification
                </label>

                <div className="mt-1">
                  <input type="hidden" name="otp" id="otp" value={otp} />

                  <div className="flex justify-between items-center gap-2">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="w-full">
                        <input
                          type="text"
                          inputMode="numeric"
                          id={`otp_${i + 1}`}
                          maxLength="1"
                          autoComplete="off"
                          className="appearance-none block w-full py-4 border border-gray-300 rounded-lg shadow-sm text-center text-xl font-mono font-semibold focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition duration-150"
                          placeholder="•"
                          ref={el => inputRefs.current[i] = el}
                          value={otpValues[i]}
                          onChange={(e) => handleInput(i, e.target.value)}
                          onKeyDown={(e) => handleKeyDown(i, e)}
                          onPaste={(e) => handlePaste(i, e)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                {error && (
                  <p className="mt-2 text-sm text-red-600 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {error}
                  </p>
                )}
                <p className="mt-2 text-xs text-gray-500">Nous vous avons envoyé un code à 6 chiffres par email. Ce code est valide pendant 10 minutes.</p>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-150"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Vérifier mon compte
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2  text-gray-500">Vous n'avez pas reçu de code?</span>
                </div>
              </div>

              <form onSubmit={handleResend} className="mt-4">
                <button
                  type="submit"
                  className="w-full flex justify-center items-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-150"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Renvoyer le code
                </button>
              </form>
            </div>

            <div className="mt-6 text-center">
              <a href="/login" className="text-sm text-primary-600 hover:text-primary-500 font-medium flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Retour à la connexion
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;