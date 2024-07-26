// components/Navbar.js
import Link from 'next/link';
import NavbarClient from './NavbarClient';
import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';

const GradientAppBar = ({ children }) => (
  <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'linear-gradient(90deg, #1954a8, #5F2477, #BA3966, #d02C45, #d67824)',
    padding: '10px 20px',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  }}>
    {children}
  </div>
);

const LogoWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
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

const Logo = () => (
  <LogoWrapper>
    <LogoIcon>
      <ArrowIcon />
    </LogoIcon>
    <LogoText>
      <BrandName style={{textdecoration :"none"}} >SNS PAINT</BrandName>
      <Tagline>COLOR YOUR DREAMS</Tagline>
    </LogoText>
  </LogoWrapper>
);

export default function Navbar() {
  return (
    <GradientAppBar>
      <Link href="/" passHref>
        <Logo />
      </Link>
      <NavbarClient />
    </GradientAppBar>
  );
}
