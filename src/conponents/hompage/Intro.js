import React from 'react';
import { Box, Typography, Button, Divider } from '@mui/material';
import styled from 'styled-components';

const Container = styled(Box)`
  padding: 40px;
  background-color: #f9f9f9;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
  margin: auto;
  margin-top: 40px;
  font-family: 'Roboto', sans-serif;
`;

const GradientHeader = styled(Typography)`
  background: linear-gradient(90deg, #FF5733, #C70039, #900C3F, #581845);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 2.5rem;
  font-family: Arial, sans-serif;
`;

const SubHeader = styled(Typography)`
  color: #C70039;
  margin-bottom: 20px;
  font-size: 1.25rem;
  font-family: Arial, sans-serif;
`;

const InfoText = styled(Typography)`
  margin-bottom: 20px;
  line-height: 1.6;
  font-size: 1rem;
  font-family: Arial, sans-serif;
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
  padding: 12px 24px;
  background-color: #900C3F;
  color: #fff;
  font-size: 1rem;
  &:hover {
    background-color: #581845;
  }
`;

const DividerStyled = styled(Divider)`
  margin: 20px 0;
`;

const Intro = () => {
  return (
    <Container>
      <GradientHeader variant="h4">Transform Your Space with [Your Brand]</GradientHeader>
      <SubHeader variant="body1">
        Discover the Perfect Palette to Refresh Every Room
      </SubHeader>
      <DividerStyled />
      <InfoText variant="body2">
        At [Your Brand], we believe in the power of color to change the way you feel about your home. Our premium collection of paints is designed to bring vibrancy, durability, and elegance to your living spaces. From serene blues to energizing reds, we offer a spectrum of shades that cater to every mood and style.
      </InfoText>
      <InfoText variant="body2">
        Why Choose [Your Brand]?
      </InfoText>
      <Box component="ul" sx={{ textAlign: 'left', paddingLeft: '1.25rem', marginBottom: '20px' }}>
        <li>Extensive range of eco-friendly and non-toxic paints</li>
        <li>Expert color consultation services</li>
        <li>High durability with easy application</li>
        <li>Stain-resistant and easy-to-clean finishes</li>
      </Box>
      <InfoText variant="body2">
        Ready to transform your home? Explore our collection and find the perfect shade for your next project.
      </InfoText>
      <StyledButton
        variant="contained"
        href="/shop"
      >
        Explore Our Collection
      </StyledButton>
    </Container>
  );
};

export default Intro;
