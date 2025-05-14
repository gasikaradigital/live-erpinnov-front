import { useState } from "react";

export default function ConfirmPassword({ onConfirm }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {


      if (onConfirm) onConfirm(password); // Hook pour backend Laravel ou autre

      // Simule une réponse backend
      console.log("Mot de passe confirmé :", password);
    } catch (err) {
      setError("Mot de passe incorrect.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="flex justify-center">
          <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Message d'information */}
        <div className="text-sm text-gray-600 dark:text-gray-300 text-center">
          Cette section est sécurisée. Veuillez confirmer votre mot de passe avant de continuer.
        </div>

        {/* Erreur */}
        {error && (
          <div className="text-red-600 text-sm text-center mb-2">{error}</div>
        )}

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              name="password"
              required
              autoComplete="current-password"
              autoFocus
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex justify-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-md shadow-sm focus:outline-none transition duration-150 ease-in-out"
            >
              {loading ? "Confirmation..." : "Confirmer"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
