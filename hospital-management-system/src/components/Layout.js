import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Layout() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="nav-bar">
          <div className="brand-block">
            <div className="brand-icon">+</div>
            <div>
              <div className="brand-name">Hospital Managment System-React</div>
              <div className="brand-copy">Hospital management portal</div>
            </div>
          </div>

          <nav className="nav-links">
            <NavLink to="/" end className="nav-link">
              Home
            </NavLink>
            <NavLink to="/doctors" className="nav-link">
              Doctors
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
            {currentUser ? (
              <>
                <NavLink to="/dashboard" className="nav-link">
                  Dashboard
                </NavLink>
                <NavLink to="/patients" className="nav-link">
                  Patients
                </NavLink>
                <NavLink to="/appointments" className="nav-link">
                  Appointments
                </NavLink>
                <button className="logout-button" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to="/register" className="nav-link">
                  Register
                </NavLink>
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </>
            )}
          </nav>
        </div>
      </header>

      <main className="page-width">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <p>24071A05K6</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
