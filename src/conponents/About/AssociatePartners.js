"use client"
import React from 'react';
import styled, { keyframes } from 'styled-components';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { Typography } from '@mui/material';

// Define the breakpoints
const theme = {
  breakpoints: {
    sm: '600px',
    md: '960px',
    lg: '1280px',
    xl: '1920px',
  },
};

// Styled-components definitions
const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 20px;
  @media (max-width: ${theme.breakpoints.sm}) {
    padding-top: 10px;
  }
`;

const BannerSection = styled.div`
  background-color: #e02454;
  color: white;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 300px;
  margin: 0 auto;
  position: relative;
  z-index: 5;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  @media (max-width: ${theme.breakpoints.md}) {
    padding: 15px 20px;
    padding: 15px 20px;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    width: 75%;
  }
`;

const IconTextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  @media (max-width: ${theme.breakpoints.sm}) {
    gap: 10px;
  }
`;

const PartnerSection = styled.div`
  background-color: #003466;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -60px;
  overflow: hidden;
  @media (max-width: ${theme.breakpoints.md}) {
    padding: 30px 15px 15px;
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    margin-top: -10px;
  }
`;

// Keyframes for the scrolling animation
const scroll = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

const PartnerLogoContainer = styled.div`
  display: flex;
  white-space: nowrap;
  animation: ${scroll} 15s linear infinite;
  &:hover {
    animation-play-state: paused;
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    animation: ${scroll} 10s linear infinite;
  }
`;

const PartnerLogo = styled(Typography)`
  color: white;
  font-weight: bold;
 font-size: 2rem;
  font-weight: 800;
  font-family: Arial, sans-serif;

  margin: 0 20px;
  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: 2rem;
    margin: 0 10px;
  }
`;

// Component definition
const AssociatePartners = () => {
  const partners = ['Asian Paints', 'Berger Nepal', 'Kansai Paints', 'Nepal Paints', 'Pashupati Paints'];

  return (
    <BannerWrapper>
      <BannerSection>
        <IconTextWrapper>
          <ColorLensIcon style={{ fontSize: '28px' }} />
          <Typography variant="body1" style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
            Our Associate Partners
          </Typography>
        </IconTextWrapper>
      </BannerSection>
      <PartnerSection>
        <PartnerLogoContainer>
          {partners.map((partner, index) => (
            <PartnerLogo key={index} variant="body2">{partner}</PartnerLogo>
          ))}
          {/* Duplicate partners to create continuous scrolling effect */}
          {partners.map((partner, index) => (
            <PartnerLogo key={`${index}-duplicate`} variant="body2">{partner}</PartnerLogo>
          ))}
        </PartnerLogoContainer>
      </PartnerSection>
    </BannerWrapper>
  );
};

export default AssociatePartners;
