import Product from "./Product";

export default function CategoryListItem({ name, products }) {
  return (
    <div
      style={{
        border: "2px solid brown",
        padding: "10px",
        marginTop: "10px"
      }}
    >
      <h3>{name}</h3>
      {products.map((product, index) => {
        return <Product key={index} product={product} />;
      })}
    </div>
  );
}
