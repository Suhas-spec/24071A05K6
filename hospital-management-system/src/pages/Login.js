import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login, currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      navigate("/dashboard");
    }
  }, [currentUser, navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.email.trim() || !formData.password.trim()) {
      setStatus("Enter both email and password.");
      return;
    }

    try {
      setLoading(true);
      setStatus("");
      const response = login(formData);
      setStatus(response.message);
      navigate("/dashboard");
    } catch (error) {
      setStatus(error.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="auth-card">
      <p className="section-label">Secure access</p>
      <h1>Login to Hospital Managment System-React</h1>
      <p className="section-copy">
        Use the demo admin account or any user you register from the
        registration page.
      </p>

      <form className="form-grid" onSubmit={handleSubmit}>
        <label className="field-label" htmlFor="login-email">
          Email
        </label>
        <input
          id="login-email"
          name="email"
          className="text-input"
          type="email"
          placeholder="admin@citycare.com"
          value={formData.email}
          onChange={handleChange}
        />

        <label className="field-label" htmlFor="login-password">
          Password
        </label>
        <input
          id="login-password"
          name="password"
          className="text-input"
          type="password"
          placeholder="Admin123"
          value={formData.password}
          onChange={handleChange}
        />

        <button className="primary-button" type="submit" disabled={loading}>
          {loading ? "Signing in..." : "Login"}
        </button>
      </form>

      {status ? <p className="status-text">{status}</p> : null}

      <div className="note-card">
        <p>
          <strong>Demo account:</strong> admin@citycare.com
        </p>
        <p>
          <strong>Password:</strong> Admin123
        </p>
      </div>
    </section>
  );
}

export default Login;
