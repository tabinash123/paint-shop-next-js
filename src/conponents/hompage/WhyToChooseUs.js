import React from 'react';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SupportIcon from '@mui/icons-material/Support';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const SectionContainer = styled.div`
  padding: 30px 10px;
  background-color: #f5f5f5;
  text-align: center;
`;

const SectionHeader = styled(Typography)`
  background: linear-gradient(90deg, #FF5733, #C70039, #900C3F, #581845);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  font-family: 'Roboto', sans-serif;
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
`;

const ReasonTitle = styled(Typography)`
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 5px;
`;

const ReasonDescription = styled(Typography)`
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  color: #555;
`;

const reasonsData = [
  {
    icon: <VerifiedUserIcon fontSize="large" />,
    title: "Trusted Quality",
    description: "We provide the highest quality products that meet industry standards.",
  },
  {
    icon: <ThumbUpIcon fontSize="large" />,
    title: "Customer Satisfaction",
    description: "Our customers' satisfaction is our top priority.",
  },
  {
    icon: <SupportIcon fontSize="large" />,
    title: "24/7 Support",
    description: "We offer round-the-clock support to assist you whenever you need it.",
  },
  {
    icon: <LocalShippingIcon fontSize="large" />,
    title: "Fast Delivery",
    description: "We ensure quick and safe delivery of your orders.",
  },
];

const WhyChooseUs = () => {
  return (
    <SectionContainer>
      <SectionHeader variant="h4">Why Choose Us</SectionHeader>
      <ReasonsContainer>
        {reasonsData.map((reason, index) => (
          <ReasonCard key={index}>
            <IconContainer>{reason.icon}</IconContainer>
            <ReasonTitle variant="h6">{reason.title}</ReasonTitle>
            <ReasonDescription>{reason.description}</ReasonDescription>
          </ReasonCard>
        ))}
      </ReasonsContainer>
    </SectionContainer>
  );
};

export default WhyChooseUs;
