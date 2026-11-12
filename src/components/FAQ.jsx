import { useState } from "react";
import { faqs } from "../data";

export default function FAQ() {
  // id of the open question, or null when none is open
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section id="faq" className="section">
      <h2>Frequently asked questions</h2>

      <div className="faq-list">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div key={faq.id} className="faq-item">
              <h3>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
                </button>
              </h3>
              {isOpen && <p className="faq-answer">{faq.answer}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}