import EnquiryForm from "./EnquiryForm";
import AppointmentForm from "./AppointmentForm";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact us</h2>
      <p className="contact-intro">
        Ask about an outfit or book a fitting.
      </p>

      <ul className="contact-details">
        <li>Address: 12 Oshin Street, Ikeja, Lagos</li>
        <li>Phone: 08103140077</li>
        <li>Email: balogunazeemah0@gmail.com</li>
        <li>Open: Monday to Saturday, 9am to 6pm</li>
      </ul>

      <div className="forms-grid">
        <EnquiryForm />
        <AppointmentForm />
      </div>
    </section>
  );
}