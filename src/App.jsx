// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavSection from "./components/common/navbar/navBare";
import PricingSection from "./pages/landing-page/PrincingSection/PricingSection";
import HeroSection from "./pages/landing-page/HomeSection/HeroSection";
import ModuleSection from "./pages/GestionSection/ModuleSection";
import Login from "./pages/auth/login";
import Inscription from "./pages/auth/inscription";
import ForgotPassword from "./pages/auth/forgot-password";
import EditProfile from "./pages/auth/profile/ProfileForm";
import ConfirmPassword from "./pages/auth/confirm-password.jsx";
import ProfileForm from "./pages/auth/profile/ProfileForm";
import VerifyOtp from "./pages/auth/profile/verify-otp.jsx";
import VerifyEmail from "./pages/auth/profile/verify-email.jsx";
import AppNavbar from "./components/common/navbar/AppNavbar.jsx";
import DashboardContent from "./components/common/DashboardContent.jsx";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import "./App.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import requireAuth from "./pages/auth/requireAuth.jsx";

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

function DashboardPage() {
  return (
    <ThemeProvider>
      <div className="d-flex flex-column min-vh-100 bg-body">
        <AppNavbar />
        <main className="flex-grow-1">
          <DashboardContent />
        </main>
      </div>
    </ThemeProvider>
  );
}

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/forgot-password" element={<ForgotPassword/>}/>
          <Route path="/confirm-password" element={<ConfirmPassword/>}/>
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route element={<requireAuth />}>
            <Route path="/verify-otp" element={<VerifyOtp />} />
            <Route path="/verify-email" element={<VerifyEmail />} />

            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/landing" element={<LandingPage />} />
            
            
            <Route path="/confirm-password" element={<ConfirmPassword />} />
            <Route path="/verify-otp" element={<VerifyOtp />} />
            <Route path="/profile" element={<ProfileForm />} />
          </Route>
        </Routes>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
