import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="page-stack">
      <div className="hero-grid">
        <article className="hero-card">
          <p className="section-label">Clinical operations platform</p>
          <h1>Coordinate patient care, scheduling, and staff workflows from one secure workspace.</h1>
          <p className="section-copy">
            Hospital Managment System-React helps hospitals centralize patient
            records, doctor availability, appointment management, and front-desk
            communication in a clean operational dashboard.
          </p>

          <div className="hero-actions">
            <Link to="/register" className="primary-button">
              Register staff
            </Link>
            <Link to="/login" className="secondary-button">
              Open dashboard
            </Link>
          </div>

          <div className="note-card">
            <strong>Core modules:</strong> secure login, patient records, doctor
            directory, appointment scheduling, and support contact workflows.
          </div>
        </article>

        <aside className="highlight-card">
          <p className="section-label">Care coordination</p>
          <h2>Designed to support hospital teams with faster intake, scheduling, and patient flow visibility.</h2>
          <ul>
            <li>Centralized patient information for front-desk and care teams</li>
            <li>Clear doctor availability and consultation planning</li>
            <li>Organized appointment scheduling for daily operations</li>
            <li>Accessible workflow view for admissions, visits, and follow-ups</li>
          </ul>
        </aside>
      </div>

      <div className="cards-grid">
        <article className="info-card">
          <h3>Patient Management</h3>
          <p>Maintain organized patient profiles, clinical notes, and visit context.</p>
        </article>
        <article className="info-card">
          <h3>Doctor Directory</h3>
          <p>Review specialist coverage, experience, and active consultation windows.</p>
        </article>
        <article className="info-card">
          <h3>Appointment Scheduling</h3>
          <p>Book consultations quickly and keep upcoming schedules visible to staff.</p>
        </article>
      </div>
    </section>
  );
}

export default Home;
