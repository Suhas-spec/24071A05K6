import { doctors } from "../data/mockData";

function Doctors() {
  return (
    <section className="page-stack">
      <div className="hero-banner">
        <div>
          <p className="section-label">Doctors directory</p>
          <h1>Meet the specialists at CityCare Hospital</h1>
          <p className="section-copy">
            Browse experience, department, and doctor availability before
            booking.
          </p>
        </div>
      </div>

      <div className="cards-grid">
        {doctors.map((doctor) => (
          <article className="doctor-card" key={doctor.id}>
            <p className="section-label">{doctor.specialty}</p>
            <h3>{doctor.name}</h3>
            <p className="doctor-meta">Experience: {doctor.experience}</p>
            <p className="doctor-meta">{doctor.availability}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Doctors;
