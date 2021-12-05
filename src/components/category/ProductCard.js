export default function ProductCard({ product }) {
  return (
    <div class="border border-gray-400 p-2">
      <img
        src={product.image}
        width={150}
        height={150}
        alt={product.name}
        class="m-auto rounded-lg"
      />
      <p className={product.available ? "text-gray-900" : "text-red-600"}>
        {product.name} {product.price}
      </p>
    </div>
  );
}
