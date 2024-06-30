import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Home as HomeIcon, Info as InfoIcon, Store as StoreIcon, ContactMail as ContactMailIcon, Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

// Styled Components
const GradientAppBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(90deg, #1954a8, #5F2477, #BA3966, #d02C45, #d67824);
  padding: 10px 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 480px) { /* Mobile */
    padding: 10px 15px;
  }
  @media (min-width: 481px) and (max-width: 768px) { /* Tablet */
    padding: 10px 25px;
  }
  @media (min-width: 769px) and (max-width: 1024px) { /* Laptop */
    padding: 10px 35px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 480px) { /* Mobile */
    img {
      width: 150px;
      height: auto;
    }
  }
  @media (min-width: 481px) and (max-width: 768px) { /* Tablet */
    img {
      width: 150px;
      height: auto;
    }
  }
  @media (min-width: 769px) and (max-width: 1024px) { /* Laptop */
    img {
      width: 170px;
      height: auto;
    }
  }
`;

const DesktopMenu = styled.div`
  display: none;
  @media (min-width: 1025px) { /* Desktop */
    display: flex;
    gap: 2rem;
    align-items: center;
  }
`;

const MobileMenu = styled.div`
  @media (min-width: 1025px) { /* Desktop */
    display: none;
  }
`;

const NavButton = styled.div`
  color: ${props => (props.active ? '#FFD700' : '#fff')};
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
  width: 200px;
  height: 100%;
  background-color: #f5f5f5;
  color: #333;
  z-index: 1100;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  box-shadow: ${({ isOpen }) => (isOpen ? '-2px 0 10px rgba(0, 0, 0, 0.3)' : 'none')};
  // padding: 20px;
  font-family: 'Poppins', sans-serif;

  @media (min-width: 1025px) { /* Desktop */
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
  color: black;
  text-decoration: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: color 0.3s;
  display: flex;
  align-items: center;
  &:hover {
    // color: white;
  }
  &:hover{
  background: linear-gradient(45deg, rgba(255, 87, 51, 0.3), rgba(255, 87, 51, 0.3) 75%, rgba(255, 165, 0, 0.3) 75%, rgba(255, 165, 0, 0.3))
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const IconButton = styled.button.attrs({
  'aria-label': 'Menu',
  'aria-expanded': props => props.isOpen,
})`
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

// NavItem Component
const NavItem = ({ href, active, onClick, children, icon: Icon }) => (
  <Link href={href} passHref>
    <DrawerNavButton active={active} onClick={onClick}>
      {Icon && <IconContainer><Icon /></IconContainer>}
      {children}
    </DrawerNavButton>
  </Link>
);

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const drawerRef = useRef();

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

  const isActive = (pathname) => router.pathname === pathname;

  const imageSrc = 'https://dt-paintpros.myshopify.com/cdn/shop/files/logo_a162f414-bff7-4279-b3f9-f69a785e16df.png';

  return (
    <>
      <GradientAppBar>
        <Link href="/" passHref style={{textDecorationLine:"none"}}>
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
          <Link href="/" passHref style={{textDecorationLine:"none"}}><NavButton active={isActive("/")}>Home</NavButton></Link>
          <Link href="/products" passHref style={{textDecorationLine:"none"}}><NavButton active={isActive("/products")}>Products</NavButton></Link>
          <Link href="/about" passHref style={{textDecorationLine:"none"}}><NavButton active={isActive("/about")}>About</NavButton></Link>
          <Link href="/blog" passHref style={{textDecorationLine:"none"}}><NavButton active={isActive("/blog")}>Blog</NavButton></Link>
          <Link href="/contact" passHref style={{textDecorationLine:"none"}}><NavButton active={isActive("/contact")}>Contact</NavButton></Link>
        </DesktopMenu>
        <MobileMenu>
          <IconButton onClick={toggleDrawer}>
            <MenuIcon style={{ color: '#fff' }} />
          </IconButton>
        </MobileMenu>
      </GradientAppBar>
      <DrawerOverlay isOpen={isOpen} onClick={toggleDrawer} />
      <DrawerContainer ref={drawerRef} isOpen={isOpen} tabIndex={-1}>
        <DrawerHeader>
          <IconButton onClick={toggleDrawer} aria-label="Close Menu">
            <CloseIcon style={{ color: '#fff' }} />
          </IconButton>
        </DrawerHeader>
        <DrawerMenu>
          <NavItem href="/"    active={isActive("/")} onClick={toggleDrawer} icon={HomeIcon} >Home</NavItem>
          <NavItem href="/products"    active={isActive("/products")} onClick={toggleDrawer} icon={StoreIcon}>Products</NavItem>
          <NavItem href="/about"    active={isActive("/about")} onClick={toggleDrawer} icon={InfoIcon}>About</NavItem>
          <NavItem href="/contact"    active={isActive("/contact")} onClick={toggleDrawer} icon={ContactMailIcon}>Contact</NavItem>
          <NavItem href="/blog"    active={isActive("/blog")} onClick={toggleDrawer} icon={HomeIcon}>Blog</NavItem>
        </DrawerMenu>
      </DrawerContainer>
    </>
  );
};

export default Navbar;
