"use client"
import React from 'react';
import styled from 'styled-components';
import { Facebook, Phone, Email, LocationOn } from '@mui/icons-material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ViberIcon from '@mui/icons-material/PhoneInTalk';

const ContactUs = () => {
  return (
    <StyledContainer>
      <ContentWrapper>
        <ContactInfoContainer>
          <Header>
            <Title>Contact Us</Title>
            <Subtitle> Here is how you can reach us.</Subtitle>
          </Header>

          <ContactInfo>
            <InfoTitle>Contact Information</InfoTitle>
            <InfoItem>
              <Email style={{ marginRight: '8px' }} />hariaryal222@gmail.com
            </InfoItem>
            <InfoItem>
              <Phone style={{ marginRight: '8px' }} /> +1 234 567 890
            </InfoItem>
            <InfoItem>
              <WhatsAppIcon style={{ marginRight: '8px' }} /> +1 234 567 891
            </InfoItem>
            <InfoItem>
              <ViberIcon style={{ marginRight: '8px' }} /> +1 234 567 892
            </InfoItem>
            <InfoItem>
              <LocationOn style={{ marginRight: '8px' }} /> sesmati khola,kathmandu
            </InfoItem>
          
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
  );
};

export default ContactUs;

// Styled Components
const StyledContainer = styled.div`
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

const Header = styled.header`
  margin-bottom: 24px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #666;
`;

const ContactInfo = styled.div`
  margin-top: 24px;
  text-align: center;
`;

const InfoTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 16px;
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

const IconButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
  &:hover {
    color: #3b5998;
  }
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
