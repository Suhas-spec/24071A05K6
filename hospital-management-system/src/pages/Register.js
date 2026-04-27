import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  role: "Receptionist",
  password: ""
};

function Register() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      const response = register(formData);
      setStatus(response.message);
      setFormData(initialForm);
      window.setTimeout(() => {
        navigate("/login");
      }, 900);
    } catch (error) {
      setStatus(error.message);
    }
  };

  return (
    <section className="auth-card">
      <p className="section-label">Registration</p>
      <h1>Create hospital staff account</h1>
      <p className="section-copy">
        Register new staff, administrators, or reception desk users for the
        hospital portal.
      </p>

      <form className="form-grid" onSubmit={handleSubmit}>
        <div className="form-columns">
          <div className="form-grid">
            <label className="field-label" htmlFor="fullName">
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              className="text-input"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter full name"
              required
            />
          </div>

          <div className="form-grid">
            <label className="field-label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="text-input"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@hospital.com"
              required
            />
          </div>
        </div>

        <div className="form-columns">
          <div className="form-grid">
            <label className="field-label" htmlFor="phone">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              className="text-input"
              value={formData.phone}
              onChange={handleChange}
              placeholder="9876543210"
              required
            />
          </div>

          <div className="form-grid">
            <label className="field-label" htmlFor="role">
              Role
            </label>
            <select
              id="role"
              name="role"
              className="select-input"
              value={formData.role}
              onChange={handleChange}
            >
              <option>Receptionist</option>
              <option>Administrator</option>
              <option>Nurse</option>
              <option>Support Staff</option>
            </select>
          </div>
        </div>

        <label className="field-label" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          className="text-input"
          value={formData.password}
          onChange={handleChange}
          placeholder="Create password"
          required
        />

        <button type="submit" className="primary-button">
          Register
        </button>
      </form>

      {status ? <p className="status-text">{status}</p> : null}
    </section>
  );
}

export default Register;
