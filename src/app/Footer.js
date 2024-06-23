import Link from 'next/link';
import styled from 'styled-components';
import { Box, Typography, IconButton, Grid } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent container spacing={4}>
        <Grid item xs={12} md={3}>
          <FooterSection>
            <FooterTitle>YourPaintShop</FooterTitle>
            <FooterText variant="body2">
              &copy; {new Date().getFullYear()} YourPaintShop. All rights reserved.
            </FooterText>
          </FooterSection>
        </Grid>
        <Grid item xs={12} md={3}>
          <FooterSection>
            <FooterSubtitle>Quick Links</FooterSubtitle>
            <FooterLink href="/" passHref>
              Home
            </FooterLink>
            <FooterLink href="/products" passHref>
              Products
            </FooterLink>
            <FooterLink href="/about" passHref>
              About
            </FooterLink>
            <FooterLink href="/contact" passHref>
              Contact
            </FooterLink>
          </FooterSection>
        </Grid>
        <Grid item xs={12} md={3}>
          <FooterSection>
            <FooterSubtitle>Follow Us</FooterSubtitle>
            <SocialMedia>
              <IconButtonStyled color="inherit" href="https://facebook.com" target="_blank">
                <Facebook />
              </IconButtonStyled>
              <IconButtonStyled color="inherit" href="https://twitter.com" target="_blank">
                <Twitter />
              </IconButtonStyled>
              <IconButtonStyled color="inherit" href="https://instagram.com" target="_blank">
                <Instagram />
              </IconButtonStyled>
              <IconButtonStyled color="inherit" href="https://linkedin.com" target="_blank">
                <LinkedIn />
              </IconButtonStyled>
            </SocialMedia>
          </FooterSection>
        </Grid>
        <Grid item xs={12} md={3}>
          <FooterSection>
            <FooterSubtitle>Contact Us</FooterSubtitle>
            <FooterText variant="body2">
              123 Paint Street, Color City, Paintland
            </FooterText>
            <FooterText variant="body2">
              Email: contact@yourpaintshop.com
            </FooterText>
            <FooterText variant="body2">
              Phone: +123 456 7890
            </FooterText>
          </FooterSection>
        </Grid>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled(Box)`
  background: linear-gradient(135deg, #2C3E50 0%, #4A4E69 25%, #6A5ACD 50%, #8B008B 75%, #FFD700 100%);
  color: #fff;
  padding: 2rem 1rem;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
    padding: 2rem 3rem;
  }
`;

const FooterContent = styled(Grid)`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterSection = styled.div`
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const FooterTitle = styled(Typography).attrs({
  variant: 'h6',
  component: 'div'
})`
  margin-bottom: 0.5rem;
  color: #FFD700; /* Gold */
  font-weight: bold;
`;

const FooterSubtitle = styled(Typography).attrs({
  variant: 'h6',
  component: 'div'
})`
  margin-bottom: 0.5rem;
  color: #FFD700; /* Gold */
`;

const FooterLink = styled(Link)`
  display: block;
  margin-bottom: 0.5rem;
  color: #fff;
  text-decoration: none;
  &:hover {
    color: #FFD700; /* Gold */
    text-decoration: underline;
  }
`;

const FooterText = styled(Typography)`
  color: #FFD700; /* Gold */
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const IconButtonStyled = styled(IconButton)`
  color: #fff;
  &:hover {
    color: #FFD700; /* Gold */
  }
`;
