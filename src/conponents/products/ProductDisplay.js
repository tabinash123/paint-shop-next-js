"use client"
import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import {
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  CircularProgress
} from '@mui/material';
import Image from 'next/image';
import products from '../../data/products';

// Global styles with the new color scheme and typography
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

const GradientHeader = styled.h4`
  background: linear-gradient(90deg, #00953b, #5F2477, #BA3966, #F06C45);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 2.5rem;
  font-family: 'Playfair Display', serif;
  @media (max-width: 600px) {
    font-size: 2rem;
    font-weight: 600;
  }
  @media (max-width: 400px) {
    font-size: 1.8rem;
    font-weight: 500;
  }
  @media (min-width: 601px) and (max-width: 960px) {
    font-size: 2.25rem;
  }
  @media (min-width: 961px) and (max-width: 1280px) {
    font-size: 2.5rem;
  }
  @media (min-width: 1281px) {
    font-size: 3rem;
  }
`;

const SubHeader = styled.p`
  color: #444;
  margin-bottom: 30px;
  font-size: 1.2rem;
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
  @media (max-width: 400px) {
    font-size: 0.9rem;
    font-weight: 300;
  }
  @media (min-width: 601px) and (max-width: 960px) {
    font-size: 1.1rem;
  }
  @media (min-width: 961px) and (max-width: 1280px) {
    font-size: 1.2rem;
  }
  @media (min-width: 1281px) {
    font-size: 1.3rem;
  }
`;

const DotWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  & > span {
    height: 12px;
    width: 12px;
    background-color: ${props => props.color};
    border-radius: 50%;
    display: inline-block;
    margin: 0 7px;
  }
`;

const SubcategoryHeader = styled.h5`
  text-align: left;
  margin-top: 40px;
  font-size: 1.8rem;
    background: linear-gradient(90deg, #FF5733, #C70039, #900C3F, #581845);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 24px;
  margin: 30px 0;
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
  background: #fff;
 
  @media (max-width: 600px) {
    max-width: 150px;
  }
  @media (max-width: 400px) {
    max-width: 120px;
  }
`;

const ProductImage = styled(Image)`
  border-radius: 12px 12px 0 0;
  max-width: 180px;
  max-height: 200px;
  margin-top:10px;

  @media (max-width: 600px) {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    width: 100%;
    height: auto;
  }
`;

const ProductTitle = styled.h6`
  font-weight: 600;
  margin-top: 5px;
  font-size: 1rem;
  font-family: 'Playfair Display', serif;
  color: #333;
  padding: 0 10px 15px 10px;
  @media (max-width: 400px) {
    font-size: 0.8rem;
  }
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
  @media (min-width: 601px) and (max-width: 960px) {
    font-size: 1rem;
  }
  @media (min-width: 961px) and (max-width: 1280px) {
    font-size: 1.1rem;
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

const ProductDisplay = () => {
  const [selectedCategory, setSelectedCategory] = useState(products[0]?.category || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [selectedCategory]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = () => {
    if (!selectedCategory) return [];
    const category = products.find(product => product.category === selectedCategory);
    return category.subcategories.map(subcategory => ({
      subcategoryName: subcategory.subcategory,
      products: subcategory.products
    }));
  };

  return (
    <Container>
      <GlobalStyle />
      <GradientHeader>Our Products</GradientHeader>
      <SubHeader>Discover our top-rated products that customers love</SubHeader>
      <DotWrapper>
        <span style={{ backgroundColor: '#00953b' }}></span>
        <span style={{ backgroundColor: '#5F2477' }}></span>
        <span style={{ backgroundColor: '#BA3966' }}></span>
        <span style={{ backgroundColor: '#F06C45' }}></span>
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
        <LoadingContainer><CircularProgress /></LoadingContainer>
      ) : (
        filteredProducts().map((subcategory, index) => (
          <div key={index}>
            <SubcategoryHeader>{subcategory.subcategoryName}</SubcategoryHeader>
            <ProductGrid>
              {subcategory.products.map((product, productIndex) => (
                <ProductCard key={productIndex}>
                  <ProductImage
                    src={product.imageUrl}
                    alt={product.name}
                    width={250}
                    height={300}
                  />
                  <ProductTitle>{product.name}</ProductTitle>
                </ProductCard>
              ))}
            </ProductGrid>
          </div>
        ))
      )}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default ProductDisplay;
