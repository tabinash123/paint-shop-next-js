import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import bestsellingproducts from '../../../data/bestsellingproducts';

const SectionContainer = styled.section`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    margin: 1rem auto;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ViewAllButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: #0066cc;
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.3s ease;



  svg {
    margin-left: 0.5rem;
  }

  @media (max-width: 480px) {
    margin-top: 0.5rem;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled.div`
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

`;

const ProductImage = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%; // 1:1 Aspect ratio
`;

const ProductInfo = styled.div`
  padding: 1rem;
`;

const ProductCategory = styled.p`
  font-size: 0.8rem;
  color: #666;
  margin-bottom: 0.25rem;
`;

const ProductTitle = styled.h3`
  font-size: 1rem;
  margin: 0 0 0.5rem 0;
  color: #333;
`;

const ProductDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const AddToCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem;
  background-color: #0066cc;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s ease;


  svg {
    margin-right: 0.5rem;
  }
`;

const BestSellingProducts = () => {
  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>Best Selling Products</SectionTitle>
        <ViewAllButton>
          View All <ArrowRight size={18} />
        </ViewAllButton>
      </SectionHeader>
      <ProductGrid>
        {bestsellingproducts.slice(0, 4).map((product, index) => (
          <ProductCard key={index}>
            <ProductImage>
              <Image
                src={product.image}
                alt={product.title}
                layout="fill"
                objectFit="cover"
              />
            </ProductImage>
            <ProductInfo>
              <ProductCategory>Paint Product</ProductCategory>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <AddToCartButton>
                <ShoppingCart size={18} />
                Add to Cart
              </AddToCartButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductGrid>
    </SectionContainer>
  );
};

export default BestSellingProducts;