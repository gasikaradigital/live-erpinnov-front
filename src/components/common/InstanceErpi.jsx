import React, { useState } from "react";

const InstanceErpi = () => {
  const [showOffers, setShowOffers] = useState(false);

  const toggleOffers = () => {
    setShowOffers(!showOffers);
  };

  return (
    <section id="pricingSection" className="py-4 py-sm-5">
      <div
        className="container rounded-4 shadow p-3 p-sm-4"
        style={{ backgroundColor: "#d9e7ff" }}
      >
        <div className="row align-items-start g-3">
          <div className="col-12 col-md-4 text-center">
            <img
              src="assets/img/front-pages/Offre solo erpinnov-artisant.webp"
              alt="Artisan illustrant la gestion d'entreprise"
              className="img-fluid rounded-3 mb-3"
              style={{ maxWidth: "250px" }}
            />
          </div>
          <div className="col-12 col-md-8">
            <h2 className="d-flex align-items-center gap-2 fs-4 mb-3">
              <img
                src="assets/img/front-pages/logo/logo.png"
                alt="section title icon"
                className="img-fluid"
                style={{ maxHeight: "40px" }}
              />
              <span className="text-primary">ERPINNOV - SOLO</span>
            </h2>
            <div className="mb-3">
              <img
                src="assets/img/front-pages/image-enconstruction.png"
                alt="Illustration en construction"
                className="img-fluid rounded-3"
                style={{ maxHeight: "150px" }}
              />
            </div>
            <p className="fs-6">
              <strong>ERPINNOV - SOLO</strong> est une solution SaaS de gestion
              conçue pour les entrepreneurs, indépendants et petites structures
              souhaitant bénéficier d'un environnement professionnel évolutif,
              simple et moderne.
            </p>
            <ul className="list-unstyled fs-6">
              <li className="mb-2">
                🧭 Interface moderne, fluide et ergonomique (Vue.js / Laravel)
              </li>
              <li className="mb-2">
                📋 Gestion des clients, devis, factures, produits/services
              </li>
              <li className="mb-2">
                📊 Suivi de projet, modules de base (stock, banque,
                utilisateurs)
              </li>
              <li className="mb-2">
                🔐 Instance dédiée, sécurisée et hébergée en France
              </li>
              <li className="mb-2">
                🧩 Compatible avec une montée en charge vers des modules
                personnalisés
              </li>
              <li className="mb-2">
                ☁️ Essai gratuit 14 jours sans engagement
              </li>
            </ul>
            <p className="fs-6 mt-3 fst-italic">
              L'offre SOLO est idéale pour démarrer sereinement, tout en gardant
              la possibilité d'évoluer vers des fonctionnalités plus avancées
              selon vos besoins.
            </p>
            <p className="fs-6 fw-bold text-warning">
              🚧 En cours de construction – Restez informé de la sortie en vous
              inscrivant à notre lettre d'information.
            </p>
          </div>
        </div>
      </div>

      <p
        id="toggleOffers2"
        className="text-center fs-6 mb-3"
        style={{ cursor: "pointer" }}
        onClick={toggleOffers}
      >
        {showOffers
          ? "Masquer les offres &nbsp;«"
          : "En savoir plus sur nos offres &nbsp;»"}
      </p>

      {showOffers && (
        <div id="offersContent2" className="container">
          <h3 className="fs-5 mb-3">
            SOLO : Trois formules adaptées à vos besoins
          </h3>
          <ul className="list-unstyled fs-6 mb-4">
            <li className="mb-3">
              <strong className="text-primary">Basic</strong> : L'essentiel pour
              démarrer facilement avec un utilisateur, la gestion des clients,
              produits, devis, factures et comptabilité simple adaptée à
              Madagascar. Idéal pour les indépendants et micro-entrepreneurs.
            </li>
            <li className="mb-3">
              <strong className="text-primary">Standard</strong> : Pour les
              artisans avec des besoins avancés, cette formule ajoute le suivi
              des interventions, gestion des garanties, statistiques en temps
              réel et jusqu'à deux utilisateurs, ainsi qu'un email professionnel
              intégré.
            </li>
            <li>
              <strong className="text-primary">Premium</strong> : La gestion
              complète avec la comptabilité analytique avancée, le calcul
              automatisé des coûts, le suivi du temps par projet, jusqu'à trois
              utilisateurs et options de stockage supplémentaires.
            </li>
          </ul>
          <p className="fs-6 text-center fst-italic">
            Profitez d'une solution clé en main, hébergée en toute sécurité,
            avec un essai gratuit de 14 jours, sans engagement.
          </p>
          <div className="row g-3">
            <div className="col-12 col-md-4">
              <div className="card h-100 p-3">
                <h4 className="fs-5 text-center">Basic</h4>
                <div className="text-center">
                  <div className="fs-4">
                    €5.00 <small>/mois</small>
                  </div>
                  <div className="fs-6">25 500 MGA</div>
                </div>
                <ul className="list-unstyled flex-grow-1 fs-6">
                  <li className="d-flex align-items-center mb-2">
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        width: "20px",
                        fill: "#0d6efd",
                        marginRight: "8px",
                      }}
                    >
                      <path d="M20.285 6.709L9 18l-5.285-5.285 1.414-1.414L9 15.172l9.871-9.871z" />
                    </svg>
                    Gestion des tiers
                  </li>
                  {/* Add other list items similarly */}
                </ul>
                <div className="text-center my-3">
                  <a
                    href="https://portail.erpinnov.com/inscription"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-sm"
                  >
                    S'inscrire
                  </a>
                </div>
                <p className="fs-6 text-center">
                  Profitez de l'essai gratuit 14 jours
                </p>
              </div>
            </div>
            {/* Add Standard and Premium cards similarly */}
          </div>
        </div>
      )}
    </section>
  );
};

export default InstanceErpi;
