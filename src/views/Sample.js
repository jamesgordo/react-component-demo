import { useEffect, useState } from "react";
import CategoryList from "../components/category/CategoryList.js";
import Filter from "../components/Filter.js";

export default function Sample() {
  const [categories, setCategories] = useState([]);
  const [keyword, setKeyword] = useState(null);
  const [inStockOnly, setInStockOnly] = useState(false);

  useEffect(() => filterList(), [keyword, inStockOnly]);

  const filterList = () => {
    const data = [
      {
        name: "Sporting Goods",
        products: [
          {
            price: "$49.99",
            available: true,
            name: "Football"
          },
          {
            price: "$9.99",
            available: true,
            name: "Baseball"
          },
          {
            price: "$29.99",
            available: false,
            name: "Basketball"
          }
        ]
      },
      {
        name: "Electronics",
        products: [
          {
            category: "Electronics",
            price: "$99.99",
            available: true,
            name: "iPod Touch"
          },
          {
            category: "Electronics",
            price: "$399.99",
            available: false,
            name: "iPhone 5"
          },
          {
            category: "Electronics",
            price: "$199.99",
            available: true,
            name: "Nexus 7"
          }
        ]
      }
    ];

    // rows to render
    const rows = [];

    data.map((category) => {
      const products = [];

      category.products.map((product) => {
        if (keyword && product.name.toLowerCase().indexOf(keyword) === -1) {
          return;
        }

        if (inStockOnly && !product.available) {
          return;
        }

        products.push(product);

        return product;
      });

      category.products = products;

      rows.push(category);

      return category;
    });

    setCategories(rows);
  };

  return (
    <>
      <h1>Component Style Implementation</h1>

      <Filter onSearch={setKeyword} onCheck={setInStockOnly} />

      <CategoryList categories={categories} />
    </>
  );
}
