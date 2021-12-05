import CategoryListItem from "./CategoryListItem.js";

export default function CategoryList({ categories }) {
  return (
    <div
      style={{
        border: "2px solid green",
        padding: "10px",
        marginTop: "10px"
      }}
    >
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
