import React from 'react';
import styled from 'styled-components';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SupportIcon from '@mui/icons-material/Support';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
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

const ReasonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
`;

const ReasonCard = styled.div`
  flex: 1 1 200px;
  max-width: 220px;
  margin: 10px;
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #fff;
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
