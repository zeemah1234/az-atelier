import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProductList from "./components/ProductList";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}