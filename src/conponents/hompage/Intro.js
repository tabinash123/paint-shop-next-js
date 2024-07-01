// components/HeroSection.js
import React from 'react';
import styled from 'styled-components';
import BackgroundImage from '../../../public/assets/images.PNG'; 

const Section = styled.section`
  background: url(${BackgroundImage.src}) no-repeat center center;
  background-size: cover;
  padding: 100px 20px;
  text-align: center;
  position: relative;
  color: #fff;
  overflow: hidden;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 19px;
`;

const Headline = styled.h1`
  color: #FFFFFF;
  margin-bottom: 20px;
  font-size: 48px;
  font-weight: 700;
`;

const Subheadline = styled.h2`
  color: #F0E68C; /* Light Yellow */
  margin-bottom: 20px;
  font-size: 32px;
  font-weight: 500;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 40px;
  color: #F8F8FF; /* Ghost White */
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const CallToAction = styled.a`
  display: inline-block;
  padding: 15px 30px;
  background-color: #1E90FF; /* Dodger Blue */
  color: #fff;
  font-size: 18px;
  font-family: 'Open Sans', sans-serif;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #1C1C1C;
    color: #FFD700; /* Gold */
  }
`;

const HeroSection = () => {
  return (
    <Section>
      <Container>
        <Headline>Welcome to Saurav and Shuvam Paint</Headline>
        <Subheadline>Your Trusted Paint Partner in Kathmandu, Nepal</Subheadline>
        <Paragraph>
          At Saurav and Shuvam Paint, we are proud to be your authorized dealer of Asian Paints, bringing vibrant and high-quality paint solutions to Kathmandu and beyond. Whether you are renovating your home, designing a new space, or undertaking a professional project, we offer a diverse range of colors and finishes to meet your needs.
        </Paragraph>
        <CallToAction href="/products">Explore Our Products</CallToAction>
      </Container>
    </Section>
  );
};

export default HeroSection;
