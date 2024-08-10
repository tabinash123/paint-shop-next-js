import React from 'react';
import styled from 'styled-components';
import BackgroundImage from '../../../../public/assets/hero3.png';

const HeroSection = styled.section`
  background-image: url(${BackgroundImage.src});
  background-size: cover;
  background-position: center;
  color: white;
  padding: 60px 0;
  display: flex;
  align-items: center;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5); // Adding a dark overlay for better text visibility
  }
  @media (min-width: 768px) {
    padding: 80px 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
`;

const HeroContent = styled.div`
  max-width: 100%;
  text-align: center;
  @media (min-width: 768px) {
    max-width: 70%;
    margin: 0 auto;
  }
  @media (min-width: 1024px) {
    max-width: 60%;
  }
  @media (min-width: 1200px) {
    max-width: 50%;
  }
`;

const ShopName = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #ffd700;
  font-family: 'Graphik-Regular', sans-serif !important;
  @media (min-width: 768px) {
    font-size: 44px;
  }
  @media (min-width: 1024px) {
    font-size: 52px;
  }
`;

const Tagline = styled.h2`
  font-size: 24px;
  font-weight: normal;
  margin-bottom: 20px;
  font-family: 'Graphik-Regular', sans-serif !important;
  @media (min-width: 768px) {
    font-size: 28px;
  }
  @media (min-width: 1024px) {
    font-size: 32px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 25px;
  font-family: 'Graphik-Regular', sans-serif !important;
  line-height: 27px;
  @media (min-width: 768px) {
    font-size: 17px;
    margin-bottom: 30px;
  }
  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  background-color: #E92B26;
  color: #fff;
  text-decoration: none;
  border-radius: 40px;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 24px;
  transition: all 0.3s ease;
  &:hover, &:focus {
    background-color: #f0c800;
    color: #1a2a3a;
  }
  @media (min-width: 768px) {
    font-size: 17px;
  }
  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <HeroContent>
          <ShopName>Shaurav and Suvam Paint Shop</ShopName>
          <Description>
            Welcome to Kathmandu premier paint destination. At Shaurav and Suvam Paint Shop,
            we offer a wide range of high-quality paints, expert color consultation.
          </Description>
          <CTAButton href="procucts">Explore Our Collection</CTAButton>
        </HeroContent>
      </Container>
    </HeroSection>
  );
};

export default Hero;