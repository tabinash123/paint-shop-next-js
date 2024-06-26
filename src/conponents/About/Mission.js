"use client"
import React from 'react';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
import mission from '../../../public/assets/mission.PNG';
import story from '../../../public/assets/story.PNG';
import PaletteIcon from '@mui/icons-material/Palette';

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

const ContainerWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  width: 100%;
  align-items: center;
`;

const TextWrapper = styled.div`
  padding: 0 16px;
  text-align: left;
`;

const ImageWrapper = styled.div`
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

const Heading = styled.h2`
  font-size: 28px;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 16px;
  @media (max-width: 1024px) {
    font-size: 24px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 16px;
  @media (max-width: 1024px) {
    font-size: 15px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const DividerStyled = styled.div`
  width: 80%;
  height: 1px;
  background-color: #ccc;
  margin: 20px 0;
`;

const Mission = () => {
  return (
    <MissionSection>
      <DividerStyled />
      <ContainerWrapper>
        <GridContainer>
          <div>
            <Heading>Our Mission: Bringing Color to Your Life</Heading>
            <TextWrapper>
              <IconWrapper>
                <PaletteIcon />
              </IconWrapper>
              <Paragraph>
                At SNS Paint, we believe that the right paint color can transform any space. Our mission is to provide you with the highest quality paints that allow you to express your personality and style. Whether you are looking for a calming neutral or a bold statement color, we have got you covered.
              </Paragraph>
              <Paragraph>
                We understand that choosing the perfect color can be daunting. That is why we have created an easy-to-use online platform to help you visualize and select the perfect shades for your home. With SNS Paint, you can explore a world of color possibilities right from the comfort of your home.
              </Paragraph>
              <Paragraph>
                Whether you are updating a single room or embarking on a full home makeover, we are here to help every step of the way. Let us make your home a place you will love to come back to, with colors that truly represent you.
              </Paragraph>
            </TextWrapper>
          </div>
          <ImageWrapper>
            <Image src={mission} alt="Our mission" layout="responsive" />
            <GradientOverlay />
          </ImageWrapper>
        </GridContainer>
      </ContainerWrapper>
      <DividerStyled />
      <ContainerWrapper>
        <GridContainer>
          <div>
            <Heading>Our Vision: Transforming Color Selection</Heading>
            <TextWrapper>
              <Paragraph>
                At SNS Paint, we aim to revolutionize the way you choose colors for your home. We know that the right color can make all the difference, and our goal is to make the selection process as easy and enjoyable as possible.
              </Paragraph>
              <Paragraph>
                Forget about the hassle of multiple trips to the store and the uncertainty of picking the right shade. Our innovative online tools let you experiment with different colors and see how they will look in your space, taking the guesswork out of the equation.
              </Paragraph>
              <Paragraph>
                Whether you are a DIY enthusiast or a first-time painter, SNS Paint is here to help you create a home that feels uniquely yours. Let us work together to turn your vision into reality, with beautiful colors that inspire and delight.
              </Paragraph>
            </TextWrapper>
          </div>
          <ImageWrapper>
            <Image src={story} alt="Our story" layout="responsive" />
            <GradientOverlay />
          </ImageWrapper>
        </GridContainer>
      </ContainerWrapper>
    </MissionSection>
  );
};

export default Mission;
