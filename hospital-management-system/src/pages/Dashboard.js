import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { doctors, initialAppointments, initialPatients } from "../data/mockData";

function Dashboard() {
  const { currentUser } = useAuth();
  const patients = JSON.parse(
    localStorage.getItem("hmsPatients") || JSON.stringify(initialPatients)
  );
  const appointments = JSON.parse(
    localStorage.getItem("hmsAppointments") || JSON.stringify(initialAppointments)
  );
  const upcomingAppointments = appointments.slice(0, 3);

  return (
    <section className="page-stack">
      <div className="hero-banner">
        <div>
          <p className="section-label">Hospital dashboard</p>
          <h1>Welcome back, {currentUser?.fullName || "Administrator"}</h1>
          <p className="section-copy">
            Track admissions, doctors, and scheduled visits from one place.
          </p>
        </div>
        <div className="status-panel">
          <p>Today’s focus</p>
          <strong>Patient care coordination</strong>
        </div>
      </div>

      <div className="stats-grid">
        <article className="stat-card">
          <span>Total Patients</span>
          <strong>{patients.length}</strong>
        </article>
        <article className="stat-card">
          <span>Doctors On Duty</span>
          <strong>{doctors.length}</strong>
        </article>
        <article className="stat-card">
          <span>Appointments</span>
          <strong>{appointments.length}</strong>
        </article>
        <article className="stat-card accent">
          <span>Emergency Beds</span>
          <strong>12</strong>
        </article>
      </div>

      <div className="content-grid">
        <section className="content-card">
          <div className="card-heading">
            <h2>Upcoming Appointments</h2>
            <Link to="/appointments" className="text-link">
              Manage schedule
            </Link>
          </div>
          <div className="record-list">
            {upcomingAppointments.map((appointment) => (
              <article className="record-item" key={appointment.id}>
                <div>
                  <h3>{appointment.patientName}</h3>
                  <p>
                    {appointment.doctorName} • {appointment.date} at{" "}
                    {appointment.time}
                  </p>
                </div>
                <span className="pill">{appointment.status}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="content-card">
          <div className="card-heading">
            <h2>Quick Actions</h2>
          </div>
          <div className="action-grid">
            <Link to="/patients" className="action-tile">
              Add or review patient records
            </Link>
            <Link to="/doctors" className="action-tile">
              Check specialist availability
            </Link>
            <Link to="/appointments" className="action-tile">
              Book a new appointment
            </Link>
            <Link to="/contact" className="action-tile">
              Contact the hospital desk
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Dashboard;
