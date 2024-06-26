"use client"
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import demoCategories from '@/data/demoCategories'; // Make sure the path is correct

const SectionContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  max-width: 1200px;
  padding: 10px;
  margin: 0 auto;
`;

const Title = styled.h1`
  margin-top: 20px;
  margin-bottom: 30px;
  font-size: 2rem;
  font-weight: 600;
  color: #000;
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 15px;
  padding: 20px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 80%;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StyledCard = styled.div`
  width: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s, box-shadow 0.2s;
  border-radius: 15px;
  margin: 10px auto;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const StyledCardMedia = styled.div`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  height: 150px;
  position: relative;
  overflow: hidden;
`;

const StyledCardContent = styled.div`
  background-color: #f5f5f5;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  padding: 5px;
  font-size: 1rem;
  font-weight: 500;
  color: #000;
`;

const CategorySection = () => {
  return (
    <SectionContainer>
      <Title>SHOP BY <strong>CATEGORY</strong></Title>

      <GridContainer>
        {demoCategories.map((category) => (
          <Link key={category.id} href="/products" passHref legacyBehavior>
            <a style={{ textDecoration: 'none' }}>
              <StyledCard>
                <StyledCardMedia>
                  <Image src={category.imageUrl} alt={category.title} layout="fill" objectFit="cover" />
                </StyledCardMedia>
                <StyledCardContent>
                  {category.title}
                </StyledCardContent>
              </StyledCard>
            </a>
          </Link>
        ))}
      </GridContainer>
    </SectionContainer>
  );
};

export default CategorySection;
