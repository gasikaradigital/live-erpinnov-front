import { useState, useEffect } from "react";

export default function ProfileForm({ initialData = {}, onSubmit }) {
  const [formData, setFormData] = useState({
    civilite: initialData.civilite || "mr",
    fname: initialData.fname || "",
    lname: initialData.lname || "",
    telephone: initialData.telephone || "",
    adresse: initialData.adresse || "",
    zipcode: initialData.zipcode || "",
    ville: initialData.ville || "",
    pays: initialData.pays || "",
    bio: initialData.bio || "",
    is_public: initialData.is_public || false,
  });

  const [status, setStatus] = useState("");

  useEffect(() => {
    const notification = document.getElementById("notification");
    if (notification) {
      setTimeout(() => setStatus(""), 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    const val = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: val,
    }));

    if (name === "telephone") {
      let phone = value.replace(/\D/g, "").slice(0, 14);
      if (phone.length >= 2) {
        phone = phone.match(/.{1,2}/g).join(" ");
      }
      setFormData((prev) => ({
        ...prev,
        telephone: phone,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
    setStatus("Modifications enregistrées !");
  };

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Profil</h1>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Mettez à jour vos informations personnelles
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Bloc Informations personnelles */}
          <Section title="Informations personnelles" iconPath="M16 7a4...">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-6">
              <SelectInput
                label="Civilité"
                name="civilite"
                value={formData.civilite}
                onChange={handleChange}
                options={[
                  { value: "mr", label: "Mr." },
                  { value: "mme", label: "Mme" },
                  { value: "mlle", label: "Mlle" },
                ]}
                className="sm:col-span-1"
              />
              <TextInput name="fname" label="Prénom" value={formData.fname} onChange={handleChange} className="sm:col-span-2" />
              <TextInput name="lname" label="Nom" value={formData.lname} onChange={handleChange} className="sm:col-span-3" />
              <PhoneInput name="telephone" label="Téléphone" value={formData.telephone} onChange={handleChange} className="sm:col-span-6" />
            </div>
          </Section>

          {/* Bloc Adresse */}
          <Section title="Adresse" iconPath="M17.657...">
            <TextInput name="adresse" label="Adresse complète" value={formData.adresse} onChange={handleChange} />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <TextInput name="zipcode" label="Code postal" value={formData.zipcode} onChange={handleChange} />
              <TextInput name="ville" label="Ville" value={formData.ville} onChange={handleChange} />
              <TextInput name="pays" label="Pays" value={formData.pays} onChange={handleChange} />
            </div>
          </Section>

          {/* Bloc Description */}
          <Section title="Description" iconPath="M11 5H6a2...">
            <div className="space-y-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="bio">
                À propos de moi
              </label>
              <textarea
                name="bio"
                id="bio"
                rows="4"
                value={formData.bio}
                onChange={handleChange}
                className="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent transition duration-200"
              />
              <div className="flex items-start space-x-3 bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                <input
                  type="checkbox"
                  name="is_public"
                  id="is_public"
                  checked={formData.is_public}
                  onChange={handleChange}
                  className="w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-primary-600 focus:ring-primary-500 transition duration-200"
                />
                <div>
                  <label htmlFor="is_public" className="text-sm font-medium text-gray-900 dark:text-white">
                    Profil public
                  </label>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Rendre votre profil visible pour les autres utilisateurs
                  </p>
                </div>
              </div>
            </div>
          </Section>

          {/* Bouton */}
          <div className="flex justify-end pt-4">
            <button type="submit" className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg shadow-sm transition-all duration-200 hover:shadow-md space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Enregistrer les modifications</span>
            </button>
          </div>
        </form>

        {status && (
          <div id="notification" className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
            {status}
          </div>
        )}
      </div>
    </div>
  );
}

// Composants utilitaires
const Section = ({ title, iconPath, children }) => (
  <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
    <div className="p-6 space-y-6">
      <div className="flex items-center border-b border-gray-200 dark:border-gray-700 pb-4">
        <svg className="w-6 h-6 text-primary-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconPath} />
        </svg>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h2>
      </div>
      {children}
    </div>
  </div>
);

const TextInput = ({ label, name, value, onChange, className = "" }) => (
  <div className={className}>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
      {label}
    </label>
    <input
      type="text"
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      className="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent transition duration-200"
    />
  </div>
);

const SelectInput = ({ label, name, value, onChange, options, className = "" }) => (
  <div className={className}>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
      {label}
    </label>
    <select
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      className="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent transition duration-200"
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);

const PhoneInput = ({ name, label, value, onChange, className = "" }) => (
  <div className={className}>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
      {label}
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1..." />
        </svg>
      </div>
      <input
        type="tel"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="block w-full pl-10 rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent transition duration-200"
      />
    </div>
  </div>
);
