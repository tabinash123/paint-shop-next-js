import Link from 'next/link';
import styled from 'styled-components';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <FooterTitle>SnS Paint</FooterTitle>
            <FooterText>&copy; {new Date().getFullYear()} SnS Paint. All rights reserved.</FooterText>
          </FooterSection>
          <FooterSection>
            <FooterSubtitle>Quick Links</FooterSubtitle>
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/products">Products</FooterLink>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </FooterSection>
          <FooterSection></FooterSection>
          <FooterSection>
            <FooterSubtitle>Contact Us</FooterSubtitle>
            <FooterText>Sesmati, Kathmandu, Nepal</FooterText>
            <FooterText>Email: hariaryal222@gmail.com</FooterText>
            <FooterText>Phone: +123 456 7890</FooterText>
          </FooterSection>
        </FooterGrid>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background: linear-gradient(90deg, #1954a8, #5F2477, #BA3966, #d02C45, #d67824);
  color: #fff;
  padding: 2rem 1rem;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
    padding: 2rem 3rem;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const FooterSection = styled.div`
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const FooterTitle = styled.h6`
  margin-bottom: 0.5rem;
  color: #fff; 
  font-weight: bold;
`;

const FooterSubtitle = styled.h6`
  margin-bottom: 0.5rem;
  color: #FFD700;
`;

const FooterLink = styled(Link)`
  display: block;
  margin-bottom: 0.5rem;
  color: #FFD700;
  text-decoration: none;
  &:hover {
    color: #FFD700;
    text-decoration: underline;
  }
`;

const FooterText = styled.p`
  color: #FFD700;
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const IconButtonStyled = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  &:hover {
    color: #FFD700;
  }
`;
