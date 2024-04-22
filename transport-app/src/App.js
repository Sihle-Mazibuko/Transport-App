import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import RouteCard from "./Components/RouteCard";
import Cart from "./JSX/Cart";
import LargeCard from "./Components/LargeCard";
import { CartProvider } from "./CartContext";
import ConfirmPage from "./JSX/ConfirmPage";

/*Router Setup = We are using BrowserRouter from react-router-dom to enable routing functionality in our application.
CartProvider = This component wraps the entire application, providing the context for managing the shopping cart state. 
               It ensures that the cart data and related functions are available to all components within its scope. */

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
      <CartProvider>
        <div className="App">
          <header>
            <h1>Transport App</h1>
            <NavBar />
          </header>
          <main>
            <Routes>
              {/* Routing Logic = the Routes component from react-router-dom is used to handle the routing logic. 
                            Different pages are specified along with their corresponding routes to be rendered when the conditions in other scriprs are met (button click)*/}
              {isLargeCardVisible ? null : (
                <Route
                  path="/"
                  element={<RouteCard onRouteClick={handleRouteClick} />}
                />
              )}
              <Route path="/cart" element={<Cart />} />
              <Route path="/confirm" element={<ConfirmPage />} />
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
      </CartProvider>
    </Router>
  );
}

export default App;
