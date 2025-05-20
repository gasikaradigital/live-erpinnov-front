import React from "react";
import DashboardContent from "../../components/common/DashboardContent";
import NavigationBar from "../components/common/navbar/navbarlogin";

const DashboardPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-body">
      {/* Barre de navigation */}
      <NavigationBar user={{ initials: "FA" }} />

      {/* Contenu principal */}
      <main className="flex-grow-1" style={{ paddingTop: "70px" }}>
        <DashboardContent />
      </main>
    </div>
  );
};

export default DashboardPage;
