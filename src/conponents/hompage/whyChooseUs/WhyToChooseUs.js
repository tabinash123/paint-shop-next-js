"use client";
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import reasonsData from '../../../data/reasonsData';

const SectionContainer = styled.section`
  padding: 4rem 1rem;
  background-color: #f5f5f5;
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const SectionHeader = styled(motion.h2)`
  color: #003366;
 font-size: 2rem;
  font-weight: 800;
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 0 0.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const HeaderIcon = styled(motion.span)`
  color: #003366;
  font-size: 2.5rem;
  margin: 0 0.5rem;

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
  margin-bottom: 3rem;
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

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

const ReasonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ReasonCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`;

const IconContainer = styled.div`
  margin-bottom: 10px;
  color: #FF5733;
  font-size: 2rem;
`;

const ReasonTitle = styled.h6`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 5px;

  @media (max-width: 600px) {
    font-size: 0.875rem;
  }

  @media (max-width: 400px) {
    font-size: 0.75rem;
  }
`;

const ReasonDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  color: #555;

  @media (max-width: 600px) {
    font-size: 0.75rem;
  }

  @media (max-width: 400px) {
    font-size: 0.625rem;
  }
`;

const WhyChooseUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <SectionContainer>
      <SectionContent>
        <HeaderContainer>
         
          <SectionHeader
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Us
          </SectionHeader>
          <HeaderIcon
            as={motion.div}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CheckCircleIcon />
          </HeaderIcon>
        </HeaderContainer>
        <SubheadingContainer>
          <SubheadingIcon
            as={motion.div}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <StarIcon />
          </SubheadingIcon>
          <Subheading
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Top reasons to choose us
          </Subheading>
          <SubheadingIcon
            as={motion.div}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <StarIcon />
          </SubheadingIcon>
        </SubheadingContainer>
        <ReasonsContainer>
          {reasonsData.map((reason, index) => (
            <ReasonCard
              key={index}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <IconContainer>
                <motion.div
                  animate={{
                    rotateY: hoveredIndex === index ? 360 : 0,
                    color: hoveredIndex === index ? '#e91e63' : '#FF5733',
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {reason.icon}
                </motion.div>
              </IconContainer>
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