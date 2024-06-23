

"use client"
import React from 'react';
import styled from 'styled-components';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
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

const StyledCard = styled(Card)`
  width: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s, box-shadow 0.2s;
  border-radius: 15px;
  margin: 10px auto;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const StyledCardContent = styled(CardContent)`
  background-color: #f5f5f5;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  padding: 5px;
`;

const StyledCardMedia = styled.div`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  height: 150px;
  position: relative;
  overflow: hidden;
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

const CategorySection = () => {
  return (
    <SectionContainer>
      <Typography style={{ marginTop: '20px', marginBottom: '30px' }} variant="h5" component="h1" gutterBottom>
        SHOP BY <strong>CATEGORY</strong>
      </Typography>

      <GridContainer>
        {demoCategories.map((category) => (
          <Link key={category.id} href="/product" passHref legacyBehavior>
            <a style={{ textDecoration: 'none' }}>
              <StyledCard>
                <StyledCardMedia>
                  <Image src={category.imageUrl} alt={category.title} layout="fill" objectFit="cover" />
                </StyledCardMedia>
                <StyledCardContent>
                  <Typography variant="body2" component="p">
                    {category.title}
                  </Typography>
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
