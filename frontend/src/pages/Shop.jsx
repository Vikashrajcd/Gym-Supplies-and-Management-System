import React from "react";
import "../styles/Shop.css"; 

function Shop() {
  
  const products = [
    {
      id: 1,
      name: "Whey Protein",
      price: "$40",
      image: "/images/whey-protein.jpg",
    },
    {
      id: 2,
      name: "Gym Gloves",
      price: "$15",
      image: "/images/gym-gloves.jpg",
    },
    {
      id: 3,
      name: "Creatine Powder",
      price: "$25",
      image: "/images/creatine.jpg",
    },
    {
      id: 4,
      name: "Gym T-Shirt",
      price: "$20",
      image: "/images/gym-tshirt.jpg",
    },
  ];

  return (
    <div className="shop-container">
      <h1>Shop Supplements & Gym Wear</h1>
      <p>Explore our collection of fitness products.</p>

      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
