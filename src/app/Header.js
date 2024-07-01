import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import {
  Home as HomeIcon,
  Info as InfoIcon,
  Store as StoreIcon,
  ContactMail as ContactMailIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
  ChevronRight as ChevronRightIcon,
} from '@mui/icons-material';

// Styled Components
const GradientAppBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(90deg, #1954a8, #5F2477, #BA3966, #d02C45, #d67824);
  padding: 10px 20px;
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 480px) {
    padding: 10px 15px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    padding: 10px 25px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 10px 35px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    width: 150px;
    height: auto;
    @media (min-width: 769px) and (max-width: 1024px) {
      width: 170px;
    }
  }
`;

const DesktopMenu = styled.div`
  display: none;
  @media (min-width: 1025px) {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
`;

const MobileMenu = styled.div`
  @media (min-width: 1025px) {
    display: none;
  }
`;

const NavButton = styled.div`
  color: ${({ active }) => (active ? '#FFD700' : '#fff')};
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

const DrawerOverlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1050;
  transition: opacity 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
`;

const DrawerContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background-color: #fff;
  color: #333;
  z-index: 1100;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: ${({ transitionEnabled }) => (transitionEnabled ? 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out' : 'none')};
  box-shadow: ${({ isOpen }) => (isOpen ? '-2px 0 10px rgba(0, 0, 0, 0.3)' : 'none')};
  padding: 20px;
  font-family: 'Poppins', sans-serif;

  @media (min-width: 1025px) {
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
  color: #0056b3;
  text-decoration: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s, color 0.3s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  border-bottom: 1px solid #eee;

  &:hover {
    background-color: #f0f0f0;
    color: #003580;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const IconButton = styled.button.attrs(({ isOpen }) => ({
  'aria-label': 'Menu',
  'aria-expanded': isOpen,
}))`
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

const NavItem = ({ href, active, onClick, children, icon: Icon }) => (
  <Link href={href} passHref style={{textDecoration:'none'}} >
    <DrawerNavButton onClick={onClick}>
      {Icon && (
        <IconContainer>
          <Icon />
        </IconContainer>
      )}
      {children}
      <ChevronRightIcon />
    </DrawerNavButton>
  </Link>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(false);
  const router = useRouter();
  const drawerRef = useRef(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyPress);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyPress);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isOpen]);

  useEffect(() => {
    setTransitionEnabled(true);
  }, []);

  const isActive = (pathname) => router.pathname === pathname;

  const imageSrc =
    'https://dt-paintpros.myshopify.com/cdn/shop/files/logo_a162f414-bff7-4279-b3f9-f69a785e16df.png';

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
          <Link href="/" passHref>
            <NavButton active={isActive('/')}>Home</NavButton>
          </Link>
          <Link href="/products" passHref>
            <NavButton active={isActive('/products')}>Products</NavButton>
          </Link>
          <Link href="/about" passHref>
            <NavButton active={isActive('/about')}>About</NavButton>
          </Link>
          <Link href="/blog" passHref>
            <NavButton active={isActive('/blog')}>Blog</NavButton>
          </Link>
          <Link href="/contact" passHref>
            <NavButton active={isActive('/contact')}>Contact</NavButton>
          </Link>
        </DesktopMenu>
        <MobileMenu>
          <IconButton onClick={toggleDrawer} isOpen={isOpen}>
            <MenuIcon style={{ color: '#fff' }} />
          </IconButton>
        </MobileMenu>
      </GradientAppBar>
      <DrawerOverlay isOpen={isOpen} onClick={toggleDrawer} />
      <DrawerContainer ref={drawerRef} isOpen={isOpen} transitionEnabled={transitionEnabled}>
        <DrawerHeader>
          <IconButton onClick={toggleDrawer} aria-label="Close Menu" isOpen={isOpen}>
            <CloseIcon />
          </IconButton>
        </DrawerHeader>
        <DrawerMenu  >
          <NavItem href="/"  active={isActive('/')} onClick={toggleDrawer} icon={HomeIcon}>
            Home
          </NavItem>
          <NavItem href="/products" active={isActive('/products')} onClick={toggleDrawer} icon={StoreIcon}>
            Products
          </NavItem>
          <NavItem href="/about" active={isActive('/about')} onClick={toggleDrawer} icon={InfoIcon}>
            About
          </NavItem>
          <NavItem href="/contact" active={isActive('/contact')} onClick={toggleDrawer} icon={ContactMailIcon}>
            Contact
          </NavItem>
          <NavItem href="/blog" active={isActive('/blog')} onClick={toggleDrawer} icon={HomeIcon}>
            Blog
          </NavItem>
        </DrawerMenu>
      </DrawerContainer>
    </>
  );
};

export default Navbar;
