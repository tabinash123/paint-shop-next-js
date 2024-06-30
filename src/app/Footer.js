import Link from 'next/link';
import styled from 'styled-components';

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

const colors = {
  primary: '#391B49',
  secondary: '#FFD700',
  gradient: 'linear-gradient(90deg, #391B49, #5F2477, #BA3966, #F06C45, #F13E2C)',
  textPrimary: '#ffffff',
  textSecondary: '#fff',
  linkHover: '#ffcc00',
};

const FooterContainer = styled.footer`
  background: ${colors.gradient};
  color: ${colors.textPrimary};
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
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FooterSection = styled.div`
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const FooterTitle = styled.h6`
  margin-bottom: 0.5rem;
  color: ${colors.textPrimary};
  font-weight: bold;
  font-size: 1.25rem;
`;

const FooterSubtitle = styled.h6`
  margin-bottom: 0.5rem;
  color: ${colors.textSecondary};
  font-weight: bold;
  font-size: 1rem;
`;

const FooterLink = styled(Link)`
  display: block;
  margin-bottom: 0.5rem;
  color: ${colors.textPrimary};
  text-decoration: none;
  font-size: 0.9rem;
  &:hover {
    color: ${colors.linkHover};
    text-decoration: underline;
  }
`;

const FooterText = styled.p`
  color: ${colors.textPrimary};
  font-size: 0.9rem;
`;
