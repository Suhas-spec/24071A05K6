import { useEffect, useState } from "react";
import { doctors, initialAppointments, initialPatients } from "../data/mockData";

const APPOINTMENTS_KEY = "hmsAppointments";
const PATIENTS_KEY = "hmsPatients";

const defaultForm = {
  patientName: "",
  doctorName: doctors[0].name,
  date: "",
  time: "",
  reason: ""
};

function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [patients, setPatients] = useState([]);
  const [formData, setFormData] = useState(defaultForm);

  useEffect(() => {
    const savedPatients = localStorage.getItem(PATIENTS_KEY);
    const resolvedPatients = savedPatients
      ? JSON.parse(savedPatients)
      : initialPatients;
    setPatients(resolvedPatients);
    setFormData((current) => ({
      ...current,
      patientName: resolvedPatients[0]?.name || ""
    }));

    const savedAppointments = localStorage.getItem(APPOINTMENTS_KEY);
    if (!savedAppointments) {
      localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(initialAppointments));
      setAppointments(initialAppointments);
      return;
    }

    setAppointments(JSON.parse(savedAppointments));
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

    const newAppointment = {
      id: Date.now(),
      ...formData,
      status: "Confirmed"
    };

    const updatedAppointments = [newAppointment, ...appointments];
    setAppointments(updatedAppointments);
    localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(updatedAppointments));
    setFormData({
      ...defaultForm,
      patientName: patients[0]?.name || "",
      date: "",
      time: "",
      reason: ""
    });
  };

  return (
    <section className="two-column">
      <article className="form-card">
        <p className="section-label">Appointment booking</p>
        <h2>Book a consultation</h2>
        <form className="form-grid" onSubmit={handleSubmit}>
          <label className="field-label" htmlFor="patientName">
            Select Patient
          </label>
          <select
            id="patientName"
            name="patientName"
            className="select-input"
            value={formData.patientName}
            onChange={handleChange}
          >
            {patients.map((patient) => (
              <option key={patient.id}>{patient.name}</option>
            ))}
          </select>

          <label className="field-label" htmlFor="doctorName">
            Select Doctor
          </label>
          <select
            id="doctorName"
            name="doctorName"
            className="select-input"
            value={formData.doctorName}
            onChange={handleChange}
          >
            {doctors.map((doctor) => (
              <option key={doctor.id}>{doctor.name}</option>
            ))}
          </select>

          <div className="form-columns">
            <div className="form-grid">
              <label className="field-label" htmlFor="date">
                Appointment Date
              </label>
              <input
                id="date"
                name="date"
                type="date"
                className="text-input"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-grid">
              <label className="field-label" htmlFor="time">
                Time
              </label>
              <input
                id="time"
                name="time"
                type="time"
                className="text-input"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <label className="field-label" htmlFor="reason">
            Reason
          </label>
          <textarea
            id="reason"
            name="reason"
            className="text-area"
            value={formData.reason}
            onChange={handleChange}
            required
          />

          <button type="submit" className="primary-button">
            Book appointment
          </button>
        </form>
      </article>

      <article className="content-card">
        <div className="card-heading">
          <h2>Scheduled Appointments</h2>
        </div>
        <div className="record-list">
          {appointments.map((appointment) => (
            <article className="record-item" key={appointment.id}>
              <div>
                <h3>{appointment.patientName}</h3>
                <p>
                  {appointment.doctorName} • {appointment.date} •{" "}
                  {appointment.time}
                </p>
                <p>{appointment.reason}</p>
              </div>
              <span className="pill">{appointment.status}</span>
            </article>
          ))}
        </div>
      </article>
    </section>
  );
}

export default Appointments;
