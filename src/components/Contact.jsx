import EnquiryForm from "./EnquiryForm";
import AppointmentForm from "./AppointmentForm";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact us</h2>
      <p className="contact-intro">
        Ask about an outfit or book a fitting. The details and forms below are
        a demonstration for a fictional business.
      </p>

      <ul className="contact-details">
        <li>Address: 12 Sample Street, Ikeja, Lagos (fictional)</li>
        <li>Phone: +234 800 000 0000 (fictional)</li>
        <li>Email: hello@azatelier.example (fictional)</li>
        <li>Open: Monday to Saturday, 9am to 6pm</li>
      </ul>

      <div className="forms-grid">
        <EnquiryForm />
        <AppointmentForm />
      </div>
    </section>
  );
}