"use client"
import React from 'react';
import Image from 'next/image';
import styled, { createGlobalStyle } from 'styled-components';
import { Container, Typography, IconButton } from '@mui/material';
import {
  Phone, Email, LocationOn, Facebook
} from '@mui/icons-material';
import imag from '../../../public/assets/images/house.png'


const ContactUs = () => {
  return (
    <>
      <GlobalStyle />
      <StyledContainer>
        <ContentWrapper>
          <ContactInfoContainer>
            <Header>
              <Typography variant="h4" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="subtitle1">
                We would love to hear from you. Here is how you can reach us.
              </Typography>
            </Header>

            <ContactInfo>
              <Typography variant="h6">Contact Information</Typography>
              <InfoItem>
                <Phone sx={{ mr: 1 }} /> +1 234 567 890
              </InfoItem>
              <InfoItem>
                <Email sx={{ mr: 1 }} /> contact@ecommerce.com
              </InfoItem>
              <InfoItem>
                <LocationOn sx={{ mr: 1 }} /> 1234 E-commerce St, Shopsville, USA
              </InfoItem>
              <ShopImageContainer>
                <Image 
                  src={imag} 
                  alt="Shop Image" 
                  width={500} 
                  height={300} 
                  layout="responsive"
                  priority
                />
              </ShopImageContainer>
              <SocialMedia>
                <IconButton href="https://www.facebook.com" target="_blank" aria-label="Facebook"><Facebook /></IconButton>
              </SocialMedia>
            </ContactInfo>
          </ContactInfoContainer>

          <MapContainer>
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps?q=Sesamati,+khola,+Kathmandu,+Nepal&output=embed"
              allowFullScreen
              aria-label="Map"
            ></iframe>
          </MapContainer>
        </ContentWrapper>
      </StyledContainer>
    </>
  );
};

export default ContactUs;

// Global Style
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lora', serif;
    color: #333;
    background-color: #f4f4f9;
    margin: 0;
    padding: 0;
  }
`;

// Styled Components
const StyledContainer = styled(Container)`
  margin-top: 40px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 20px;
    padding: 10px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContactInfoContainer = styled.div`
  flex: 1;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const Header = styled.div`
  margin-bottom: 24px;
  text-align: center;
`;

const ContactInfo = styled.div`
  margin-top: 24px;
  text-align: center;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  justify-content: center;
`;

const ShopImageContainer = styled.div`
  margin-top: 24px;
  width: 100%;
`;

const MapContainer = styled.div`
  flex: 1;
  height: 350px;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 300px;
  }
`;
