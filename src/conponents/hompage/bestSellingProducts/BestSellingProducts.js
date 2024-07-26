"use client";
import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import bestsellingproducts from '../../../data/bestsellingproducts';

const Container = styled.section`
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 20px;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 1024px) {
    max-width: 800px;
  }

  @media (max-width: 640px) {
    padding: 0 10px;
    margin: 30px auto;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const Header = styled(motion.h2)`
  color: #003366;
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  font-family: Arial, sans-serif;
  margin: 0 0.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const HeaderIcon = styled(motion.span)`
  color: #003366;
  font-size: 2rem;
  font-weight: 800;
  margin: 0 0.5rem;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const SubHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

const SubHeader = styled(motion.p)`
   font-size: 1rem;
  font-weight: 400;
  color: #e91e63;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  margin: 0 0.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

const SubHeaderIcon = styled(motion.span)`
  color: #e91e63;
  font-size: 1.25rem;
  margin: 0 0.5rem;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

const ProductGrid = styled.div`
margin-top:100px;
align-item:center;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 30px;
  
// Tablet
  @media (max-width: 1020px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  column-gap: -40px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    margin-top:40px;
  margin:100px 0%;


  }
`;

const ProductCard = styled(motion.div)`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  width: 100%;

  // Desktop and large screens
  max-width: 250px;

  // Tablet
  @media (max-width: 768px) {
    max-width: 250px;
  }

  // Mobile
  @media (max-width: 480px) {
    max-width: none;
  }

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProductImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%; // 1:1 Aspect Ratio
  overflow: hidden;
`;

const ProductImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 15px;
`;

const ProductTitle = styled.h3`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #333;
  margin: 0 0 10px;
  font-weight: 400;
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-left: 8px;
  color: #f39c12; /* Star color */
`;

const ContactButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.9rem;
  transition: background-color 0.2s ease;
  background-color: #128c7e;

  &:hover {
    background-color: #25d366;
  }

  svg {
    margin-right: 5px;
  }
`;

const ViewAllButton = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  margin: 40px auto 0;
  padding: 15px 30px;
  background-color: #e91e63;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 1rem;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    background-color: #003264;
  }

  svg {
    margin-right: 5px;
  }
`;

const BestSellingProducts = ({ whatsappNumber = '9742555743' }) => {
  return (
    <Container>
      <HeaderContainer>
        <Header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Best Selling Products
        </Header>
        <HeaderIcon
          as={motion.div}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ShoppingCartIcon fontSize="inherit" />
        </HeaderIcon>
      </HeaderContainer>
      <SubHeaderContainer>
        <SubHeaderIcon
          as={motion.div}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <StarIcon fontSize="inherit" />
        </SubHeaderIcon>
        <SubHeader
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover our top-rated products
        </SubHeader>
        <SubHeaderIcon
          as={motion.div}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <StarIcon fontSize="inherit" />
        </SubHeaderIcon>
      </SubHeaderContainer>
      <ProductGrid>
        {bestsellingproducts.map((product) => (
          <ProductCard
            key={product.id}
            whileHover={{ scale: 1.05 }}
          >
            <ProductImageWrapper>
              <ProductImage
                src={product.image}
                alt={product.title}
                layout="fill"
                objectFit="cover"
              />
            </ProductImageWrapper>
            <ProductInfo>
              <ProductTitle>
                {product.title}
                <IconWrapper>
                  <StarIcon fontSize="small" />
                </IconWrapper>
              </ProductTitle>
              <ContactButton
                href={`https://wa.me/${whatsappNumber}?text=I'm%20interested%20in%20${encodeURIComponent(product.title)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon fontSize="small" />
                Contact {whatsappNumber}
              </ContactButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductGrid>
      <ViewAllButton
        href="/products"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <LocalOfferIcon fontSize="small" />
        View All Products
      </ViewAllButton>
    </Container>
  );
};

export default BestSellingProducts;