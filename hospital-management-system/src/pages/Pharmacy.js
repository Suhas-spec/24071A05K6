import { useState } from "react";
import { medicines as initialMeds } from "../data/mockData";

const defaultForm = { name: "", category: "", stock: "", unit: "Tablets", reorderLevel: "" };

function Pharmacy() {
  const [inventory, setInventory] = useState(initialMeds);
  const [form, setForm] = useState(defaultForm);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setInventory((prev) => [
      { id: Date.now(), ...form, stock: Number(form.stock), reorderLevel: Number(form.reorderLevel) },
      ...prev
    ]);
    setForm(defaultForm);
  };

  return (
    <section className="two-column">
      <article className="form-card">
        <p className="section-label">Pharmacy</p>
        <h2>Add Medicine</h2>
        <form className="form-grid" onSubmit={handleSubmit}>
          <label className="field-label">Medicine Name</label>
          <input name="name" className="text-input" value={form.name} onChange={handleChange} required />

          <label className="field-label">Category</label>
          <input name="category" className="text-input" value={form.category} onChange={handleChange} required />

          <div className="form-columns">
            <div className="form-grid">
              <label className="field-label">Stock Qty</label>
              <input name="stock" type="number" className="text-input" value={form.stock} onChange={handleChange} required />
            </div>
            <div className="form-grid">
              <label className="field-label">Unit</label>
              <select name="unit" className="select-input" value={form.unit} onChange={handleChange}>
                <option>Tablets</option>
                <option>Capsules</option>
                <option>Bottles</option>
                <option>Vials</option>
                <option>Sachets</option>
              </select>
            </div>
          </div>

          <label className="field-label">Reorder Level</label>
          <input name="reorderLevel" type="number" className="text-input" value={form.reorderLevel} onChange={handleChange} required />

          <button className="primary-button" type="submit">Add medicine</button>
        </form>
      </article>

      <article className="content-card">
        <div className="card-heading">
          <h2>Medicine Inventory</h2>
        </div>
        <div className="table-list">
          {inventory.map((med) => (
            <div className="table-item" key={med.id}>
              <div>
                <strong>{med.name}</strong>
                <p style={{ color: "var(--muted)", margin: 0, fontSize: "0.88rem" }}>{med.category}</p>
              </div>
              <span>{med.stock} {med.unit}</span>
              <span className={`pill ${med.stock <= med.reorderLevel ? "pill-danger" : ""}`}>
                {med.stock <= med.reorderLevel ? "Low stock" : "In stock"}
              </span>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

export default Pharmacy;
