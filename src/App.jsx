import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavSection from "./components/common/navbar/navBare";
import PricingSection from "./pages/landing-page/PrincingSection/PricingSection";
import HeroSection from "./pages/landing-page/HomeSection/HeroSection";
import ModuleSection from "./pages/GestionSection/ModuleSection";
import Login from "./pages/auth/login";
import Inscription from "./pages/auth/inscription";
import "./App.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { DarkModeProvider } from "./contexts/DarkModeContext";
import VerifyOtp from "./pages/auth/profile/verify-otp.jsx";
function LandingPage() {
  return (
    <>
      <NavSection />
      <HeroSection />
      <ModuleSection />
      <PricingSection />
    </>
  );
}

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
          <Route path="/inscription" element={<Inscription />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
