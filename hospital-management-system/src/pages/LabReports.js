import { useEffect, useState } from "react";
import { initialLabReports, initialPatients } from "../data/mockData";

const LAB_KEY = "hmsLabReports";
const PATIENTS_KEY = "hmsPatients";
const defaultForm = { patientName: "", test: "", result: "", status: "Pending", date: "" };

function LabReports() {
  const [reports, setReports] = useState([]);
  const [patients, setPatients] = useState([]);
  const [form, setForm] = useState(defaultForm);

  useEffect(() => {
    const saved = localStorage.getItem(LAB_KEY);
    setReports(saved ? JSON.parse(saved) : initialLabReports);
    const savedP = localStorage.getItem(PATIENTS_KEY);
    const resolvedP = savedP ? JSON.parse(savedP) : initialPatients;
    setPatients(resolvedP);
    setForm((f) => ({ ...f, patientName: resolvedP[0]?.name || "" }));
  }, []);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const updated = [{ id: Date.now(), ...form }, ...reports];
    setReports(updated);
    localStorage.setItem(LAB_KEY, JSON.stringify(updated));
    setForm({ ...defaultForm, patientName: patients[0]?.name || "" });
  };

  return (
    <section className="two-column">
      <article className="form-card">
        <p className="section-label">Laboratory</p>
        <h2>Add Lab Report</h2>
        <form className="form-grid" onSubmit={handleSubmit}>
          <label className="field-label">Patient</label>
          <select name="patientName" className="select-input" value={form.patientName} onChange={handleChange}>
            {patients.map((p) => <option key={p.id}>{p.name}</option>)}
          </select>

          <label className="field-label">Test Name</label>
          <input name="test" className="text-input" value={form.test} onChange={handleChange} required placeholder="e.g. Complete Blood Count" />

          <label className="field-label">Result</label>
          <input name="result" className="text-input" value={form.result} onChange={handleChange} placeholder="e.g. Normal / 92 mg/dL" />

          <div className="form-columns">
            <div className="form-grid">
              <label className="field-label">Status</label>
              <select name="status" className="select-input" value={form.status} onChange={handleChange}>
                <option>Pending</option>
                <option>Completed</option>
                <option>Abnormal</option>
              </select>
            </div>
            <div className="form-grid">
              <label className="field-label">Date</label>
              <input name="date" type="date" className="text-input" value={form.date} onChange={handleChange} required />
            </div>
          </div>

          <button className="primary-button" type="submit">Save report</button>
        </form>
      </article>

      <article className="content-card">
        <div className="card-heading"><h2>Lab Reports</h2></div>
        <div className="record-list">
          {reports.map((r) => (
            <article className="record-item" key={r.id}>
              <div>
                <h3>{r.patientName}</h3>
                <p>{r.test}</p>
                <p style={{ color: "var(--muted)", fontSize: "0.88rem" }}>{r.date} • {r.result || "—"}</p>
              </div>
              <span className={`pill ${r.status === "Abnormal" ? "pill-danger" : r.status === "Pending" ? "pill-warn" : ""}`}>
                {r.status}
              </span>
            </article>
          ))}
        </div>
      </article>
    </section>
  );
}

export default LabReports;
