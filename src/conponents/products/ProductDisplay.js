"use client";
import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

import styled, { createGlobalStyle } from 'styled-components';
import {
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  CircularProgress
} from '@mui/material';
import Image from 'next/image';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import StarIcon from '@mui/icons-material/Star';
import products from '../../data/products';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Open+Sans:wght@400;600&display=swap');
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f8f8f8;
  }
`;

const Container = styled.div`
  padding: 40px;
  min-height: 70vh;
  text-align: center;
  max-width: 1200px;
  margin: auto;
  margin-top: 40px;
  font-family: 'Open Sans', sans-serif;
  @media (max-width: 600px) {
    padding: 20px;
    max-width: 100%;
  }
`;

const GradientHeader = styled.p`
  color: #003366;
  margin-bottom: 10px;
   font-size: 2rem;
  font-weight: 800;
  font-family: Arial, sans-serif;

  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`;

const SubHeader = styled.p`
  color: #e91e63;
  margin-bottom: 30px;
  font-size: 1rem;
  font-weight: 400;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const DotWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  & > span {
    height: 12px;
    width: 12px;
    border-radius: 50%;
    display: inline-block;
    margin: 0 7px;
  }
`;

const SubcategoryHeader = styled.h2`
  text-align: left;
  margin-top: 40px;
  font-size: 1.8rem;
  color: #003366;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin: 30px 0;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
   
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    margin-top:40px;
  }
`;


const ProductCard = styled(motion.div)`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProductImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%; /* 1:1 Aspect Ratio */
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

const WhatsAppButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 10px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 0 0 8px 8px;
  transition: background-color 0.3s;
    background-color: #128C7E;

  &:hover {
  background-color: #25D366;
  }
`;

const StyledFormControl = styled(FormControl)`
  margin: 20px 0;
  width: 80%;
  margin: 20px auto;
  max-width: 300px;
  .MuiOutlinedInput-root {
    border-radius: 12px;
  }
  .MuiInputLabel-root {
    color: #00953b;
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: #00953b;
  }
  .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: #5F2477;
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #5F2477;
  }
  .MuiSelect-icon {
    color: #00953b;
  }
`;

const StyledMenuItem = styled(MenuItem)`
  &:hover {
    background-color: rgba(0, 149, 59, 0.1);
  }
`;

const LoadingContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 50px;
  font-size: 2rem;
  color: #333;
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  margin-top: 20px;
  font-size: 1.2rem;
`;

const CustomCircularProgress = styled(CircularProgress)`
  && {
    color: #00953b;
  }
`;

const DividerStyled = styled.div`
  width: 80%;
  height: 1px;
  background-color: #ccc;
  margin: 20px auto;
`;

const ProductDisplay = () => {
  const [selectedCategory, setSelectedCategory] = useState(products[0]?.category || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return [];
    const category = products.find(product => product.category === selectedCategory);
    return category?.subcategories.map(subcategory => ({
      subcategoryName: subcategory.subcategory,
      products: subcategory.products
    })) || [];
  }, [selectedCategory]);

  return (
    <Container>
      <GlobalStyle />
      <GradientHeader>Our Products</GradientHeader>
      <SubHeader>Discover our products</SubHeader>
      <DotWrapper>
        {['#00953b', '#5F2477', '#BA3966', '#F06C45'].map((color, index) => (
          <span key={index} style={{ backgroundColor: color }}></span>
        ))}
      </DotWrapper>
      <StyledFormControl variant="outlined">
        <InputLabel id="category-label">Category</InputLabel>
        <Select
          labelId="category-label"
          value={selectedCategory}
          onChange={handleCategoryChange}
          label="Category"
        >
          {products.map((category, index) => (
            <StyledMenuItem key={index} value={category.category}>
              {category.category}
            </StyledMenuItem>
          ))}
        </Select>
      </StyledFormControl>
      {loading ? (
        <LoadingContainer><CustomCircularProgress size={50} thickness={4.5} /></LoadingContainer>
      ) : (
        filteredProducts.map((subcategory, index) => (
          <React.Fragment key={index}>
            <DividerStyled />
            <SubcategoryHeader>{subcategory.subcategoryName}</SubcategoryHeader>
            <ProductGrid>
              {subcategory.products.map((product, productIndex) => (
                <ProductCard key={productIndex}>
                  <ProductImageWrapper>
                    <ProductImage
                      src={product.imageUrl}
                      alt={product.name}
                      layout="fill"
                objectFit="cover"
                    />
                  </ProductImageWrapper>
                  <ProductInfo >
                  <ProductTitle>
                    {product.name}
                    <StarIcon style={{ color: '#ffc107', marginLeft: '5px' }} />
                  </ProductTitle>
                  </ProductInfo>
                  <WhatsAppButton 
                    href="https://wa.me/9742555743" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={`Contact via WhatsApp for ${product.name}`}
                  >
                    <WhatsAppIcon /> Contact 9742555743
                  </WhatsAppButton>
                </ProductCard>
              ))}
            </ProductGrid>
          </React.Fragment>
        ))
      )}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default ProductDisplay;
