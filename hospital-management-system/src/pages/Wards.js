import { wards } from "../data/mockData";

function Wards() {
  return (
    <section className="page-stack">
      <div className="hero-banner">
        <div>
          <p className="section-label">Ward management</p>
          <h1>Bed & Ward Occupancy</h1>
          <p className="section-copy">
            Monitor bed availability and occupancy across all hospital wards.
          </p>
        </div>
        <div className="status-panel">
          <p>Total beds</p>
          <strong>{wards.reduce((s, w) => s + w.capacity, 0)}</strong>
          <p style={{ marginTop: 10 }}>Occupied</p>
          <strong>{wards.reduce((s, w) => s + w.occupied, 0)}</strong>
        </div>
      </div>

      <div className="content-card">
        <div className="card-heading">
          <h2>Ward Overview</h2>
        </div>
        <div className="table-list">
          <div className="table-item ward-header">
            <strong>Ward Name</strong>
            <strong>Type</strong>
            <strong>Capacity</strong>
            <strong>Occupied</strong>
            <strong>Available</strong>
            <strong>Status</strong>
          </div>
          {wards.map((ward) => {
            const available = ward.capacity - ward.occupied;
            const pct = Math.round((ward.occupied / ward.capacity) * 100);
            return (
              <div className="table-item ward-row" key={ward.id}>
                <span>{ward.name}</span>
                <span>{ward.type}</span>
                <span>{ward.capacity}</span>
                <span>{ward.occupied}</span>
                <span>{available}</span>
                <span>
                  <span className={`pill ${pct >= 90 ? "pill-danger" : pct >= 70 ? "pill-warn" : ""}`}>
                    {pct}% full
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Wards;
