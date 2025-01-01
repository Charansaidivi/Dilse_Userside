import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../pages/apiData";

const ProductMenu = () => {
  const { firmId } = useParams(); // Extract firmId from useParams
  const [restaurantData, setRestaurantData] = useState({}); // To store restaurant name and product data

  const fetchRestaurantData = async () => {
    try {
      const response = await fetch(`${API_URL}/product/${firmId}/products`);
      if (!response.ok) {
        throw new Error("Failed to fetch restaurant data");
      }
      const data = await response.json(); // Use await with .json()
      setRestaurantData(data); // Set the entire response object
      console.log(data);
    } catch (error) {
      alert("Error while fetching restaurant data");
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchRestaurantData();
  }, [firmId]); // Add firmId as a dependency to refetch on changes

  return (
    <section className="product-group">
      {/* Dynamically render restaurant name */}
      <h1 className="restaurant-name">{restaurantData.resturantName || "Restaurant"}</h1>
      
      {/* Check if products exist */}
      {restaurantData.product && restaurantData.product.length > 0 ? (
        restaurantData.product.map((product) => (
          <div className="product-card" key={product._id}>
            <div className="product-info">
              <h2 className="product-name">{product.productName}</h2>
              <p className="product-price">₹{product.price}</p>
              <p className="product-description">{product.description}</p>
            </div>
            <div className="product-actions">
              <img
                src={`${API_URL}/uploads/${product.image}`}
                alt={product.productName}
                className="product-image"
              />
              <button className="add-button">ADD</button>
            </div>
          </div>
        ))
      ) : (
        <p className="no-products">No products available</p>
      )}
    </section>
  );
};

export default ProductMenu;
