"use client"
import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Container, useMediaQuery, Typography } from '@mui/material';
import products from '../../data/products';
import ProductList from './ProductList';
import VerticalSidebar from './VerticalSidebar';
import HorizontalSidebar from './HorizontalSidebar';

// Global styles
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Open+Sans:wght@400;600&display=swap');

  body {
    font-family: 'Open Sans', sans-serif;
    background-color: #f5f5f5;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const MainContainer = styled(Container)`
  padding: 20px;
  max-width: none;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;

  h1 {
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    color: #800000;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.75rem;
    }
  }

  p {
    font-size: 1.2rem;
    color: #2f4f4f;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.875rem;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProductContainer = styled.div`
  flex: 4;
  width: 100%;
`;

const ProductDisplay = () => {
  const initialCategory = products[0]?.category || '';
  const initialSubcategory = products[0]?.subcategories[0]?.subcategory || '';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedSubcategory, setSelectedSubcategory] = useState(initialSubcategory);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openCategory, setOpenCategory] = useState(null);
  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  const handleCategoryClick = (event, category) => {
    if (openCategory === category) {
      setAnchorEl(null);
      setOpenCategory(null);
    } else {
      setAnchorEl(event.currentTarget);
      setOpenCategory(category);
    }
    setSelectedCategory(category);
  };

  const handleSubcategoryChange = (subcategory) => {
    setSelectedSubcategory(subcategory);
    setAnchorEl(null);
    setOpenCategory(null);
  };

  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <Header>
          <h1>Paint Products</h1>
          <p>Discover our range of luxurious paints and finishes</p>
        </Header>
        <Content>
          <VerticalSidebar 
            selectedSubcategory={selectedSubcategory} 
            handleSubcategoryChange={handleSubcategoryChange} 
          />
          <HorizontalSidebar 
            selectedCategory={selectedCategory} 
            handleCategoryClick={handleCategoryClick} 
            selectedSubcategory={selectedSubcategory} 
            handleSubcategoryChange={handleSubcategoryChange} 
            anchorEl={anchorEl} 
            openCategory={openCategory} 
            setAnchorEl={setAnchorEl} 
            setOpenCategory={setOpenCategory} 
          />
          <ProductContainer>
            <ProductList category={selectedCategory} subcategory={selectedSubcategory} />
          </ProductContainer>
        </Content>
      </MainContainer>
    </>
  );
};

export default ProductDisplay;
