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
            name: "Football",
            image: "https://picsum.photos/id/15/150/150"
          },
          {
            price: "$9.99",
            available: true,
            name: "Baseball",
            image: "https://picsum.photos/id/25/150/150"
          },
          {
            price: "$29.99",
            available: false,
            name: "Basketball",
            image: "https://picsum.photos/id/51/150/150"
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
            name: "iPod Touch",
            image: "https://picsum.photos/id/91/150/150"
          },
          {
            category: "Electronics",
            price: "$399.99",
            available: false,
            name: "iPhone 5",
            image: "https://picsum.photos/id/101/150/150"
          },
          {
            category: "Electronics",
            price: "$199.99",
            available: true,
            name: "Nexus 7",
            image: "https://picsum.photos/id/1001/150/150"
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
          return product;
        }

        if (inStockOnly && !product.available) {
          return product;
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
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-xl mb-2">Usual Implementation</h1>

      <div className="border-2 border-white p-4">
        <input
          onKeyUp={(e) => setKeyword(e.target.value)}
          type="text"
          placeholder="Enter Search Keyword..."
          className="border rounded-md border-gray-400 p-2 mb-2 text-sm"
        />
        <div>
          <label className="flex items-center justify-center">
            <input
              type="checkbox"
              onChange={(e) => setInStockOnly(e.target.checked)}
            />
            <span className="text-sm ml-2">Show In Stock Only</span>
          </label>
        </div>
      </div>

      <div className="border-2 border-white p-4 mt-4">
        {categories.map((category, index) => {
          return (
            <div key={index} className="border-2 border-white p-4 mb-4">
              <h3>{category.name}</h3>
              <div className="grid grid-cols-3 gap-4">
                {category.products.map((product, key) => {
                  return (
                    <div key={key} className="border border-white p-2">
                      <img
                        src={product.image}
                        width={150}
                        height={150}
                        alt={product.name}
                        className="m-auto rounded-lg"
                      />
                      <p
                        className={
                          product.available ? "text-gray-900" : "text-red-600"
                        }
                      >
                        {product.name} {product.price}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
