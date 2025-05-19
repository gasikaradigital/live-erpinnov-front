import React, { useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

const SolutionsTeaser = () => {
  const [billing, setBilling] = useState("annual");

  return (
    <section className="text-center py-5">
      <h5 className="text-primary-emphasis fw-semibold mb-2">
        Découvrez nos solutions
      </h5>
      <p className="mb-3 mx-auto" style={{ maxWidth: 540 }}>
        Transformez votre entreprise avec nos offres sur mesure,
        <span className="text-primary"> dès aujourd'hui</span>
      </p>
      <p className="text-body-secondary small mb-4">
        Plus de 2 829 entreprises nous font déjà confiance
      </p>

      <ButtonGroup>
        <ToggleButton
          id="billing-monthly"
          type="radio"
          variant={billing === "monthly" ? "primary" : "outline-secondary"}
          name="billing"
          value="monthly"
          checked={billing === "monthly"}
          onChange={e => setBilling(e.currentTarget.value)}
        >
          Mensuel
        </ToggleButton>
        <ToggleButton
          id="billing-annual"
          type="radio"
          variant={billing === "annual" ? "primary" : "outline-secondary"}
          name="billing"
          value="annual"
          checked={billing === "annual"}
          onChange={e => setBilling(e.currentTarget.value)}
        >
          Annuel <span className="badge bg-success ms-2">-10%</span>
        </ToggleButton>
      </ButtonGroup>
    </section>
  );
};

export default SolutionsTeaser;
