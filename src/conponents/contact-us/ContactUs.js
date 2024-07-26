"use client";
import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { Facebook, Phone, Email, LocationOn, Instagram, LinkedIn } from '@mui/icons-material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ViberIcon from '@mui/icons-material/PhoneInTalk';

const ContactUs = () => {
  return (
    <>
      <Head>
        {/* Your existing Head content */}
      </Head>
      <StyledContainer>
        <Header>
          <Title>Contact Us</Title>
          <Subtitle>Here is how you can reach us</Subtitle>
        </Header>
        <ContentWrapper>
          <ContactInfoContainer>
            <ContactInfo>
              <InfoTitle>Contact Information</InfoTitle>
              <InfoItem>
                <Email /> hariaryal222@gmail.com
              </InfoItem>
              <InfoItem>
                <Phone /> +977 9851014256
              </InfoItem>
              <InfoItem>
                <WhatsAppIcon /> +977 9851014256
              </InfoItem>
              <InfoItem>
                <ViberIcon /> +977 9851014256
              </InfoItem>
              <InfoItem>
                <LocationOn /> Sesamati Khola, Kathmandu
              </InfoItem>
            </ContactInfo>
            <BusinessHours>
              <InfoTitle>Business Hours</InfoTitle>
              <InfoItem>Sunday - Friday: 10:00 AM - 5:00 PM</InfoItem>
              <InfoItem>Saturday: Closed</InfoItem>
            </BusinessHours>
           
          </ContactInfoContainer>
        </ContentWrapper>
        <MapContainer>
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
  src="https://www.google.com/maps?q=Shuvam+%26+Saurav+Trade+Centre,+Kathmandu,+Nepal&output=embed"
            allowFullScreen
            aria-label="Map"
          ></iframe>
        </MapContainer>
      </StyledContainer>
    </>
  );
};

export default ContactUs;

// Styled Components
const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 40px;
  background-color: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;

  @media (max-width: 768px) {
    margin: 20px auto;
    padding: 20px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContactInfoContainer = styled.div`
  width: 100%;
  max-width: 600px;
`;

const Header = styled.header`
  margin-bottom: 40px;
  text-align: center;
`;

const Title = styled.h1`
 color: #003366;
  font-size: 2rem;
  font-weight: 800;
  font-family: Arial, sans-serif;
  margin-bottom: 12px;
  color: #1e3a8a;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #F73E3C;
`;

const ContactInfo = styled.div`
  margin-bottom: 30px;
  background-color: #f1f5f9;
  padding: 20px;
  border-radius: 8px;
`;

const BusinessHours = styled.div`
  margin-bottom: 30px;
  background-color: #f1f5f9;
  padding: 20px;
  border-radius: 8px;
`;

const SocialLinks = styled.div`
  margin-bottom: 30px;
  background-color: #f1f5f9;
  padding: 20px;
  border-radius: 8px;
`;

const InfoTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 16px;
  color: #333;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  font-size: 1rem;
  color: #333;

  svg {
    margin-right: 12px;
    color: #F73E3C;
  }
`;




const MapContainer = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;