import ProductList from "../products/ProductList";
import PropTypes from "prop-types";

export default function CategoryListItem({ name, products }) {
  return (
    <div className="border-2 border-yellow-500 p-4 mb-4">
      <h3>{name}</h3>

      <ProductList products={products} />
    </div>
  );
}

CategoryListItem.defaultProps = {
  name: "Your Category Name Here",
  products: []
};

CategoryListItem.propTypes = {
  name: PropTypes.string,
  products: PropTypes.array
};
