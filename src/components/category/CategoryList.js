import CategoryListItem from "./CategoryListItem.js";
import PropTypes from "prop-types";

export default function CategoryList({ categories }) {
  return (
    <div className="border-2 border-green-400 p-4 mt-4">
      {categories.map((category, index) => {
        return (
          <CategoryListItem
            key={index}
            name={category.name}
            products={category.products}
          />
        );
      })}
    </div>
  );
}

CategoryList.defaultProps = {
  categories: []
};

CategoryList.propTypes = {
  categories: PropTypes.array
};
