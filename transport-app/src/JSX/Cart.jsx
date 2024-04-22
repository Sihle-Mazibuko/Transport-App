import React, { useState } from "react";
import { useCart } from "../CartContext";
import {
  Info,
  Trash,
  PlusCircle,
  MinusCircle,
  Clock,
} from "@phosphor-icons/react";
import "../Styling/Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  //cartContext contains this components that allow alterations to the components in the caart
  const { cart, removeFromCart } = useCart();
  //this helps keep track of the routes in cart like their price and quantity for the ticket confirmed page
  const [quantities, setQuantities] = useState(
    Object.fromEntries(cart.map((item) => [item.id, 1]))
  );
  const navigate = useNavigate();

  //this builds on the useState keeping track of the change in the amount of tickets
  const handleTicketQuantityChange = (itemId, increment) => {
    const newQuantities = { ...quantities };
    newQuantities[itemId] += increment;
    //this next section allows the route quantity to stay above 1 and onyl allow deletion through the bin AND ensure 0 qunatities dont appar
    if (newQuantities[itemId] < 1) {
      newQuantities[itemId] = 1;
    }
    setQuantities(newQuantities);
    const total = cart.reduce(
      (acc, item) => acc + item.price * newQuantities[item.id],
      0
    );
    console.log("Quantity updated:", newQuantities);
    console.log("Total cart price:", total);
  };

  //controls the removal of a route from the cart
  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);

    const newQuantities = { ...quantities };
    delete newQuantities[itemId];
    setQuantities(newQuantities);
  };

  const cartTotal = () => {
    return cart.reduce(
      (total, item) => total + item.price * quantities[item.id],
      0
    );
  };

  //function to handle buying tickets along with adding a 2 second delay before confirming
  const handlePurchaseTickets = () => {
    setTimeout(() => {
      navigate("/confirm", { state: { cart, quantities, total: cartTotal() } });
    }, 2000);
  };

  return (
    <main>
      <h2>Cart Page</h2>
      {cart.length === 0 ? (
        <p>You have no routes in your cart</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <article>
                  <h3>{item.title}</h3>
                  <p>
                    <Clock />
                    Time: {item.duration}
                  </p>
                  <p>
                    <Info />
                    Stops: {item.stops}
                  </p>
                  <p>
                    <Info />: {item.description}
                  </p>
                  <section className="ticket-quatity">
                    <button
                      onClick={() => handleTicketQuantityChange(item.id, -1)}
                    >
                      <MinusCircle />
                    </button>
                    <span>{quantities[item.id]}</span>
                    <button
                      onClick={() => handleTicketQuantityChange(item.id, 1)}
                    >
                      <PlusCircle />
                    </button>
                  </section>
                  <button onClick={() => handleRemoveFromCart(item.id)}>
                    <Trash />
                  </button>
                </article>
              </li>
            ))}
          </ul>
          <section className="cart-info">
            <p>Total: R{cartTotal()}</p>
            <button onClick={handlePurchaseTickets}>Checkout</button>
          </section>
        </>
      )}
    </main>
  );
};

export default Cart;
