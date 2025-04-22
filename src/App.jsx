import "./App.css";
import NavSection from "./components/common/navbar/navBare";
import PricingSection from "./pages/landing-page/PrincingSection/PricingSection";
import HeroSection from "./pages/landing-page/HomeSection/HeroSection";
import ModuleSection from "./pages/GestionSection/ModuleSection";
import './index.css'; // ou './App.css' selon ton fichier
import './index.css'; 


function App() {
  return (
   
      <div>
       <NavSection/>
       <HeroSection/>
       <ModuleSection/>
        <PricingSection />
        </div>
  
);
}

export default App;
