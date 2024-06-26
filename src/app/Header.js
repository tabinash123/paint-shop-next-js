import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import { Home as HomeIcon, Info as InfoIcon, Store as StoreIcon, ContactMail as ContactMailIcon, Menu as MenuIcon } from '@mui/icons-material';

const GradientAppBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(90deg, #1954a8, #5F2477, #BA3966, #d02C45, #d67824);
  padding: 10px 40px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
`;

const DesktopMenu = styled.div`
  display: none;
  @media (min-width: 769px) {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
`;

const MobileMenu = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;

const NavButton = styled.div`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: color 0.3s, transform 0.3s;
  position: relative;
  &:hover {
    color: #FFD700;
    transform: translateY(-2px);
  }
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    display: block;
    margin-top: 5px;
    right: 0;
    background: #FFD700;
    transition: width 0.3s ease, background-color 0.3s ease;
  }
  &:hover::after {
    width: 100%;
    left: 0;
    background: #FFD700;
  }
`;

const DrawerContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 75%;
  height: 100%;
  background-color: #333;
  color: #fff;
  z-index: 1100;
  transform: ${props => (props.isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  padding: 20px;
  display: ${props => (props.isOpen ? 'block' : 'none')};
  @media (min-width: 769px) {
    display: none;
  }
`;

const DrawerHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;

const DrawerMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const DrawerNavButton = styled.div`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: color 0.3s;
  display: flex;
  align-items: center;
  &:hover {
    color: #FFD700;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  &:hover {
    opacity: 0.8;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const imageSrc = 'https://dt-paintpros.myshopify.com/cdn/shop/files/logo_a162f414-bff7-4279-b3f9-f69a785e16df.png';

  return (
    <>
      <GradientAppBar>
        <Link href="/" passHref>
          <LogoContainer>
            <Image
              src={imageSrc}
              alt="SnS Paint"
              width={170}
              height={70}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </LogoContainer>
        </Link>
        <DesktopMenu>
          <Link href="/" passHref style={{textDecorationLine:"none"}} ><NavButton>Home</NavButton></Link>
          <Link href="/products" passHref style={{textDecorationLine:"none"}} ><NavButton>Products</NavButton></Link>
          <Link href="/about" passHref style={{textDecorationLine:"none"}} ><NavButton>About</NavButton></Link>
          <Link href="/blog" passHref style={{textDecorationLine:"none"}} ><NavButton>Blog</NavButton></Link>
          <Link href="/contact" passHref style={{textDecorationLine:"none"}} ><NavButton>Contact</NavButton></Link>
        </DesktopMenu>
        <MobileMenu>
          <IconButton onClick={toggleDrawer}>
            <MenuIcon style={{ color: '#fff' }} />
          </IconButton>
        </MobileMenu>
      </GradientAppBar>
      <DrawerContainer isOpen={isOpen}>
        <DrawerHeader>
          <IconButton onClick={toggleDrawer}>
            <MenuIcon style={{ color: '#fff' }} />
          </IconButton>
        </DrawerHeader>
        <DrawerMenu>
          <Link href="/" passHref>
            <DrawerNavButton onClick={toggleDrawer}>
              <IconContainer><HomeIcon /></IconContainer> Home
            </DrawerNavButton>
          </Link>
          <Link href="/products" passHref>
            <DrawerNavButton onClick={toggleDrawer}>
              <IconContainer><StoreIcon /></IconContainer> Products
            </DrawerNavButton>
          </Link>
          <Link href="/about" passHref>
            <DrawerNavButton onClick={toggleDrawer}>
              <IconContainer><InfoIcon /></IconContainer> About
            </DrawerNavButton>
          </Link>
          <Link href="/contact" passHref>
            <DrawerNavButton onClick={toggleDrawer}>
              <IconContainer><ContactMailIcon /></IconContainer> Contact
            </DrawerNavButton>
          </Link>
          <Link href="/blog" passHref>
            <DrawerNavButton onClick={toggleDrawer}>
              <IconContainer><HomeIcon /></IconContainer> Blog
            </DrawerNavButton>
          </Link>
        </DrawerMenu>
      </DrawerContainer>
    </>
  );
};

export default Navbar;
