import React from "react";
import "../Styling/navbar.css";
import { ShoppingCart, House } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom"; //

//this is what allows toggling between the available tickets page and the cart
const NavBar = () => {
  //this is what allows us to access the function from useNavigate and progammatically naviagte between pages
  const navigate = useNavigate();

  //the following functions use useNavigate to conduct the swtiching between cart and home page
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
          {/* tracks clicks on the nav buttons to accurate switch to the clicked page */}
          <button onClick={goToCartPage}>
            Cart <ShoppingCart className="nav-icon" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
