// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import DashboardContent from "./components/common/DashboardContent.jsx";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import EntrepriseCreate from "./components/common/entreprise/EntrepriseCreate.jsx";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import PaymentModule from "./components/common/PayementProcess.jsx";
import InstanceCreate from "./components/common/InstanceCreate.jsx";
import TicketDashboard from "./pages/Ticket/TicketDashboard.jsx";
import AppNavbar from "./components/common/navbar/AppNavbar.jsx";
import PaiementDocument from "./pages/Document/PaiementDocument.jsx";
import InstanceErpinnov from "./components/common/InstanceErpinnov.jsx";
import PayementCard from "./pages/Payement/PayementCard.jsx";
import LandingFAQ from "./pages/Faq/LandingFAQ.jsx";

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
      <ThemeProvider>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/inscription" element={<Inscription />} />
              <Route path="/mot-de-passe-oublie" element={<ForgotPassword />} />
              <Route
                path="/confirmer-mot-de-passe"
                element={<ConfirmPassword />}
              />
              {/* <Route element={<ProtectedRoute />}> */}
              <Route path="/verifier-otp" element={<VerifyOtp />} />
              <Route path="/verifier-email" element={<VerifyEmail />} />
              <Route
                path="/organisation/nouvelle"
                element={<EntrepriseCreate />}
              />
              <Route path="/tableau-de-bord" element={<DashboardPage />} />
              <Route path="/accueil" element={<LandingPage />} />
              <Route path="/paiement" element={<PaymentModule />} />
              <Route path="/instance/nouvelle" element={<InstanceCreate />} />
              <Route
                path="/confirmer-mot-de-passe"
                element={<ConfirmPassword />}
              />
              <Route path="/verifier-otp" element={<VerifyOtp />} />
              <Route path="/profil" element={<ProfileForm />} />
              <Route path="/ticket" element={<TicketDashboard />} />
              <Route path="/document" element={<PaiementDocument />} />
              <Route path="/paiement-carte" element={<PayementCard />} />
              <Route path="/instance/nouvelle" element={<InstanceCreate />} />
              <Route path="/instance/erpinnov" element={<InstanceErpinnov />} />
              <Route path="/faq" element={<LandingFAQ />} />
              {/* </Route> */}
            </Routes>
          </AuthProvider>
        </Router>
      </ThemeProvider>
    </DarkModeProvider>
  );
}

export default App;
