"use client"
import React from 'react';
import styled from 'styled-components';
import { GiDiamondHard, GiMagnifyingGlass, GiSandsOfTime } from 'react-icons/gi';

// --- Styled Components ---
const WhyChooseUsSection = styled.section`
  padding: 5rem 1rem;
  background-color: #f5f5f5;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  justify-content: center;
`;

const FeatureItem = styled.div`
  text-align: center;
  padding: 2rem;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  background-color: #fff;
  border-radius: 10px;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  color: #996633;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const FeatureDescription = styled.p`
  color: #555;
  line-height: 1.6;
`;

// --- WhyChooseUs Component ---
const WhyChooseUs = () => {
  const features = [
    {
      icon: GiDiamondHard,
      title: 'Premium Quality',
      description: 'We use the finest materials and meticulous craftsmanship to ensure top-notch quality in every product.'
    },
    {
      icon: GiMagnifyingGlass,
      title: 'Exceptional Service',
      description: 'Our dedicated team provides personalized assistance to meet and exceed your expectations.'
    },
    {
      icon: GiSandsOfTime,
      title: 'Timeless Elegance',
      description: 'Our designs are inspired by classic styles, creating pieces that remain beautiful over time.'
    },
    // Add more features as needed
  ];

  return (
    <WhyChooseUsSection>
      <SectionTitle>Why Choose Us</SectionTitle>
      <FeatureGrid>
        {features.map((feature, index) => (
          <FeatureItem key={index}>
            <FeatureIcon>
              <feature.icon />
            </FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureItem>
        ))}
      </FeatureGrid>
    </WhyChooseUsSection>
  );
};

export default WhyChooseUs;
