"use client"
import React from 'react';
import { styled } from '@mui/system';
import { Grid, TextField, Button, Typography, IconButton, Box, Link } from '@mui/material';
import { Phone, Mail, LocationOn, Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const FooterWrapper = styled('footer')({
  backgroundColor: '#00264d',
  color: 'white',
  padding: '40px 60px 20px',
});

const Logo = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '20px',
});

const LogoIcon = styled(Box)({
  width: '50px',
  height: '43px',
  backgroundColor: '#e91e63',
  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
  marginRight: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const ArrowIcon = styled(Box)({
  width: 0,
  height: 0,
  borderLeft: '8px solid transparent',
  borderRight: '8px solid transparent',
  borderBottom: '16px solid white',
  transform: 'rotate(90deg)',
});

const LogoText = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

const BrandName = styled(Typography)({
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#fff',
  lineHeight: 1,
});

const Tagline = styled(Typography)({
  fontSize: '12px',
  color: '#fff',
  textTransform: 'uppercase',
});

const Description = styled(Typography)({
  fontSize: '14px',
  marginBottom: '20px',
  lineHeight: 1.5,
});

const SocialIcons = styled(Box)({
  display: 'flex',
  gap: '10px',
});

const FooterColumn = styled(Box)({
  marginBottom: '20px',
});

const FooterTitle = styled(Typography)({
  color: 'white',
  marginBottom: '20px',
  fontSize: '18px',
  fontWeight: 'bold',
});

const FooterLink = styled(Link)({
  color: '#b3b3b3',
  display: 'block',
  marginBottom: '10px',
  fontSize: '14px',
  '&:hover': {
    color: '#fff',
  },
});

const ContactInfo = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '15px',
  fontSize: '14px',
  color: '#b3b3b3',
});

const ContactIcon = styled(Box)({
  marginRight: '10px',
  color: '#e91e63',
});

const SubscribeInput = styled(TextField)({
  marginBottom: '10px',
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'white',
  },
});

const SubscribeButton = styled(Button)({
  backgroundColor: '#e91e63',
  '&:hover': {
    backgroundColor: '#d81b60',
  },
});

const Copyright = styled(Box)({
  textAlign: 'center',
  marginTop: '30px',
  paddingTop: '20px',
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  fontSize: '14px',
  color: '#b3b3b3',
});

const Footer = () => (
  <FooterWrapper>
    <Grid container spacing={4}>
      <Grid item xs={12} sm={12} md={10} lg={10}>
        <Logo>
          <LogoIcon>
            <ArrowIcon />
          </LogoIcon>
          <LogoText>
            <BrandName>SNS PAINT</BrandName>
            <Tagline>COLOR YOUR DREAMS</Tagline>
          </LogoText>
        </Logo>
        <Description>We provide a wide range of house painting colors and tools to bring your home to life.</Description>
        <SocialIcons>
          <IconButton href="#" color="inherit"><Facebook /></IconButton>
          <IconButton href="#" color="inherit"><Twitter /></IconButton>
          <IconButton href="#" color="inherit"><Instagram /></IconButton>
          <IconButton href="#" color="inherit"><LinkedIn /></IconButton>
        </SocialIcons>
      </Grid>
      <Grid item xs={12} sm={4} md={2} lg={2}>
        <FooterColumn>
          <FooterTitle>Products</FooterTitle>
          <FooterLink href="#">Interior Paints</FooterLink>
          <FooterLink href="#">Exterior Paints</FooterLink>
          <FooterLink href="#">Tools & Accessories</FooterLink>
        </FooterColumn>
      </Grid>
      <Grid item xs={12} sm={4} md={2} lg={2}>
        <FooterColumn>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink href="about">About Us</FooterLink>
          <FooterLink href="contact">Contact Us</FooterLink>
          <FooterLink href="#">FAQ</FooterLink>
        </FooterColumn>
      </Grid>
      
    </Grid>
    <Grid container>
      <Grid item xs={12}>
        <ContactInfo>
          <ContactIcon><Phone /></ContactIcon>
          Phone: (+977) 123 456 789
        </ContactInfo>
        <ContactInfo>
          <ContactIcon><Mail /></ContactIcon>
          Email: info@sns-paint.com
        </ContactInfo>
        <ContactInfo>
          <ContactIcon><LocationOn /></ContactIcon>
          Location: Kathmandu, Nepal
        </ContactInfo>
      </Grid>
    </Grid>
    <Copyright>
      © 2024 SNS Paint. Powered by <Link href="https://chitrakootweb.com" style={{ color: '#e91e63' }}>Chitrakoot Web</Link>
    </Copyright>
  </FooterWrapper>
);

export default Footer;
