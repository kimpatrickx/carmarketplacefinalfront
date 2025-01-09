// src/pages/Home.js

import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [search, setSearch] = useState("");
  
  const cars = [
    { id: 1, model: "Toyota Corolla", price: "$15,000", location: "Springfield, USA", image: "https://via.placeholder.com/300x200" },
    { id: 2, model: "Honda Civic", price: "$18,000", location: "Boston, USA", image: "https://via.placeholder.com/300x200" },
    { id: 3, model: "Ford Mustang", price: "$25,000", location: "New York, USA", image: "https://via.placeholder.com/300x200" },
    { id: 4, model: "Chevrolet Camaro", price: "$22,000", location: "Los Angeles, USA", image: "https://via.placeholder.com/300x200" },
    { id: 5, model: "BMW X5", price: "$45,000", location: "Miami, USA", image: "https://via.placeholder.com/300x200" },
    { id: 6, model: "Tesla Model 3", price: "$35,000", location: "Chicago, USA", image: "https://via.placeholder.com/300x200" },
  ];

  const filteredCars = cars.filter((car) => car.model.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="home-page">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for cars..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />
      </div>

      <div className="car-grid">
        {filteredCars.map((car) => (
          <div key={car.id} className="car-card">
            <img src={car.image} alt={car.model} className="car-image" />
            <div className="car-info">
              <h3>{car.model}</h3>
              <p className="car-price">{car.price}</p>
              <p className="car-location">{car.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;