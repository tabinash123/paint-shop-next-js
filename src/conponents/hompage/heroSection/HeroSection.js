// components/HeroSection.js
import React from 'react';
import BackgroundImage from '../../../../public/assets/images.PNG';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${BackgroundImage.src})` }}>
      <div className="container">
        <h1 className="headline">Welcome to Saurav and Shuvam Paint</h1>
        <h2 className="subheadline">Your Trusted Paint Partner in Kathmandu, Nepal</h2>
        <p className="paragraph">
          At Saurav and Shuvam Paint, we are proud to be your authorized dealer of Asian Paints, bringing vibrant and high-quality paint solutions to Kathmandu and beyond. Whether you are renovating your home, designing a new space, or undertaking a professional project, we offer a diverse range of colors and finishes to meet your needs.
        </p>
        <a className="call-to-action" href="/products">Explore Our Products</a>
      </div>
    </section>
  );
};

export default HeroSection;
