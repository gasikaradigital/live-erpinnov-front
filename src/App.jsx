import { useState } from "react";
import "./App.css";
import PricingSection from "./pages/landing-page/PrincingSection/PricingSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Vous pouvez ici utiliser le useState pour manipuler l'état de l'application si nécessaire */}
      
        <PricingSection />
    </>
  );
}

export default App;
