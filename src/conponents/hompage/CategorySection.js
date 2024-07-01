"use client"
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import demoCategories from '@/data/demoCategories'; // Ensure the path is correct

const colors = {
  primary: '#900C3F',
  secondary: '#FFD700',
  gradient: 'linear-gradient(90deg, #FF5733, #C70039, #900C3F, #581845)',
  textPrimary: '#666666',
  textHighlight: '#FFFFFF',
};

const SectionContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  padding: 20px;
  margin: 0 auto;

  @media (min-width: 1200px) {
    max-width: 1200px;
  }

  @media (max-width: 1199px) and (min-width: 1024px) {
    max-width: 1000px;
  }

  @media (max-width: 1023px) and (min-width: 768px) {
    max-width: 750px;
  }

  @media (max-width: 767px) and (min-width: 481px) {
    max-width: 95%;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0px;
  }
`;

const Title = styled.h1`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 2rem;
  font-weight: 600;
  color: ${colors.primary};
  background: ${colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

const Subheading = styled.p`
  margin-bottom: 20px;
  font-size: 1.25rem;
  color: ${colors.textPrimary};

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 500px) {
    font-size: 0.875rem;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 15px;
  padding: 20px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 15px;
    padding: 25px;
  }
`;

const StyledCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s, box-shadow 0.3s;
  border-radius: 15px;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 480px) {
    height: 170px;
  }
`;

const StyledCardMedia = styled.div`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  height: 150px;
  position: relative;
  overflow: hidden;

  @media (max-width: 480px) {
    height: 150px;
  }
`;

const StyledCardContent = styled.div`
  background-color: #f5f5f5;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  padding: 10px;
  font-size: 1rem;
  font-weight: 500;
  color: #000;
  transition: background-color 0.3s, color 0.3s;

  ${StyledCard}:hover & {
    background-color: ${colors.primary};
    color: ${colors.textHighlight};
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const CategorySection = () => {
  return (
    <SectionContainer>
      <Title>SHOP BY <strong>CATEGORY</strong></Title>
      <Subheading>Explore our diverse range of paint categories to find the perfect fit for your project</Subheading>
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
