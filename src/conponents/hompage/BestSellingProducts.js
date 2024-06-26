import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import imag from '../../../public/assets/asian-paints.png';
import bestsellingproducts from '../../data/bestsellingproducts';

const Container = styled.div`
  padding: 20px;
  text-align: center;
  max-width: 1000px;
  margin: auto;
  margin-top: 20px;
  font-family: 'Roboto', sans-serif;
  @media (max-width: 600px) {
    padding: 10px;
    max-width: 100%;
  }
`;

const GradientHeader = styled.h4`
  background: linear-gradient(90deg, #FF5733, #C70039, #900C3F, #581845);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 2rem;
  font-family: 'Montserrat', sans-serif;
  @media (max-width: 600px) {
    font-size: 1.5rem;
    font-weight: 600;
  }
  @media (max-width: 400px) {
    font-size: 1.3rem;
    font-weight: 500;
  }
  @media (min-width: 601px) and (max-width: 960px) {
    font-size: 1.75rem;
  }
  @media (min-width: 961px) and (max-width: 1280px) {
    font-size: 2rem;
  }
  @media (min-width: 1281px) {
    font-size: 2.5rem;
  }
`;

const SubHeader = styled.p`
  color: #666666;
  margin-bottom: 20px;
  font-size: 1rem;
  font-weight: 400;
  @media (max-width: 600px) {
    font-size: 0.875rem;
  }
  @media (max-width: 400px) {
    font-size: 0.75rem;
    font-weight: 300;
  }
  @media (min-width: 601px) and (max-width: 960px) {
    font-size: 1rem;
  }
  @media (min-width: 961px) and (max-width: 1280px) {
    font-size: 1.125rem;
  }
  @media (min-width: 1281px) {
    font-size: 1.25rem;
  }
`;

const DotWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  & > span {
    height: 10px;
    width: 10px;
    background-color: ${props => props.color};
    border-radius: 50%;
    display: inline-block;
    margin: 0 5px;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 601px) and (max-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 961px) and (max-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1281px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const ProductCard = styled.div`
  width: 100%;
  max-width: 200px;
  margin: 0 auto;
  background-color: #ffffff;
  @media (max-width: 600px) {
    max-width: 150px;
  }
  @media (max-width: 400px) {
    max-width: 120px;
  }
`;

const ProductTitle = styled.h6`
  font-weight: 400;
  margin-top: 10px;
  font-size: 0.9rem;
  font-family: 'Montserrat', sans-serif;
  @media (max-width: 400px) {
    font-size: 0.7rem;
   
  }
  @media (max-width: 600px) {
    font-size: 0.8rem;
   
  }
  @media (min-width: 601px) and (max-width: 960px) {
    font-size: 0.95rem;
  }
  @media (min-width: 961px) and (max-width: 1280px) {
    font-size: 1.2rem;
  }

`;

const StyledButton = styled.a`
  display: inline-block;
  margin-top: 70px;
  margin-bottom: 40px;
  padding: 12px 24px;
  background-color: #900C3F;
  color: #ffffff;
  font-size: 1rem;
  font-family: 'Open Sans', sans-serif;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  &:hover {
    background-color: #FFD700;
  }
  @media (max-width: 600px) {
    font-size: 0.875rem;
    padding: 10px 20px;
  }
  @media (max-width: 400px) {
    font-size: 0.75rem;
    padding: 8px 16px;
    font-weight: 500;
  }
  @media (min-width: 601px) and (max-width: 960px) {
    font-size: 1rem;
    padding: 12px 24px;
  }
 
`;

const BestSellingProducts = () => {
  return (
    <Container>
      <GradientHeader>Best Selling Products</GradientHeader>
      <SubHeader>Discover our top-rated products that customers love</SubHeader>
      <DotWrapper>
        <span style={{ backgroundColor: '#FF5733' }}></span>
        <span style={{ backgroundColor: '#C70039' }}></span>
        <span style={{ backgroundColor: '#900C3F' }}></span>
        <span style={{ backgroundColor: '#581845' }}></span>
      </DotWrapper>
      <ProductGrid>
        {bestsellingproducts.map((product, index) => (
          <ProductCard key={index}>
            <Image
              src={imag}
              alt={product.title}
              width={130}
              height={160}
            />
            <ProductTitle>{product.title}</ProductTitle>
          </ProductCard>
        ))}
      </ProductGrid>
      <StyledButton href="/products">View All Products</StyledButton>
    </Container>
  );
};

export default BestSellingProducts;