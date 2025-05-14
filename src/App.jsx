import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavSection from "./components/common/navbar/navBare";
import PricingSection from "./pages/landing-page/PrincingSection/PricingSection";
import HeroSection from "./pages/landing-page/HomeSection/HeroSection";
import ModuleSection from "./pages/GestionSection/ModuleSection";
import Login from "./pages/auth/login";
import Inscription from "./pages/auth/inscription";
import ForgotPassword from "./pages/auth/forgot-password";
import EditProfile from "./pages/auth/profile/ProfileForm";
import "./App.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { DarkModeProvider } from "./contexts/DarkModeContext";
import ProfileForm from "./pages/auth/profile/ProfileForm";

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
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<ProfileForm/>}/>
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
          <Route path="/inscription" element={<Inscription />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
