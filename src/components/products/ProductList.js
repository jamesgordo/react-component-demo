import ProductCard from "./ProductCard";
import PropTypes from "prop-types";

export default function ProductList({ products }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product, index) => {
        const { name, image, price, available } = product;
        return (
          <ProductCard
            key={index}
            name={name}
            image={image}
            price={price}
            available={available}
          />
        );
      })}
    </div>
  );
}

ProductList.defaultProps = {
  products: []
};

ProductList.propTypes = {
  products: PropTypes.array
};
