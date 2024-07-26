import React from 'react';
import styled from 'styled-components';
import { Button, Typography } from '@material-ui/core';

const BannerContainer = styled.div`
  background: linear-gradient(to right, #1e1e3f, #2e2e5f);
  padding: 3rem 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/path-to-paint-shop-background.jpg');
    background-size: cover;
    opacity: 0.1;
    z-index: 0;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
  max-width: 800px;
  margin: 0 auto;
`;

const MainHeading = styled(Typography)`
  && {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.2;
  }
`;

const SubHeading = styled(Typography)`
  && {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    opacity: 0.9;
  }
`;

const StyledButton = styled(Button)`
  && {
    background-color: #ff4d4d;
    color: white;
    padding: 0.75rem 2rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 25px;
    text-transform: none;
    
    &:hover {
      background-color: #ff3333;
    }
  }
`;

const PromotionalBanner = () => {
  return (
    <BannerContainer>
      <ContentWrapper>
        <MainHeading variant="h1">
          Bespoke Paint Solutions For Every Surface
        </MainHeading>
        <SubHeading variant="subtitle1">
          Have An Idea For A Custom Paint Job? We Can Help. Discuss Your Requirements With Our Experts and Transform Your Space Today.
        </SubHeading>
        <StyledButton variant="contained">
          Talk To Experts Now
        </StyledButton>
      </ContentWrapper>
    </BannerContainer>
  );
};

export default PromotionalBanner;