import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import styled from 'styled-components';
import Image from 'next/image';
import imag from '../../../public/assets/asian-paints.png'

const Container = styled(Box)`
  padding: 20px;
  background-color: #f9f9f9;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
  margin: auto;
  margin-top: 20px;
  font-family: 'Roboto', sans-serif;
`;

const GradientHeader = styled(Typography)`
  background: linear-gradient(90deg, #FF5733, #C70039, #900C3F, #581845);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 2rem;
`;

const SubHeader = styled(Typography)`
  color: #666;
  margin-bottom: 20px;
  font-size: 1rem;
`;

const DotWrapper = styled(Box)`
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

const ProductCard = styled(Card)`
  width: 300px;
  margin:0px auto;
  box-shadow: 0 0px 0px ;
  border-radius: 8px;
  background-color:transparent;


  
`;

const ProductTitle = styled(Typography)`
  
  font-weight: bold;
  margin-top: 10px;
`;

const ProductDescription = styled(Typography)`
  color: #666;
  margin-top: 10px;
  font-size: 0.875rem;
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
  padding: 12px 24px;
  background-color: #900C3F;
  color: #fff;
  font-size: 1rem;
  &:hover {
    background-color: #581845;
  }
`;

const products = [
  {
    title: 'Tractor Acrylic Distemper',
    description: 'Durable and smooth finish with fast drying properties.',
    image: 'https://source.unsplash.com/random/400x400/?paint',
  },
  {
    title: 'Royale Luxury Emulsion',
    description: 'High sheen finish, perfect for interior walls.',
    image: 'https://source.unsplash.com/random/400x400/?paint',
  },
  {
    title: 'Apex Ultima',
    description: 'Weatherproof and durable exterior paint.',
    image: 'https://source.unsplash.com/random/400x400/?paint',
  },
  {
    title: 'SmartCare Damp Proof',
    description: 'Advanced waterproofing for all surfaces.',
    image: 'https://source.unsplash.com/random/400x400/?paint',
  },
  {
    title: 'Tractor Acrylic Distemper',
    description: 'Durable and smooth finish with fast drying properties.',
    image: 'https://source.unsplash.com/random/400x400/?paint',
  },
  {
    title: 'Royale Luxury Emulsion',
    description: 'High sheen finish, perfect for interior walls.',
    image: 'https://source.unsplash.com/random/400x400/?paint',
  },
  {
    title: 'Apex Ultima',
    description: 'Weatherproof and durable exterior paint.',
    image: 'https://source.unsplash.com/random/400x400/?paint',
  },
  {
    title: 'SmartCare Damp Proof',
    description: 'Advanced waterproofing for all surfaces.',
    image: 'https://source.unsplash.com/random/400x400/?paint',
  },

 
];

const BestSellingProducts = () => {
  return (
    <Container>
      <GradientHeader variant="h4">Best Selling Products</GradientHeader>
      <SubHeader variant="body1">Discover our top-rated products that customers love</SubHeader>
      <DotWrapper>
        <span style={{ backgroundColor: '#FF5733' }}></span>
        <span style={{ backgroundColor: '#C70039' }}></span>
        <span style={{ backgroundColor: '#900C3F' }}></span>
        <span style={{ backgroundColor: '#581845' }}></span>
      </DotWrapper>
      <Grid container spacing={3}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <ProductCard>
              <Image
                src={imag}
                alt={product.title}
               width={200}
                height={250}
              />
              <CardContent>
                <ProductTitle variant="h6">{product.title}</ProductTitle>
              </CardContent>
            </ProductCard>
          </Grid>
        ))}
      </Grid>
      <StyledButton
        variant="contained"
        href="/products"
      >
        View All Products
      </StyledButton>
    </Container>
  );
};

export default BestSellingProducts;
