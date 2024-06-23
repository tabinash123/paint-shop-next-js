"use client"
import React from 'react';
import { Container, Typography, Grid, Paper, Divider } from '@mui/material';
import PaletteIcon from '@mui/icons-material/Palette';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
import mission from '../../../public/assets/mission.PNG';
import story from '../../../public/assets/story.PNG';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const MissionSection = styled.section`
  padding: 64px 0;
  background-color: #fff;
  animation: ${fadeIn} 1s ease-in-out;
  text-align: center;
  font-family: 'Poppins', sans-serif;
`;

const ContainerWrapper = styled(Container)`
  & > .MuiGrid-container {
    display: flex;
    align-items: center;
  }
`;

const TextWrapper = styled.div`
  padding: 0 16px;
  text-align: left;
`;

const ImageWrapper = styled(Paper)`
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  margin-bottom: 16px;
  max-width: fit-content;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(255,111,97,0.6), rgba(63,81,181,0.6));
  opacity: 0;
  transition: opacity 0.3s;
  ${ImageWrapper}:hover & {
    opacity: 1;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  & svg {
    font-size: 2.5rem;
    color: #ff6f61;
    transition: color 0.3s;
    &:hover {
      color: #3f51b5;
    }
  }
`;

const TypographyStyled = styled(Typography)`
  font-family: 'Poppins', sans-serif !important;
`;

const Mission = () => {
  return (
    <MissionSection>
            <Divider style={{ width: '80%', marginTop: 20, marginBottom: 20 }} />

      <ContainerWrapper>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <TypographyStyled variant="h4" component="h2" gutterBottom style={{ fontSize: '28px', fontWeight: '700', lineHeight: '1.3' }}>
              OUR MISSION: Finding a World of Color for Your Home
            </TypographyStyled>
            <TextWrapper>
              <IconWrapper>
                <PaletteIcon />
              </IconWrapper>
              <TypographyStyled variant="body1" paragraph style={{ fontSize: '16px', lineHeight: '1.6' }}>
                At OurPaintShop, we understand that choosing the perfect paint color can transform your living space. Our extensive collection of high-quality paint colors and finishes ensures that you will find the ideal shade to reflect your unique style and personality.
              </TypographyStyled>
              <TypographyStyled variant="body1" paragraph style={{ fontSize: '16px', lineHeight: '1.6' }}>
                From calming neutrals to vibrant hues, our curated selection offers endless possibilities for enhancing the beauty and atmosphere of your home. With our easy-to-use online platform, you can explore, visualize, and select the perfect colors with confidence and convenience.
              </TypographyStyled>
              <TypographyStyled variant="body1" paragraph style={{ fontSize: '16px', lineHeight: '1.6' }}>
                Whether you are  refreshing a single room or embarking on a full home makeover, OurPaintShop is your trusted partner in creating spaces that inspire and delight.
              </TypographyStyled>
            </TextWrapper>
          </Grid>
          <Grid item xs={12} md={6}>
            <ImageWrapper>
              <Image src={mission} alt="color-palette" layout="responsive" />
              <GradientOverlay />
            </ImageWrapper>
          </Grid>
        </Grid>
      </ContainerWrapper>
      <Divider style={{ width: '80%', marginTop: 20, marginBottom: 20 }} />
      <ContainerWrapper>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <TypographyStyled 
  variant="h4" 
  component="h2" 
  gutterBottom 
  style={{ fontSize: '28px', fontWeight: '700', lineHeight: '1.3' }}
>
  OUR VISION: Transforming the Way You Experience Color Selection
</TypographyStyled>
<TextWrapper>
  <TypographyStyled variant="body1" paragraph style={{ fontSize: '16px', lineHeight: '1.6' }}>
    OurPaintShop is committed to redefining the way homeowners explore and select paint colors. With our innovative online platform, we are revolutionizing the color selection process, making it more inspiring, convenient, and enjoyable than ever before.
  </TypographyStyled>
  <TypographyStyled variant="body1" paragraph style={{ fontSize: '16px', lineHeight: '1.6' }}>
    Gone are the days of endless trips to the store and frustrating color guesswork. Our advanced tools and resources empower you to visualize and experiment with different colors and combinations, allowing you to see exactly how your chosen colors will look in your space.
  </TypographyStyled>
  <TypographyStyled variant="body1" paragraph style={{ fontSize: '16px', lineHeight: '1.6' }}>
    With OurPaintShop, you can say goodbye to color anxiety and confidently bring your vision to life. Whether you are a seasoned DIY enthusiast or a first-time homeowner, our platform makes it easy to create beautiful, personalized spaces that you will love coming home to.
  </TypographyStyled>
</TextWrapper>

          </Grid>
          <Grid item xs={12} md={6}>
            <ImageWrapper>
              <Image src={story} alt="color-selection" layout="responsive" />
              <GradientOverlay />
            </ImageWrapper>
          </Grid>
        </Grid>
      </ContainerWrapper>
    </MissionSection>
  );
};

export default Mission;
