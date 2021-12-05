import { useEffect, useState } from "react";

export default function Home() {
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
      <h1>Usual Implementation</h1>

      <div style={{ border: "2px solid blue", padding: "10px" }}>
        <input
          type="text"
          placeholder="Enter Search Keyword..."
          onKeyUp={(e) => setKeyword(e.target.value)}
        />
        <div>
          <label>
            <input
              type="checkbox"
              onChange={(e) => setInStockOnly(e.target.checked)}
            />
            <span>Show In Stock Only</span>
          </label>
        </div>
      </div>

      <div
        style={{
          border: "2px solid green",
          padding: "10px",
          marginTop: "10px"
        }}
      >
        {categories.map((category, index) => {
          return (
            <div
              key={index}
              style={{
                border: "2px solid brown",
                padding: "10px",
                marginTop: "10px"
              }}
            >
              <h3>{category.name}</h3>
              {category.products.map((product, key) => {
                return (
                  <div
                    key={key}
                    style={{ color: product.available ? "black" : "red" }}
                  >
                    {product.name} {product.price}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}
