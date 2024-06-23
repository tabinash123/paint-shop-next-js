// src/ContactInfoSection.js
import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Email, Phone, LocationOn, Facebook, Twitter, Instagram } from '@mui/icons-material';
import styled from 'styled-components';

const InfoContainer = styled(Box)`
  padding: 50px 20px;
  background-color: #ffffff;
  text-align: center;
`;

const InfoBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const InfoText = styled(Typography)`
  margin-left: 10px;
  font-size: 1.2rem;
`;

const SocialIcons = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;

const StyledIconButton = styled(IconButton)`
  color: #333;
  &:hover {
    color: #ff0049;
  }
`;

const MapContainer = styled.div`
  height: 300px;
  margin-top: 30px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const ContactInfoSection = () => {
  return (
    <InfoContainer>
      <InfoBox>
        <LocationOn />
        <InfoText>1234 PaintShop Street, Color City, CA 12345</InfoText>
      </InfoBox>
      <InfoBox>
        <Phone />
        <InfoText>+1 (234) 567-890</InfoText>
      </InfoBox>
      <InfoBox>
        <Email />
        <InfoText>contact@paintshop.com</InfoText>
      </InfoBox>
      <MapContainer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345098044!2d144.95373631531662!3d-37.81627977975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727e4f8caa5a0b!2sEnvato!5e0!3m2!1sen!2sus!4v1611781011169!5m2!1sen!2sus"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          title="Google Maps"
        ></iframe>
      </MapContainer>
      <SocialIcons>
        <StyledIconButton href="https://facebook.com">
          <Facebook />
        </StyledIconButton>
        <StyledIconButton href="https://twitter.com">
          <Twitter />
        </StyledIconButton>
        <StyledIconButton href="https://instagram.com">
          <Instagram />
        </StyledIconButton>
      </SocialIcons>
    </InfoContainer>
  );
};

export default ContactInfoSection;
