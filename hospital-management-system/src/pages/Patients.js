import { useEffect, useState } from "react";
import { initialPatients } from "../data/mockData";

const PATIENTS_KEY = "hmsPatients";

const defaultForm = {
  name: "",
  age: "",
  gender: "Male",
  condition: ""
};

function Patients() {
  const [patients, setPatients] = useState([]);
  const [formData, setFormData] = useState(defaultForm);

  useEffect(() => {
    const savedPatients = localStorage.getItem(PATIENTS_KEY);
    if (!savedPatients) {
      localStorage.setItem(PATIENTS_KEY, JSON.stringify(initialPatients));
      setPatients(initialPatients);
      return;
    }

    setPatients(JSON.parse(savedPatients));
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPatient = {
      id: Date.now(),
      name: formData.name.trim(),
      age: Number(formData.age),
      gender: formData.gender,
      condition: formData.condition.trim()
    };

    const updatedPatients = [newPatient, ...patients];
    setPatients(updatedPatients);
    localStorage.setItem(PATIENTS_KEY, JSON.stringify(updatedPatients));
    setFormData(defaultForm);
  };

  return (
    <section className="two-column">
      <article className="form-card">
        <p className="section-label">Patient form</p>
        <h2>Add patient details</h2>
        <form className="form-grid" onSubmit={handleSubmit}>
          <label className="field-label" htmlFor="patient-name">
            Patient Name
          </label>
          <input
            id="patient-name"
            name="name"
            className="text-input"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <div className="form-columns">
            <div className="form-grid">
              <label className="field-label" htmlFor="patient-age">
                Age
              </label>
              <input
                id="patient-age"
                name="age"
                type="number"
                className="text-input"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-grid">
              <label className="field-label" htmlFor="patient-gender">
                Gender
              </label>
              <select
                id="patient-gender"
                name="gender"
                className="select-input"
                value={formData.gender}
                onChange={handleChange}
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <label className="field-label" htmlFor="patient-condition">
            Medical Condition
          </label>
          <textarea
            id="patient-condition"
            name="condition"
            className="text-area"
            value={formData.condition}
            onChange={handleChange}
            required
          />

          <button className="primary-button" type="submit">
            Save patient
          </button>
        </form>
      </article>

      <article className="content-card">
        <div className="card-heading">
          <h2>Patient Records</h2>
        </div>
        <div className="table-list">
          {patients.map((patient) => (
            <div className="table-item" key={patient.id}>
              <strong>{patient.name}</strong>
              <span>{patient.age} years</span>
              <span>{patient.gender}</span>
              <span>{patient.condition}</span>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

export default Patients;
