// src/pages/Profile.js

import React from "react";
import "./Profile.css";

const Profile = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    birthdate: "January 15, 1990",
    address: "123 Main Street, Springfield, USA",
    contactNumber: "+1 (555) 123-4567",
    avatar: "https://via.placeholder.com/150",
  };

  const carsSold = [
    { id: 1, model: "Toyota Corolla", price: "$15,000", date: "2023-09-10" },
    { id: 2, model: "Honda Civic", price: "$18,000", date: "2023-06-15" },
    { id: 3, model: "Ford Mustang", price: "$25,000", date: "2023-03-05" },
  ];

  const carsPending = [
    { id: 1, model: "Chevrolet Camaro", price: "$22,000", date: "2023-12-01" },
    { id: 2, model: "BMW X5", price: "$45,000", date: "2023-11-20" },
  ];

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <img src={user.avatar} alt="User Avatar" className="profile-avatar" />
          <h1 className="profile-name">{user.name}</h1>
        </div>
        <div className="profile-info">
          <h2>Information</h2>
          <p><strong>Birthdate:</strong> {user.birthdate}</p>
          <p><strong>Address:</strong> {user.address}</p>
          <p><strong>Contact:</strong> {user.contactNumber}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
        <div className="profile-actions">
          <button className="profile-button">Edit Profile</button>
          <button className="profile-button danger">Delete Account</button>
        </div>
      </div>

      <div className="cars-sold-container">
        <h2>Cars Sold</h2>
        <ul className="cars-sold-list">
          {carsSold.map((car) => (
            <li key={car.id} className="car-item">
              <p><strong>Model:</strong> {car.model}</p>
              <p><strong>Price:</strong> {car.price}</p>
              <p><strong>Date Sold:</strong> {car.date}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="cars-pending-container">
        <h2>Cars Pending</h2>
        <ul className="cars-pending-list">
          {carsPending.map((car) => (
            <li key={car.id} className="car-item">
              <p><strong>Model:</strong> {car.model}</p>
              <p><strong>Price:</strong> {car.price}</p>
              <p><strong>Pending Since:</strong> {car.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;