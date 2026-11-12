import { useState } from "react";
import { isValidEmail } from "../validation";

const emptyForm = { name: "", email: "", message: "" };

export default function EnquiryForm() {
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

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in your name, email and message.");
      return;
    }
    if (!isValidEmail(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setDone(true);
    setForm(emptyForm);
  };

  return (
    <form className="form-card" onSubmit={handleSubmit} noValidate>
      <h3>Send an enquiry</h3>
      <p className="form-note">
        This form is for practice. Nothing is sent or saved.
      </p>

      <label htmlFor="enq-name">Name</label>
      <input
        id="enq-name"
        name="name"
        type="text"
        value={form.name}
        onChange={handleChange}
      />

      <label htmlFor="enq-email">Email</label>
      <input
        id="enq-email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
      />

      <label htmlFor="enq-message">Message</label>
      <textarea
        id="enq-message"
        name="message"
        rows="4"
        value={form.message}
        onChange={handleChange}
      />

      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      {done && (
        <p className="form-success" role="status">
          Demo enquiry completed. No message has been sent.
        </p>
      )}

      <button type="submit" className="btn">
        Send enquiry
      </button>
    </form>
  );
}