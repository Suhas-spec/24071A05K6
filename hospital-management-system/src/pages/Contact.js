import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  message: ""
};

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("Message sent successfully. Our team will contact you soon.");
    setFormData(initialForm);
  };

  return (
    <section className="contact-grid">
      <article className="contact-card">
        <p className="section-label">Contact page</p>
        <h1>Reach the CityCare help desk</h1>
        <p className="section-copy">
          Use this page to contact reception, the support team, or the hospital
          administration desk.
        </p>

        <form className="form-grid" onSubmit={handleSubmit}>
          <label className="field-label" htmlFor="contact-name">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            className="text-input"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label className="field-label" htmlFor="contact-email">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            className="text-input"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label className="field-label" htmlFor="contact-message">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            className="text-area"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button className="primary-button" type="submit">
            Send message
          </button>
        </form>

        {status ? <p className="status-text">{status}</p> : null}
      </article>

      <article className="contact-card">
        <p className="section-label">Hospital info</p>
        <h2>Support details</h2>
        <div className="contact-list">
          <p>
            <strong>Address:</strong> 24 Wellness Avenue, Hyderabad
          </p>
          <p>
            <strong>Phone:</strong> +91 98765 43210
          </p>
          <p>
            <strong>Email:</strong> support@citycarehospital.com
          </p>
          <p>
            <strong>Emergency:</strong> Open 24 / 7
          </p>
        </div>
        <div className="mini-summary">
          Reception, OPD booking, and patient support are available from 8:00
          AM to 8:00 PM every day.
        </div>
      </article>
    </section>
  );
}

export default Contact;
