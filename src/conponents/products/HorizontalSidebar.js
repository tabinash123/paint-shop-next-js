import React from 'react';
import styled from 'styled-components';
import { Paper, IconButton, Popover, List, ListItem, Divider } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import products from '../../data/products';

const HorizontalSidebarContainer = styled(Paper)`
  display: none;
  width: 100%;
  padding: 10px;
  background: #fff;
  overflow-x: auto;
  white-space: nowrap;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Bottom elevation */

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const HorizontalItem = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 4px;
  background: ${props => props.selected ? '#ffd700' : '#fff'};
  transition: background 0.3s, transform 0.3s; /* Added transition for transform */
  font-size: 0.875rem; /* Reduced font size */
  border-left: 1px solid #ddd; /* Vertical divider */
  box-shadow: ${props => props.selected ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none'}; /* Box shadow for visual effect */
  transform: ${props => props.selected ? 'scale(1.05)' : 'none'}; /* Scale effect */

  &:first-child {
    border-left: none; /* Remove border for the first item */
  }

  &:hover {
    background: #ffd700;
  }

  @media (max-width: 768px) {
    font-size: 0.75rem; /* Further adjustment for smaller devices */
  }
`;

const SubcategoryList = styled(List)`
  margin: 0;
  padding: 0;
`;

const SubcategoryItem = styled(ListItem)`
  cursor: pointer;
  padding: 5px 10px;
  margin: 0;
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

const HorizontalSidebar = ({
  selectedCategory,
  handleCategoryClick,
  selectedSubcategory,
  handleSubcategoryChange,
  anchorEl,
  openCategory,
  setAnchorEl,
  setOpenCategory
}) => {
  return (
    <>
      <HorizontalSidebarContainer>
        {products.map((category, index) => (
          <HorizontalItem
            key={index}
            selected={category.category === selectedCategory}
            onClick={(event) => handleCategoryClick(event, category.category)}
          >
            {category.category}
            <IconButton size="small">
              <ExpandMoreIcon />
            </IconButton>
          </HorizontalItem>
        ))}
      </HorizontalSidebarContainer>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{
          style: {
            marginTop: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
          }
        }}
      >
        <SubcategoryList component="div" disablePadding>
          {products.find(category => category.category === openCategory)?.subcategories.map((subcategory, subIndex) => (
            <div key={subIndex}>
              <SubcategoryItem
                selected={subcategory.subcategory === selectedSubcategory}
                onClick={() => handleSubcategoryChange(subcategory.subcategory)}
              >
                {subcategory.subcategory}
              </SubcategoryItem>
              {subIndex < products.find(category => category.category === openCategory).subcategories.length - 1 && (
                <Divider />
              )}
            </div>
          ))}
        </SubcategoryList>
      </Popover>
    </>
  );
};

export default HorizontalSidebar;
