"use client"
import React from 'react';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
import story from '../../../public/assets/story.PNG';


const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Section = styled.section`
  background-color: #fff;
  animation: ${fadeIn} 1s ease-in-out;
  text-align: center;

  @media (max-width: 480px) {
    padding: 32px 0;
  }
`;

const ContainerWrapper = styled.div`
  max-width: 1200px;
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
    // grid-template-columns: 1fr 1fr;
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

const TextWrapper = styled.div`
  padding: 0 16px;
  text-align: left;
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

const DividerStyled = styled.div`
  width: 80%;
  height: 1px;
  background-color: #ccc;
  margin: 20px 0;

  @media (max-width: 480px) {
    width: 90%;
  }
`;

const Vision = () => {
  return (
    <Section>
 
      <ContainerWrapper>
        <GridContainer>
          <ImageWrapper>
            <Image src={story} alt="Our vision: Transforming Color Selection in Nepal" layout="responsive" width={500} height={300} />
            <GradientOverlay />
          </ImageWrapper>
          <TextWrapper>
            <Heading>Our Vision: Transforming Color Selection in Nepal</Heading>
            <List>
              <ListItem>Provide innovative online tools for effortless color selection in Nepal.</ListItem>
              <ListItem>Help you visualize different shades in your space before making a decision.</ListItem>
              <ListItem>Make the process of picking the right paint color easy and enjoyable for all Nepali homeowners.</ListItem>
              <ListItem>Inspire creativity and confidence in every painting project with our support.</ListItem>
            </List>
          </TextWrapper>
        </GridContainer>
      </ContainerWrapper>
      <DividerStyled />
    </Section>
  );
};

export default Vision;
