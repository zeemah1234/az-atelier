import { useState } from "react";
import { isValidEmail, todayString } from "../validation";

const services = [
  "Fitting",
  "Styling session",
  "Alterations",
  "Custom order consultation",
];

const emptyForm = { name: "", email: "", date: "", time: "", service: "" };

export default function AppointmentForm() {
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setDone(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // stops the page reloading
    setDone(false);

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.date ||
      !form.time ||
      !form.service
    ) {
      setError("Please fill in every field.");
      return;
    }
    if (!isValidEmail(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (form.date < todayString()) {
      setError("Please choose today or a future date.");
      return;
    }

    setError("");
    setDone(true);
    setForm(emptyForm);
  };

  return (
    <form className="form-card" onSubmit={handleSubmit} noValidate>
      <h3>Book an appointment</h3>
      <p className="form-note">
        This form is for practice. No appointment is booked.
      </p>

      <label htmlFor="apt-name">Name</label>
      <input
        id="apt-name"
        name="name"
        type="text"
        value={form.name}
        onChange={handleChange}
      />

      <label htmlFor="apt-email">Email</label>
      <input
        id="apt-email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
      />

      <label htmlFor="apt-service">Service</label>
      <select
        id="apt-service"
        name="service"
        value={form.service}
        onChange={handleChange}
      >
        <option value="">Choose a service</option>
        {services.map((service) => (
          <option key={service} value={service}>
            {service}
          </option>
        ))}
      </select>

      <div className="form-row">
        <div>
          <label htmlFor="apt-date">Date</label>
          <input
            id="apt-date"
            name="date"
            type="date"
            min={todayString()}
            value={form.date}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="apt-time">Time</label>
          <input
            id="apt-time"
            name="time"
            type="time"
            value={form.time}
            onChange={handleChange}
          />
        </div>
      </div>

      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      {done && (
        <p className="form-success" role="status">
          Demo appointment request completed. No appointment has been booked.
        </p>
      )}

      <button type="submit" className="btn">
        Book appointment
      </button>
    </form>
  );
}