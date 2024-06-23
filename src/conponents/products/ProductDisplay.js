// pages/products.js
"use client"
import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
  Container,
} from '@mui/material';
import Image from 'next/image';
import products from '../../data/products';

// Global styles with the new color scheme and typography
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
`;

const Sidebar = styled.div`
  flex: 1;
  max-width: 200px;
  padding: 20px;
  background: #fff;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const SubcategoryList = styled(List)`
  margin-left: 20px;
`;

const SubcategoryItem = styled(ListItem)`
  cursor: pointer;
  padding: 10px 15px;
  margin: 5px 0;
  border-radius: 4px;
  transition: background 0.3s;
  ${(props) => props.selected && `
background: linear-gradient(45deg, rgba(255, 87, 51, 0.3), rgba(255, 87, 51, 0.3) 75%, rgba(255, 165, 0, 0.3) 75%, rgba(255, 165, 0, 0.3));
    color: black;
  `}
   &:hover{
background: linear-gradient(45deg, rgba(255, 87, 51, 0.1), rgba(255, 87, 51, 0.1) 75%, rgba(255, 165, 0, 0.1) 75%, rgba(255, 165, 0, 0.3));
  }
`;

const MainContent = styled.div`
  flex: 3.5;
  display: grid;
  grid-template-columns: 1fr;
  
  padding: 20px;
  background: #f5f5f5;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
    row-gap:-50px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  margin: 10px;
  max-width: 100%;
  height: 300px; /* Fixed height */
  text-align: center;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

const ProductImage = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
`;

const ProductName = styled.p`
  margin: 10px 0 0;
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
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
  const initialSubcategory = products[0]?.subcategories[0]?.subcategory || '';
  const [selectedSubcategory, setSelectedSubcategory] = useState(initialSubcategory);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate an async operation to fetch data
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000); // simulate a 1 second loading time
  }, [selectedSubcategory]);

  const handleSubcategoryChange = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  const filteredProducts = () => {
    if (!selectedSubcategory) return [];
    for (let category of products) {
      for (let subcategory of category.subcategories) {
        if (subcategory.subcategory === selectedSubcategory) {
          return subcategory.products;
        }
      }
    }
    return [];
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
          <Sidebar>
            <Typography variant="h6" gutterBottom>
              Category
            </Typography>
            {products.map((category, index) => (
              <div key={index}>
                <ListItem>
                  <ListItemText primary={category.category} style={{ color: '#800000' }} />
                </ListItem>
                <SubcategoryList component="div" disablePadding>
                  {category.subcategories.map((subcategory, subIndex) => (
                    <SubcategoryItem
                      key={subIndex}
                      selected={subcategory.subcategory === selectedSubcategory}
                      onClick={() => handleSubcategoryChange(subcategory.subcategory)}
                    >
                      {subcategory.subcategory}
                    </SubcategoryItem>
                  ))}
                </SubcategoryList>
              </div>
            ))}
          </Sidebar>
          <Divider orientation="vertical" flexItem />
          <MainContent>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {loading ? (
              <LoadingContainer>Loading...</LoadingContainer>
            ) : (
              filteredProducts().map((product, index) => (
                <ProductCard key={index}>
                  <ProductImage>
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </ProductImage>
                  <ProductName>{product.name}</ProductName>
                </ProductCard>
              ))
            )}
          </MainContent>
        </Content>
      </MainContainer>
    </>
  );
};

export default ProductDisplay;
