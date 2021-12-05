import ProductCard from "../components/products/ProductCard";
import ProductList from "../components/products/ProductList";

export default function Vendor() {
  const products = [
    {
      name: "Shoe #1",
      price: 2500,
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5ccfe0e3-dde3-48b9-aa65-0a726765d188/air-max-alpha-trainer-4-training-shoe-phsD5s.png",
      available: true
    },
    {
      name: "Shoes #2",
      price: 3000,
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/28a004bf-42ad-4d7c-804b-ac28d1d4bed6/air-presto-shoes-QdhgZW.png",
      available: true
    },
    {
      name: "Show #3",
      price: 3200,
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/31d5f3fc-69f1-4248-af95-e8e6c9ac4ea9/precision-5-basketball-shoe-dRqLr4.png",
      available: true
    }
  ];

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Nike</h1>

      <p className="text-left text-sm mb-4">
        Any Place. Any Time. Any Condition. Be Your Best Every Time With Nike
        Shoes And Clothing. The Official Website. Home Of Everything Nike. Shop
        The Latest Releases Today.
      </p>

      <h3 className="font-bold mb-3 mt-8">Latest Products</h3>
      <ProductList products={products} />

      <h3 className="font-bold mb-3 mt-8">Component Using Default Props</h3>
      <ProductCard />

      <h3 className="font-bold my-3">Component with Props</h3>
      <ProductCard
        name="Test Product"
        price="56"
        image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/28a004bf-42ad-4d7c-804b-ac28d1d4bed6/air-presto-shoes-QdhgZW.png"
      />
    </div>
  );
}
