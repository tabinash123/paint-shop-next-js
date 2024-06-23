import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, ListItemIcon, Popover, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import StoreIcon from '@mui/icons-material/Store';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import styled from 'styled-components';
import ProductDropdown from './DropdownContainer'; // Import the new component

const GradientAppBar = styled(AppBar)`
  padding: 0px 30px;
  background: linear-gradient(90deg, #1954a8, #5F2477, #BA3966, #d02C45, #d67824);
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    if (!isHovering) {
      setAnchorEl(null);
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setAnchorEl(null);
  };

  const imageSrc = 'https://dt-paintpros.myshopify.com/cdn/shop/files/logo_a162f414-bff7-4279-b3f9-f69a785e16df.png';

  const open = Boolean(anchorEl);

  return (
    <GradientAppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Montserrat, sans-serif' }}>
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
        </Typography>
        <DesktopMenu>
          <Link href="/" passHref style={{ textDecorationLine: 'none' }}>
            <NavButton style={{ fontSize: '16px', fontFamily: 'Open Sans, sans-serif' }}>Home</NavButton>
          </Link>
          <div
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <Link href="/products" passHref style={{ textDecorationLine: 'none' }}>
            <NavButton
              aria-owns={open ? 'mouse-over-popover' : undefined}
              aria-haspopup="true"
              style={{ fontSize: '16px', fontFamily: 'Open Sans, sans-serif', display: 'flex', alignItems: 'center' }}
            >
              Products <ArrowDropDownIcon />
              </NavButton>
              </Link>
            <Popover
              id="mouse-over-popover"
              sx={{
                pointerEvents: 'auto',
              }}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              onClose={handlePopoverClose}
              disableRestoreFocus
            >
              <ProductDropdown onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
            </Popover>
          </div>
          <Link href="/about" passHref style={{ textDecorationLine: 'none' }}>
            <NavButton style={{ fontSize: '16px', fontFamily: 'Open Sans, sans-serif' }}>About</NavButton>
          </Link>
          <Link href="/contact" passHref style={{ textDecorationLine: 'none' }}>
            <NavButton style={{ fontSize: '16px', fontFamily: 'Open Sans, sans-serif' }}>Contact</NavButton>
          </Link>
        </DesktopMenu>
        <MobileMenu>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        </MobileMenu>
        <Drawer
          anchor="right"
          open={isOpen}
          onClose={toggleDrawer}
          PaperProps={{ sx: { backgroundColor: '#f5f5f5', width: '40%' } }}
        >
          <DrawerHeader>
            <IconButton onClick={toggleDrawer}>
              <CloseIcon sx={{ color: '#1565C0' }} />
            </IconButton>
          </DrawerHeader>
          <List sx={{ fontFamily: 'Montserrat, sans-serif', padding: '2rem' }}>
            <Link href="/" passHref>
              <CustomListItem button onClick={toggleDrawer}>
                <ListItemIcon><HomeIcon sx={{ color: '#1565C0' }} /></ListItemIcon>
                <CustomListItemText primary="Home" />
              </CustomListItem>
            </Link>
            <Link href="/products" passHref>
              <CustomListItem button onClick={toggleDrawer}>
                <ListItemIcon><StoreIcon sx={{ color: '#1565C0' }} /></ListItemIcon>
                <CustomListItemText primary="Products" />
              </CustomListItem>
            </Link>
            <Link href="/about" passHref>
              <CustomListItem button onClick={toggleDrawer}>
                <ListItemIcon><InfoIcon sx={{ color: '#1565C0' }} /></ListItemIcon>
                <CustomListItemText primary="About" />
              </CustomListItem>
            </Link>
            <Link href="/contact" passHref>
              <CustomListItem button onClick={toggleDrawer}>
                <ListItemIcon><ContactMailIcon sx={{ color: '#1565C0' }} /></ListItemIcon>
                <CustomListItemText primary="Contact" />
              </CustomListItem>
            </Link>
          </List>
        </Drawer>
      </Toolbar>
    </GradientAppBar>
  );
};

export default Navbar;

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

const DrawerHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  width: 100%;
`;

const CustomListItem = styled(ListItem)`
  margin-bottom: 1rem;
  border-radius: 8px;
  &:hover {
    background-color: #e0e0e0;
  }
`;

const CustomListItemText = styled(ListItemText)`
  & .MuiListItemText-primary {
    font-weight: bold;
    color: #1565C0;
  }
`;
