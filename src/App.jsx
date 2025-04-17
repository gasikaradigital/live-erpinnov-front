import "./App.css";
import NavSection from "./components/common/navbar/navBare";
import PricingSection from "./pages/landing-page/PrincingSection/PricingSection";
import HeroSection from "./pages/landing-page/HomeSection/HeroSection";


function App() {


  return (
    <>
      <div>

       <NavSection/>
       <HeroSection/>
        <PricingSection />
        </div>
    </>
  );
}

export default App;
