"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import demoCategories from '@/data/demoCategories'; // Ensure the path is correct
import CategoryIcon from '@mui/icons-material/Category';
import PaletteIcon from '@mui/icons-material/Palette';
import ExploreIcon from '@mui/icons-material/Explore';

const SectionContainer = styled.div`
  padding: 4rem 1rem;
  background-color: #fff;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const Title = styled(motion.h1)`
   color: #003366;
  font-size: 2rem;
  font-weight: 800;
  text-align: center;
  font-family: Arial, sans-serif;
  margin: 0 0.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const TitleIcon = styled(motion.span)`
  color: orange;
  font-size: 2.5rem;
  margin: 0 0.5rem;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const SubheadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Subheading = styled(motion.p)`
   font-size: 1rem;
  font-weight: 400;
  color: #e91e63;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  margin: 0 0.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

const SubheadingIcon = styled(motion.span)`
  color: #e91e63;
  font-size: 1.25rem;
  margin: 0 0.5rem;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 0px 5%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  margin: 0px 5%;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  margin: 0px 0%;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);

  }
`;

const StyledCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const StyledCardMedia = styled.div`
  position: relative;
  height: 200px;
`;

const StyledCardContent = styled.div`
  padding: 1rem;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: #003366;
`;

const CategorySection = () => {
  return (
    <SectionContainer>
      <TitleContainer>

        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          SHOP BY <strong>CATEGORY</strong>
        </Title>
        <TitleIcon
          as={motion.div}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PaletteIcon fontSize="inherit" />
        </TitleIcon>
      </TitleContainer>
      <SubheadingContainer>
        <SubheadingIcon
          as={motion.div}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ExploreIcon fontSize="inherit" />
        </SubheadingIcon>
        <Subheading
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore our diverse range of paint categories </Subheading>
        <SubheadingIcon
          as={motion.div}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ExploreIcon fontSize="inherit" />
        </SubheadingIcon>
      </SubheadingContainer>
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
