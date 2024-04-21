import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import RouteCard from "./Components/RouteCard";
import Cart from "./JSX/Cart";
import LargeCard from "./Components/LargeCard";

function App() {
  const [isLargeCardVisible, setIsLargeCardVisible] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState(null);

  const handleRouteClick = (route) => {
    setSelectedRoute(route);
    setIsLargeCardVisible(true);
  };

  const handleCloseLargeCard = () => {
    setIsLargeCardVisible(false);
  };

  return (
    <Router>
      <div className="App">
        <header>
          <h1>Transport App</h1>
          <NavBar />
        </header>
        <main>
          <Routes>
            {isLargeCardVisible ? null : (
              <Route
                path="/"
                element={<RouteCard onRouteClick={handleRouteClick} />}
              />
            )}
            <Route path="/cart" element={<Cart />} />
          </Routes>
          {isLargeCardVisible && (
            <LargeCard
              clickedRoute={selectedRoute}
              onClose={handleCloseLargeCard}
            />
          )}
        </main>
        <footer></footer>
      </div>
    </Router>
  );
}

export default App;
