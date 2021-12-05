import CategoryListItem from "./CategoryListItem.js";

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
