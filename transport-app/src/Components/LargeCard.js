import React from "react";
import "../Styling/LargeCard.css";
import { XCircle } from "@phosphor-icons/react";
import { useCart } from "../CartContext";

// This component which is activated after clicking a smaller card will show detailed information regarding the clicked route
function LargeCard({ clickedRoute, onClose }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(clickedRoute);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <section className="Large-Card">
      <button className="close-btn" onClick={handleClose}>
        <XCircle />
      </button>
      <h2>{clickedRoute.title}</h2>
      <p>Trip Duration: {clickedRoute.duration}</p>
      <p>Number of Stops: {clickedRoute.stops}</p>
      <p>Trip Cost: R{clickedRoute.price}</p>
      <p>About the trip: {clickedRoute.description}</p>
      <button className="checkout-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </section>
  );
}

export default LargeCard;
