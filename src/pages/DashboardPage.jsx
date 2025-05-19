import React from "react";
import AppNavbar from "../../components/common/navbar/AppNavbar";
import DashboardContent from "../../components/common/DashboardContent";

const DashboardPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-body">
      {/* Barre de navigation */}
      <AppNavbar user={{ initials: "FI" }} />

      {/* Contenu principal */}
      <main className="flex-grow-1" style={{ paddingTop: "70px" }}>
        <DashboardContent />
      </main>
    </div>
  );
};

export default DashboardPage;
