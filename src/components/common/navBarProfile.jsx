import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { BsMoon, BsSun } from "react-icons/bs";

export default function NavBarProfile({ user = { initials: "KA" } }) {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <Navbar bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"}>
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center gap-2">
                 <img
                   src="/assets/img/front-pages/logo/logo.png"
                   alt="ERP INNOV"
                   style={{ height: "50px" }}
                   className="mb-2"
                 />
                 <span className="fw-semibold text-primary">ERP INNOV</span>
               </Navbar.Brand>

        <Nav className="d-flex align-items-center gap-3">
          <div
            onClick={() => setDarkMode(!darkMode)}
            style={{ cursor: "pointer", fontSize: 18 }}
          >
            {darkMode ? <BsSun /> : <BsMoon />}
          </div>
          <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center" style={{ width: 32, height: 32 }}>
            {user?.initials || "??"}
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}
