import ProductCard from "./ProductCard";

export default function CategoryListItem({ name, products }) {
  return (
    <div className="border-2 border-yellow-500 p-4 mb-4">
      <h3>{name}</h3>

      <div class="grid grid-cols-3 gap-4">
        {products.map((product, index) => {
          return <ProductCard key={index} product={product} />;
        })}
      </div>
    </div>
  );
}
