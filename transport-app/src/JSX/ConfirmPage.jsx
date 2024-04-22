import React from "react";
import { useCart } from "../CartContext";
import { useNavigate, useLocation } from "react-router-dom";
import "../Styling/ConfirmPage.css";

const ConfirmationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cart, quantities } = location.state;
  const { clearCart } = useCart();

  const handleNavigateBack = () => {
    clearCart();
    navigate("/");
  };

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * quantities[item.id],
    0
  );

  return (
    <main className="confirm-page">
      <h2>Your Purchase:</h2>
      <section>
        <ul className="confirm-list">
          {cart.map((item) => (
            <li key={item.id} className="confirm-item">
              <p>
                {item.title} - x{quantities[item.id]}
              </p>
            </li>
          ))}
        </ul>
        <p className="total-cost">Total Cart Cost: R{cartTotal}</p>
      </section>
      <button className="back" onClick={handleNavigateBack}>
        Back to Ticket Purchase
      </button>
    </main>
  );
};

export default ConfirmationPage;
