import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import BackgroundImage from '../../../../public/assets/hero3.PNG';

const HeroSection = styled.section`
  background-image: url(${BackgroundImage.src});
  background-size: cover;
  background-position: center;
  color: white;
  padding: 60px 0;
  // min-height: 500px;
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
    background: linear-gradient(135deg, rgba(26, 42, 58, 0.8) 0%, rgba(74, 90, 106, 0.8) 100%);
  }

  @media (min-width: 768px) {
    // min-height: 600px;
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

  @media (min-width: 768px) {
    max-width: 70%;
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
      font-family: 'Graphik-Regular' !important;

  

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
      font-family: 'Graphik-Regular' !important;


  @media (min-width: 768px) {
    font-size: 28px;
  }

  @media (min-width: 1024px) {
    font-size: 32px;
  }
`;

const Description = styled.p`
  font-size: 15px;
  margin-bottom: 25px;
      font-size: 18px;
    // color: #000;
    font-family: 'Graphik-Regular' !important;
    line-height: 27px;
    margin-bottom: 0;

  @media (min-width: 768px) {
    font-size: 17px;
    margin-bottom: 30px;
    font-family: 'Graphik-Regular' !important;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
    font-family: 'Graphik-Regular' !important;
  }
`;

const CTAButton = styled(Button)`
  background-color: #E92B26;
      float: left;
    padding: 12px 10px;
    border-radius: 40px;
    border: unset;
    font-size: 19px;
    background-color: #E92B26;
    color: #fff;
  border-color: #ffd700;
  color: #1a2a3a;
  font-weight: bold;
  font-size: 16px;
  height: auto;
  padding: 10px 20px;

  @media (min-width: 768px) {
    font-size: 17px;
    padding: 11px 22px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
    padding: 12px 24px;
  }

  &:hover, &:focus {
    background-color: #f0c800;
    border-color: #f0c800;
    color: #1a2a3a;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <HeroContent>
          <ShopName>Shaurav and Suvam Paint Shop</ShopName>
          <Tagline>Bringing Colors to Life Since 2010</Tagline>
          <Description>
            Welcome to Kathmandu's premier paint destination. At Shaurav and Suvam Paint Shop, 
            we offer a wide range of high-quality paints, expert color consultation, and 
            unmatched customer service. Whether you're refreshing your home or tackling a 
            commercial project, we have the perfect colors and products for you.
          </Description>
          <CTAButton type="primary">Explore Our Collection</CTAButton>
        </HeroContent>
      </Container>
    </HeroSection>
  );
};

export default Hero;