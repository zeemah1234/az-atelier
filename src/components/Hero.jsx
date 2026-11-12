export default function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="hero-text">
        <h1>Native wear, gowns and corporate wear made for you</h1>
        <p>
          AZ Atelier creates stylish outfits for everyday wear and special
          occasions. Browse the collection, then send an enquiry or book a
          fitting.
        </p>
        <a href="#shop" className="btn">
          Shop the collection
        </a>
      </div>
      <div className="hero-image">
        <img
          src="/images/hero.jpg"
          alt="Woman wearing an AZ Atelier outfit"
        />
      </div>
    </section>
  );
}