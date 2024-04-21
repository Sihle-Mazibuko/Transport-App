import React, { useState } from "react";
import "../Styling/RouteCard.css";
import routeInfo from "../Routes.json";

const RouteCard = ({ onRouteClick }) => {
  const [isLargeCardVisible, setIsLargeCardVisible] = useState(false);

  const handleClick = (route) => {
    onRouteClick(route);
    setIsLargeCardVisible(true);
  };

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
