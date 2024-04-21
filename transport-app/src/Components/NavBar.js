import React from "react";
import "../Styling/navbar.css";
import { ShoppingCart, House } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  const goToCartPage = () => {
    navigate("/cart");
  };

  return (
    <nav className="navBar">
      <ul className="navBar-list">
        <li className="navBar-item">
          <button onClick={goToHomePage}>
            Home <House className="nav-icon" />
          </button>
        </li>
        <li className="navBar-item">
          <button onClick={goToCartPage}>
            Cart <ShoppingCart className="nav-icon" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
