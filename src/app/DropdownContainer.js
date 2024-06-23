import React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import Link from 'next/link';

const Container = styled.div`
  display: flex;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 8px;
`;

const Column = styled.div`
  margin-right: 40px;
`;

const Title = styled(Typography)`
  font-weight: bold;
  margin-bottom: 10px;
  border-bottom: 2px solid #e91e63;
  display: inline-block;
`;

const Item = styled(Typography)`
  margin-bottom: 8px;
  cursor: pointer;
  color: inherit; /* Ensure it inherits the parent's color */
  text-decoration: none; /* Remove underline */
  &:hover {
    color: #e91e63;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none; /* Remove underline */
  color: inherit; /* Ensure it inherits the parent's color */
`;

const ProductDropdown = ({ onMouseEnter, onMouseLeave }) => {
  return (
    <Container onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {productCategories.map((category, index) => (
        <Column key={index}>
          <Title variant="subtitle1">{category.title}</Title>
          {category.items.map((item, idx) => (
            <StyledLink href='/products' passHref key={idx}>
              <Item variant="body2">{item.label}</Item>
            </StyledLink>
          ))}
        </Column>
      ))}
    </Container>
  );
};

const productCategories = [
  {
    title: 'Walls & Ceilings',
    items: [
      { label: 'Premium Ceiling Paint', href: '/products/walls-ceilings/premium-ceiling-paint' },
      { label: 'Premium Wall Paint', href: '/products/walls-ceilings/premium-wall-paint' },
      { label: 'Sample Wall Paint', href: '/products/walls-ceilings/sample-wall-paint' },
      { label: 'Sample Ceiling Paint', href: '/products/walls-ceilings/sample-ceiling-paint' },
    ],
  },
  {
    title: 'Kitchen & Bathroom',
    items: [
      { label: 'Ceramic Finish', href: '/products/kitchen-bathroom/ceramic-finish' },
      { label: 'Interior Matt', href: '/products/kitchen-bathroom/interior-matt' },
      { label: 'Trim Finish', href: '/products/kitchen-bathroom/trim-finish' },
      { label: 'Interior Primer', href: '/products/kitchen-bathroom/interior-primer' },
    ],
  },
  {
    title: 'Interior Wood & Metal',
    items: [
      { label: 'Wood Paint', href: '/products/interior-wood-metal/wood-paint' },
      { label: 'Metal Finish', href: '/products/interior-wood-metal/metal-finish' },
      { label: 'Masonry Paint', href: '/products/interior-wood-metal/masonry-paint' },
      { label: 'Glossy Paint', href: '/products/interior-wood-metal/glossy-paint' },
    ],
  },
  {
    title: 'Exterior',
    items: [
      { label: 'Matt Wall Paint', href: '/products/exterior/matt-wall-paint' },
      { label: 'Undercoat Paint', href: '/products/exterior/undercoat-paint' },
      { label: 'Satinwood Paint', href: '/products/exterior/satinwood-paint' },
      { label: 'Water Proof Paint', href: '/products/exterior/water-proof-paint' },
    ],
  },
];

export default ProductDropdown;
