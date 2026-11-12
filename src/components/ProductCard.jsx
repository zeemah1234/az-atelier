export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <img src={product.image} alt={product.alt} loading="lazy" />
      <div className="product-body">
        <p className="product-category">{product.category}</p>
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">{product.price}</p>
      </div>
    </article>
  );
}