"use client"
import React from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import Image from 'next/image';
import mission from '../../../public/assets/mission.PNG';
import PaletteIcon from '@mui/icons-material/Palette';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
  body {
    font-family: 'Poppins', sans-serif;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Section = styled.section`
  padding: 64px 0;
  background-color: #fff;
  animation: ${fadeIn} 1s ease-in-out;
  text-align: center;

  @media (max-width: 480px) {
    padding: 32px 0;
  }
`;

const ContainerWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 480px) {
    padding: 0 16px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  width: 100%;
  align-items: center;

  @media (min-width: 481px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1025px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const TextWrapper = styled.div`
  padding: 0 16px;
  text-align: left;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;

  & svg {
    font-size: 3rem;
    color: #ff6f61;
    transition: color 0.3s;

    &:hover {
      color: #3f51b5;
    }
  }
`;

const Heading = styled.h2`
  font-size: 32px;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 16px;
  color: #333;

  @media (max-width: 480px) {
    font-size: 24px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 28px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 28px;
  }

  @media (min-width: 1025px) {
    font-size: 32px;
  }
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  color: #666;
`;

const ListItem = styled.li`
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 8px;

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 1.6;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 16px;
    line-height: 1.7;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 16px;
    line-height: 1.7;
  }

  @media (min-width: 1025px) {
    font-size: 18px;
    line-height: 1.8;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 16px;
  max-width: 100%;
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

const DividerStyled = styled.div`
  width: 80%;
  height: 1px;
  background-color: #ccc;
  margin: 20px 0;

  @media (max-width: 480px) {
    width: 90%;
  }
`;

const Mission = () => {
  return (
    <Section>
      <GlobalStyle />
      <DividerStyled />
      <ContainerWrapper>
        <GridContainer>
          <TextWrapper>
            <Heading>Our Mission: Bringing Color to Your Life in Nepal</Heading>
            <IconWrapper>
              <PaletteIcon />
            </IconWrapper>
            <List>
              <ListItem>Provide top-quality Asian Paints for homes and businesses across Nepal.</ListItem>
              <ListItem>Offer a wide range of colors to match the unique tastes and preferences of the Nepali people.</ListItem>
              <ListItem>Support local contractors and DIY enthusiasts with expert advice and exceptional service.</ListItem>
              <ListItem>Enhance the beauty of Nepali homes with vibrant, long-lasting paint solutions.</ListItem>
            </List>
          </TextWrapper>
          <ImageWrapper>
            <Image src={mission} alt="Our mission: Bringing Color to Your Life in Nepal" layout="responsive" width={500} height={300} />
            <GradientOverlay />
          </ImageWrapper>
        </GridContainer>
      </ContainerWrapper>
      <DividerStyled />
    </Section>
  );
};

export default Mission;
