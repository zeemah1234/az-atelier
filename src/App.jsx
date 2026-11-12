import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProductList from "./components/ProductList";

export default function App() {
  // darkMode lives here so the whole page can use it
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode((prev) => !prev)}
      />

      <main>
        <Hero />
        <About />
        <ProductList />

        {/* Placeholders: replace with real components later */}
        <section id="faq" className="section">
          <h2>FAQ</h2>
          <p>FAQ accordion goes here.</p>
        </section>
        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>Enquiry and appointment forms go here.</p>
        </section>
      </main>
    </div>
  );
}