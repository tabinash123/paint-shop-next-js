// components/HeroSection.js
import React from 'react';
import BackgroundImage from '../../../../public/assets/images.PNG';
import './HeroSection.css';
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  color: #fff;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  min-height: 200px;

  @media (max-width: 1023px) {
    flex-direction: column;
    padding: 30px;
  }
`;


const HeroSection = () => {
  return (
    <Container className="hero-section" style={{ backgroundImage: `url(${BackgroundImage.src})` }}>
      <div className="container">
        <h1 className="headline">Welcome to Saurav and Shuvam Paint</h1>
        <h2 className="subheadline">Your Trusted Paint Partner in Kathmandu, Nepal</h2>
        <p className="paragraph">
          At Saurav and Shuvam Paint, we are proud to be your authorized dealer of Asian Paints, bringing vibrant and high-quality paint solutions to Kathmandu and beyond. Whether you are renovating your home, designing a new space, or undertaking a professional project, we offer a diverse range of colors and finishes to meet your needs.
        </p>
        <a className="call-to-action" href="/products">Explore Our Products</a>
      </div>
    </Container>
  );
};

export default HeroSection;
