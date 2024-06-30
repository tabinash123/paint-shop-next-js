import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 40px;
  background-color: #fff;
  text-align: center;
  margin: auto;
  font-family: 'Roboto', sans-serif;
  @media (max-width: 1024px) {
    padding: 30px;
  }
  @media (max-width: 768px) {
    padding: 25px;
  }
  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const GradientHeader = styled.h4`
  background: linear-gradient(90deg, #FF5733, #FF8D1A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 3rem;
  font-family: Arial, sans-serif;
  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }
  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const SubHeader = styled.p`
  color: #C70039;
  margin-bottom: 30px;
  font-size: 1.5rem;
  font-family: Arial, sans-serif;
  @media (max-width: 1024px) {
    font-size: 1.4rem;
  }
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const InfoText = styled.p`
  margin-bottom: 20px;
  line-height: 1.8;
  font-size: 1.1rem;
  font-family: Arial, sans-serif;
  color: #333;
  @media (max-width: 1024px) {
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

const StyledButton = styled.a`
  display: inline-block;
  margin-top: 30px;
  padding: 14px 28px;
  background-color: #FF5733;
  color: #fff;
  font-size: 1.1rem;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 8px;
  text-decoration: none;
  &:hover {
    background-color: #FF8D1A;
  }
  @media (max-width: 1024px) {
    font-size: 1rem;
    padding: 12px 24px;
  }
  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 12px 22px;
  }
  @media (max-width: 480px) {
    font-size: 0.875rem;
    padding: 10px 20px;
  }
`;

const DividerStyled = styled.hr`
  margin: 30px 0;
  border: none;
  height: 1px;
  background-color: #ccc;
`;

const List = styled.ul`
  text-align: left;
  padding-left: 1.5rem;
  margin-bottom: 20px;
  color: #333;
  @media (max-width: 1024px) {
    padding-left: 1.25rem;
  }
  @media (max-width: 768px) {
    padding-left: 1rem;
  }
  @media (max-width: 480px) {
    padding-left: 0.75rem;
  }
`;

const Intro = () => {
  return (
    <Container>
      <GradientHeader>Welcome to SnS Paint</GradientHeader>
      <SubHeader>Your Premier Paint Shop in Kathmandu, Nepal</SubHeader>
      <DividerStyled />
      <InfoText>
        Discover SnS Paint, the ultimate destination for premium house painting colors in Kathmandu. Our extensive range of vibrant, eco-friendly paints is perfect for any home makeover. Whether you’re looking to add a pop of color to your living room or refresh your entire home, we have the perfect shades to suit your style.
      </InfoText>
      <InfoText>
        At SnS Paint, we pride ourselves on offering:
      </InfoText>
      <List>
        <li>High-quality, eco-friendly paints</li>
        <li>Expert color consultation</li>
        <li>Durable and easy-to-apply products</li>
        <li>Stain-resistant and easy-to-clean finishes</li>
      </List>
      <InfoText>
        Ready to transform your home? Visit us today and start creating your dream space with SnS Paint!
      </InfoText>
      <StyledButton href="/products">Explore Our Collection</StyledButton>
    </Container>
  );
};

export default Intro;
