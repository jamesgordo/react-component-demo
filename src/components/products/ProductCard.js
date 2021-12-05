import PropTypes from "prop-types";

export default function ProductCard({ name, image, price, available }) {
  return (
    <div className="border border-gray-400 p-2">
      <img
        src={image}
        width={150}
        height={150}
        alt={name}
        className="m-auto rounded-lg"
      />
      <p className={available ? "text-gray-900" : "text-red-600"}>
        {name} ${price}
      </p>
    </div>
  );
}

ProductCard.defaultProps = {
  name: "Product Name Here",
  image:
    "https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png",
  price: 0,
  available: true
};

ProductCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  available: PropTypes.bool
};
