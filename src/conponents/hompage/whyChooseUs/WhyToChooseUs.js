"use client";
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import reasonsData from '../../../data/reasonsData';

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
};

const colors = {
  background: '#003366',
  text: '#FFFFFF',
  accent: '#FF6B6B',
  cardBg: 'rgba(255, 255, 255, 0.1)',
};

const SectionContainer = styled.section`
  padding: 4rem 5%;
  background-color: ${colors.background};
  color: ${colors.text};

  @media (max-width: ${breakpoints.tablet}) {
    padding: 3rem 5%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 2rem 5%;
  }
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 2rem;

  @media (max-width: ${breakpoints.desktop}) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  flex: 1;

  @media (max-width: ${breakpoints.desktop}) {
    margin-bottom: 2rem;
  }
`;

const SectionHeader = styled(motion.h2)`
  color: ${colors.text};
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: bold;
  margin-bottom: 1rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`;

const SectionDescription = styled.p`
  font-size: clamp(1rem, 2vw, 1.1rem);
  color: ${colors.text};
  opacity: 0.9;
  margin-bottom: 2rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.9rem;
  }
`;

const CTAButton = styled.button`
  background-color: ${colors.accent};
  color: ${colors.text};
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ff5252;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
`;

const ReasonsContainer = styled.div`
  flex: 2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ReasonCard = styled(motion.div)`
  background-color: ${colors.cardBg};
  padding: 1.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1.2rem;
  }
`;

const IconContainer = styled.div`
  margin-bottom: 1rem;
  color: ${colors.accent};
  font-size: 2rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

const ReasonTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${colors.text};
  margin-bottom: 0.5rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

const ReasonDescription = styled.p`
  font-size: 0.9rem;
  color: ${colors.text};
  opacity: 0.8;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
  }
`;

const WhyChooseUs = () => {
  return (
    <SectionContainer>
      <SectionContent>
        <LeftSection>
          <SectionHeader
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Us?
          </SectionHeader>
          <SectionDescription>
            Shaurav and Suvam Paint Shop is a top-class paint shop that offers quality products and services to its clients. We are a one-stop solution providing excellent paint options for every need. Our experts follow a robust approach that unlocks the full potential of color in your space.
          </SectionDescription>
          <CTAButton>Talk To Experts Now</CTAButton>
        </LeftSection>
        <ReasonsContainer>
          {reasonsData.map((reason, index) => (
            <ReasonCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <IconContainer>{reason.icon}</IconContainer>
              <ReasonTitle>{reason.title}</ReasonTitle>
              <ReasonDescription>{reason.description}</ReasonDescription>
            </ReasonCard>
          ))}
        </ReasonsContainer>
      </SectionContent>
    </SectionContainer>
  );
};

export default WhyChooseUs;