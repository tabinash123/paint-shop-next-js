"use client"
import React from 'react';
import styled from 'styled-components';
import { Box, Typography, Grid } from '@mui/material';
import { GiDiamondHard, GiMagnifyingGlass, GiSandsOfTime } from 'react-icons/gi'; // Example icons

// --- Styled Components ---
const WhyChooseUsSection = styled.section`
  padding: 5rem 1rem;
  background-color: #f5f5f5; /* Subtle off-white background */
`;

const SectionTitle = styled(Typography)`
  font-size: 2.5rem;
  font-family: "Playfair Display", serif; /* Elegant serif font */
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
`;

const FeatureItem = styled(Box)`
  text-align: center;
  padding: 2rem;
`;

const FeatureIcon = styled(Box)`
  font-size: 3rem;
  color: #996633; /* Gold-like color */
  margin-bottom: 1rem;
`;

const FeatureTitle = styled(Typography)`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const FeatureDescription = styled(Typography)`
  color: #555;
  line-height: 1.6;
`;

// --- WhyChooseUs Component ---
const WhyChooseUs = () => {
  const features = [
    {
      icon: GiDiamondHard,
      title: 'Premium Quality',
      description: 'We source only the finest materials and ensure meticulous craftsmanship in every product.'
    },
    {
      icon: GiMagnifyingGlass,
      title: 'Exceptional Service',
      description: 'Our dedicated team is committed to providing personalized assistance and exceeding your expectations.'
    },
    {
      icon: GiSandsOfTime,
      title: 'Timeless Elegance',
      description: 'Our designs are inspired by classic aesthetics, creating pieces that transcend trends.'
    },
    // Add more features as needed
  ];

  return (
    <WhyChooseUsSection>
      <SectionTitle variant="h2">Why Choose Us</SectionTitle>
      <Grid container spacing={3} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <FeatureItem>
              <FeatureIcon>
                <feature.icon />
              </FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureItem>
          </Grid>
        ))}
      </Grid>
    </WhyChooseUsSection>
  );
};

export default WhyChooseUs;
