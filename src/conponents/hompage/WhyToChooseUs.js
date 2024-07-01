"use client"
import React from 'react';
import styled from 'styled-components';
import reasonsData from '../../data/reasonsData';

const SectionContainer = styled.div`
  padding: 30px 10px;
  background-color: #f5f5f5;
  text-align: center;
`;

const SectionHeader = styled.h4`
  background: linear-gradient(90deg, #FF5733, #C70039, #900C3F, #581845);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 50px;
  font-family: 'Roboto', sans-serif;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
  @media (max-width: 400px) {
    font-size: 1.25rem;
  }
`;

const Subheading = styled.p`
  font-size: 1.25rem;
  color: #666666;
  margin-bottom: 40px;
  font-family: 'Roboto', sans-serif;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
  @media (max-width: 400px) {
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

const ReasonCard = styled.div`
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
  return (
    <SectionContainer>
      <SectionHeader>Why Choose Us</SectionHeader>
      <Subheading>Here are the top reasons why customers choose us for their painting needs</Subheading>
      <ReasonsContainer>
        {reasonsData.map((reason, index) => (
          <ReasonCard key={index}>
            <IconContainer>{reason.icon}</IconContainer>
            <ReasonTitle>{reason.title}</ReasonTitle>
            <ReasonDescription>{reason.description}</ReasonDescription>
          </ReasonCard>
        ))}
      </ReasonsContainer>
    </SectionContainer>
  );
};

export default WhyChooseUs;
