// components/BestSellingProducts.js
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import bestsellingproducts from '../../data/bestsellingproducts';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const colors = {
  primary: '#900C3F',
  secondary: '#FFD700',
  gradient: 'linear-gradient(90deg, #FF5733, #C70039, #900C3F, #581845)',
  textPrimary: '#666666',
  textHighlight: '#FFFFFF',
};

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
  background: ${colors.gradient};
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
  color: ${colors.textPrimary};
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
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1281px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ProductCard = styled.div`
  width: 100%;
  max-width: 200px;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 600px) {
    max-width: 150px;
  }

  @media (max-width: 400px) {
    max-width: 180px;
  }

  @media (min-width: 1281px) {
    max-width: 250px;
  }
`;

const ProductTitle = styled.h6`
  font-weight: 400;
  margin-top: 10px;
  font-size: 0.9rem;
  font-family: 'Montserrat', sans-serif;
  color: black;

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

  @media (min-width: 1281px) {
    font-size: 1.4rem;
  }
`;

const WhatsAppWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  color: ${colors.primary};

  & > span {
    margin-left: 5px;
    font-size: 0.9rem;
    font-family: 'Montserrat', sans-serif;
    color: ${colors.textPrimary};

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

    @media (min-width: 1281px) {
      font-size: 1.4rem;
    }
  }
`;

const StyledButton = styled.a`
  display: inline-block;
  margin-top: 40px;
  padding: 12px 24px;
  background-color: ${colors.primary};
  color: ${colors.textHighlight};
  font-size: 1rem;
  font-family: 'Open Sans', sans-serif;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${colors.secondary};
    color: #333;
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

const ProductImage = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: 8px;
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
            <ProductImage
              src={product.image}
              alt={product.title}
              width={130}
              height={160}
            />
            <ProductTitle>{product.title}</ProductTitle>
            <WhatsAppWrapper>
              <WhatsAppIcon />
              <span>9742555743</span>
            </WhatsAppWrapper>
          </ProductCard>
        ))}
      </ProductGrid>
      <StyledButton href="/products">View All Products</StyledButton>
    </Container>
  );
};

export default BestSellingProducts;
