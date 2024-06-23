// pages/products.js

import Head from 'next/head';
import styled from 'styled-components';

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const CardContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  width: 250px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 8px;
`;

const ProductTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`;

const ProductDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #2ecc71;
`;

const ProductsPage = () => {
  // Dummy product data (replace with actual data fetching)
  const products = [
    {
      id: 1,
      title: 'Premium Interior Paint',
      description: 'Smooth finish, low odor interior paint',
      price: 35.99,
      image: '/paint1.jpg',
    },
    {
      id: 2,
      title: 'Exterior Paint & Primer',
      description: 'Weather-resistant exterior paint with primer',
      price: 45.99,
      image: '/paint2.jpg',
    },
    // Add more products as needed
  ];

  return (
    <div>
      <Head>
        <title>Paint Shop - Products</title>
        <meta name="description" content="Explore our range of premium paints" />
      </Head>
      <ProductGrid>
        {products.map((product) => (
          <CardContainer key={product.id}>
            <ProductImage src={product.image} alt={product.title} />
            <ProductTitle>{product.title}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductPrice>${product.price}</ProductPrice>
          </CardContainer>
        ))}
      </ProductGrid>
    </div>
  );
};

export default ProductsPage;
