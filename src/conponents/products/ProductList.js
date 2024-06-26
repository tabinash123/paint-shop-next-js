import React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import Image from 'next/image';
import products from '../../data/products';

const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 20px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr); /* Ensure 2 columns for small devices */
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr); /* 3 columns for medium devices */
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr); /* 4 columns for large devices */
  }
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  text-align: center;
  background: #fff;
  border-radius: 0px;
  box-shadow: 0px;

  @media (max-width: 600px) {
    padding: 8px;
  }
`;

const ProductImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 4px;

  @media (max-width: 600px) {
    height: 150px;
  }
`;

const ProductName = styled(Typography)`
  margin-top: 10px;
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;

  @media (max-width: 600px) {
    font-size: 0.875rem;
  }
`;

const ProductList = ({ category, subcategory }) => {
  const selectedCategory = products.find(cat => cat.category === category);
  const selectedSubcategory = selectedCategory?.subcategories.find(sub => sub.subcategory === subcategory);
  const productList = selectedSubcategory ? selectedSubcategory.products : [];

  if (productList.length === 0) {
    return <Typography variant="h6">No products available</Typography>;
  }

  return (
    <ProductListContainer>
      {productList.map((product, index) => (
        <ProductCard key={index}>
          <ProductImageContainer>
            <Image
              src={product.imageUrl}
              alt={product.name}
              layout="fill"
             
            />
          </ProductImageContainer>
          <ProductName variant="body1">{product.name}</ProductName>
        </ProductCard>
      ))}
    </ProductListContainer>
  );
};

export default ProductList;
