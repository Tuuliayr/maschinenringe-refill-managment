import React, { useState } from "react";
import ProductCard from "../../base/ProductCards.js";

const ProductsOverview = () => {
  const data = [
    { id: 1, value: "Tomato", inStock: "in stock", unit: "5 kg" },
    { id: 2, value: "Cucumber", inStock: "in stock", unit: "5 kg" },
    { id: 3, value: "Eggs", inStock: "in stock", unit: "6 pcs" },
    { id: 4, value: "Cabbage", inStock: "in stock", unit: "5 kg" },
    { id: 5, value: "Onions", inStock: "in stock", unit: "5 kg" },
    { id: 6, value: "Potato", inStock: "out of stock", unit: "5 kg" },
    { id: 7, value: "Mushroom", inStock: "in stock", unit: "5 kg" },
  ];
  const [products, setProducts] = useState(data);

  return (
    <div>
      {products.map((product) => (
        <ProductCard
          name={product.value}
          inStock={product.inStock}
          unit={product.unit}
        />
      ))}
    </div>
  );
};

export default ProductsOverview;