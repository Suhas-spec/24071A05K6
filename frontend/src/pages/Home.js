import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="page-stack">
      <div className="hero-grid">
        <article className="hero-card">
          <p className="section-label">Hospital management system</p>
          <h1>Manage patients, doctors, and appointments in one dashboard.</h1>
          <p className="section-copy">
            CityCare HMS is a React application built for registration, login,
            patient records, doctor availability, appointment booking, and
            contact support.
          </p>

          <div className="hero-actions">
            <Link to="/register" className="primary-button">
              Create account
            </Link>
            <Link to="/login" className="secondary-button">
              Login to dashboard
            </Link>
          </div>

          <div className="note-card">
            <strong>Included modules:</strong> registration, login, patient
            details, doctor list, appointment booking, routing, and contact
            page.
          </div>
        </article>

        <aside className="highlight-card">
          <p className="section-label">Why this project</p>
          <h2>Perfect for college demo, portfolio, or mini project submission.</h2>
          <ul>
            <li>Responsive pages built with React Router</li>
            <li>Protected dashboard after login</li>
            <li>Local storage support for demo data</li>
            <li>Ready for GitHub Pages deployment</li>
          </ul>
        </aside>
      </div>

      <div className="cards-grid">
        <article className="info-card">
          <h3>Patient Management</h3>
          <p>Store basic patient details, illness information, and admissions.</p>
        </article>
        <article className="info-card">
          <h3>Doctor Directory</h3>
          <p>Browse specialists with schedules, experience, and availability.</p>
        </article>
        <article className="info-card">
          <h3>Smart Booking</h3>
          <p>Book appointments instantly and review the updated schedule.</p>
        </article>
      </div>
    </section>
  );
}

export default Home;
