import React from 'react';
import styled from 'styled-components';
import { List, ListItem, ListItemText, Typography, Paper } from '@mui/material';
import products from '../../data/products';

const Sidebar = styled(Paper)`
  flex: 1;
  max-width: 200px;
  padding: 20px;
  background: #fff;
  margin-right: 20px;
  overflow-y: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Right side elevation */

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    display: none; /* Hide sidebar on small devices */
  }
`;

const SubcategoryList = styled(List)`
  margin: 0;
  padding: 0;
`;

const SubcategoryItem = styled(ListItem)`
  cursor: pointer;
  // padding: 5px 10px;
  margin-left: 20px;
  border-radius: 4px;
  transition: background 0.3s;
  font-size: 0.875rem; /* Reduced font size */

  ${(props) => props.selected && `
background: linear-gradient(45deg, rgba(255, 87, 51, 0.3), rgba(255, 87, 51, 0.3) 75%, rgba(255, 165, 0, 0.3) 75%, rgba(255, 165, 0, 0.3));
    color: black;
  `}

  &:hover {
    background: linear-gradient(45deg, rgba(255, 87, 51, 0.1), rgba(255, 87, 51, 0.1) 75%, rgba(255, 165, 0, 0.1) 75%, rgba(255, 165, 0, 0.3));
  }

  @media (max-width: 768px) {
    font-size: 0.75rem; /* Further adjustment for smaller devices */
  }
`;

const VerticalSidebar = ({ selectedSubcategory, handleSubcategoryChange }) => (
  <Sidebar>
    <Typography variant="h6" gutterBottom>
      Category
    </Typography>
    {products.map((category, index) => (
      <div key={index}>
        <ListItem>
          <ListItemText primary={category.category} style={{ color: '#800000' }} />
        </ListItem>
        <SubcategoryList component="div" disablePadding>
          {category.subcategories.map((subcategory, subIndex) => (
            <SubcategoryItem
              key={subIndex}
              selected={subcategory.subcategory === selectedSubcategory}
              onClick={() => handleSubcategoryChange(subcategory.subcategory)}
            >
              {subcategory.subcategory}
            </SubcategoryItem>
          ))}
        </SubcategoryList>
      </div>
    ))}
  </Sidebar>
);

export default VerticalSidebar;
