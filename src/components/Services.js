import React from 'react';
import './Services.css';
import NutritionImage from "./Images/nutrition.png";
import FitnessImage from './Images/Fitness.jpg';
import MentalHealthImage from './Images/MentalHealthImage.png';
const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services">
        <div className="service">
          <img src={NutritionImage} alt="Nutrition Counseling" />
          <h2>Nutrition Counseling</h2>
          <p>Personalized nutrition advice to help you achieve your health goals.</p>
        </div>
        <div className="service">
          <img src={FitnessImage} alt="Fitness Programs" />
          <h2>Fitness Programs</h2>
          <p>Customized fitness plans to keep you active and healthy.</p>
        </div>
        <div className="service">
          <img src={MentalHealthImage} alt="Mental Health Support" />
          <h2>Mental Health Support</h2>
          <p>Compassionate mental health services to support your well-being.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
