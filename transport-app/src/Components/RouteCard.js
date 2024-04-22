import React, { useState } from "react";
import "../Styling/RouteCard.css";
import routeInfo from "../Routes.json";

const RouteCard = ({ onRouteClick }) => {
  //these two states allow use to track which cards are currently showed so relevent options are available
  const [isLargeCardVisible, setIsLargeCardVisible] = useState(false);

  // Function to handle click event on a route card
  const handleClick = (route) => {
    onRouteClick(route);
    setIsLargeCardVisible(true);
    // This function is used to show detailed information about a route when a user clicks on its card.
  };

  // Rendered a list of route cards using routeInfo.map():
  // Each route card is rendered as an <article> element with the route title, duration, and cost displayed.
  // An onClick event handler is attached to each route card to trigger the handleClick function when clicked.
  return (
    <section className="route-contain">
      {isLargeCardVisible
        ? null
        : routeInfo.map((route) => (
            <article
              className="route"
              key={route.id}
              onClick={() => handleClick(route)}
            >
              <h2>{route.title}</h2>
              <p>Duration: {route.duration}</p>
              <p>Cost: R{route.price}</p>
            </article>
          ))}
    </section>
  );
};

export default RouteCard;
