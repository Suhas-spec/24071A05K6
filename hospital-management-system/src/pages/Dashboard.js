import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { doctors, initialAppointments, initialPatients, wards, medicines, initialBills, initialLabReports } from "../data/mockData";

function Dashboard() {
  const { currentUser } = useAuth();
  const patients = JSON.parse(
    localStorage.getItem("hmsPatients") || JSON.stringify(initialPatients)
  );
  const appointments = JSON.parse(
    localStorage.getItem("hmsAppointments") || JSON.stringify(initialAppointments)
  );
  const bills = JSON.parse(
    localStorage.getItem("hmsBills") || JSON.stringify(initialBills)
  );
  const labReports = JSON.parse(
    localStorage.getItem("hmsLabReports") || JSON.stringify(initialLabReports)
  );
  const totalBeds = wards.reduce((s, w) => s + w.capacity, 0);
  const occupiedBeds = wards.reduce((s, w) => s + w.occupied, 0);
  const lowStock = medicines.filter((m) => m.stock <= m.reorderLevel).length;
  const pendingBills = bills.filter((b) => b.status === "Pending").length;
  const pendingLab = labReports.filter((r) => r.status === "Pending").length;
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

      <div className="stats-grid" style={{ gridTemplateColumns: "repeat(4, minmax(0,1fr))" }}>
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
          <span>Beds Occupied</span>
          <strong>{occupiedBeds}/{totalBeds}</strong>
        </article>
        <article className="stat-card">
          <span>Pending Bills</span>
          <strong>{pendingBills}</strong>
        </article>
        <article className="stat-card">
          <span>Pending Lab Reports</span>
          <strong>{pendingLab}</strong>
        </article>
        <article className="stat-card accent">
          <span>Low Stock Medicines</span>
          <strong>{lowStock}</strong>
        </article>
        <article className="stat-card">
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
            <Link to="/wards" className="action-tile">
              View ward & bed status
            </Link>
            <Link to="/pharmacy" className="action-tile">
              Manage medicine inventory
            </Link>
            <Link to="/billing" className="action-tile">
              Generate or review bills
            </Link>
            <Link to="/lab-reports" className="action-tile">
              Lab test results
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
