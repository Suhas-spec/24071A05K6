import { useEffect, useState } from "react";
import { initialBills, initialPatients } from "../data/mockData";

const BILLS_KEY = "hmsBills";
const PATIENTS_KEY = "hmsPatients";
const defaultForm = { patientName: "", services: "", amount: "", status: "Pending", date: "" };

function Billing() {
  const [bills, setBills] = useState([]);
  const [patients, setPatients] = useState([]);
  const [form, setForm] = useState(defaultForm);

  useEffect(() => {
    const saved = localStorage.getItem(BILLS_KEY);
    setBills(saved ? JSON.parse(saved) : initialBills);
    const savedP = localStorage.getItem(PATIENTS_KEY);
    const resolvedP = savedP ? JSON.parse(savedP) : initialPatients;
    setPatients(resolvedP);
    setForm((f) => ({ ...f, patientName: resolvedP[0]?.name || "" }));
  }, []);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const updated = [{ id: Date.now(), ...form, amount: Number(form.amount) }, ...bills];
    setBills(updated);
    localStorage.setItem(BILLS_KEY, JSON.stringify(updated));
    setForm({ ...defaultForm, patientName: patients[0]?.name || "" });
  };

  const total = bills.reduce((s, b) => s + b.amount, 0);
  const paid = bills.filter((b) => b.status === "Paid").reduce((s, b) => s + b.amount, 0);

  return (
    <section className="page-stack">
      <div className="stats-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
        <article className="stat-card"><span>Total Billed</span><strong>₹{total.toLocaleString()}</strong></article>
        <article className="stat-card"><span>Collected</span><strong>₹{paid.toLocaleString()}</strong></article>
        <article className="stat-card accent"><span>Outstanding</span><strong>₹{(total - paid).toLocaleString()}</strong></article>
      </div>

      <div className="two-column">
        <article className="form-card">
          <p className="section-label">Billing</p>
          <h2>Generate Bill</h2>
          <form className="form-grid" onSubmit={handleSubmit}>
            <label className="field-label">Patient</label>
            <select name="patientName" className="select-input" value={form.patientName} onChange={handleChange}>
              {patients.map((p) => <option key={p.id}>{p.name}</option>)}
            </select>

            <label className="field-label">Services</label>
            <input name="services" className="text-input" value={form.services} onChange={handleChange} required placeholder="e.g. Consultation, X-Ray" />

            <div className="form-columns">
              <div className="form-grid">
                <label className="field-label">Amount (₹)</label>
                <input name="amount" type="number" className="text-input" value={form.amount} onChange={handleChange} required />
              </div>
              <div className="form-grid">
                <label className="field-label">Status</label>
                <select name="status" className="select-input" value={form.status} onChange={handleChange}>
                  <option>Pending</option>
                  <option>Paid</option>
                  <option>Waived</option>
                </select>
              </div>
            </div>

            <label className="field-label">Date</label>
            <input name="date" type="date" className="text-input" value={form.date} onChange={handleChange} required />

            <button className="primary-button" type="submit">Generate bill</button>
          </form>
        </article>

        <article className="content-card">
          <div className="card-heading"><h2>Billing Records</h2></div>
          <div className="record-list">
            {bills.map((bill) => (
              <article className="record-item" key={bill.id}>
                <div>
                  <h3>{bill.patientName}</h3>
                  <p>{bill.services}</p>
                  <p style={{ color: "var(--muted)", fontSize: "0.88rem" }}>{bill.date}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <strong>₹{bill.amount.toLocaleString()}</strong>
                  <br />
                  <span className={`pill ${bill.status === "Paid" ? "" : "pill-warn"}`}>{bill.status}</span>
                </div>
              </article>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export default Billing;
