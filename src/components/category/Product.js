export default function Product({ product }) {
  return (
    <div style={{ color: product.available ? "black" : "red" }}>
      {product.name} {product.price}
    </div>
  );
}
