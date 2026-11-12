import { useState } from "react";
import { products } from "../data";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);

  const term = search.trim().toLowerCase();
  const searching = term !== "";

  // Search checks every product, including the hidden ones
  const matches = products.filter((product) =>
    product.name.toLowerCase().includes(term)
  );

  // First three only, unless View all is on or the visitor is searching
  const visible = showAll || searching ? matches : matches.slice(0, 3);

  return (
    <section id="shop" className="section">
      <h2>Collection</h2>

      <div className="shop-tools">
        <label htmlFor="search">Search the collection</label>
        <input
          id="search"
          type="search"
          placeholder="Try gown, kaftan or blazer"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {visible.length === 0 ? (
        <p className="no-results">No products found</p>
      ) : (
        <div className="product-grid">
          {visible.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {!searching && (
        <div className="view-all">
          <button
            type="button"
            className="btn"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "Show less" : "View all"}
          </button>
        </div>
      )}
    </section>
  );
}