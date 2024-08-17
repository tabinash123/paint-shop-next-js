import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
};

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  // padding: 0 5%;
  color: white;
  overflow: hidden;

  @media (max-width: ${breakpoints.mobile}) {
    height: auto;
    min-height: 100vh;
    // padding: 80px 5% 40px;
  }

`;

const BackgroundImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.6) 50%,
    rgba(0, 0, 0, 0.4) 100%
  );
  z-index: 1;

  @media (max-width: ${breakpoints.mobile}) {
    background: rgba(0, 0, 0, 0.7);
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 40%;
  margin-left: 5%;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 70%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 80%;
  }
`;

const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 1.2;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: clamp(1.8rem, 7vw, 2.5rem);
  }
`;

const Subtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  margin-bottom: 30px;
  opacity: 0.9;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

const Highlight = styled.span`
  color: #ff6b6b;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  width:200px;
  &:first-child {
    background-color: #ff6b6b;
    color: white;
    &:hover {
      background-color: #ff5252;
      transform: translateY(-2px);
    }
  }
  &:last-child {
    background-color: transparent;
    border: 2px solid white;
    color: white;
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      transform: translateY(-2px);
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
     width:200px;

  }
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: ${breakpoints.tablet}) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 15px;
  }
`;

const StatItem = styled.div`
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    flex-basis: calc(50% - 10px);
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-basis: calc(50% - 7.5px);
  }
`;

const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 5px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  opacity: 0.8;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <BackgroundImageWrapper>
        <Image
          src="/assets/shop images/shop2.jpg"
          alt="Shaurav and Suvam Paint Shop"
          layout="fill"
          objectFit="cover"
          quality={90}
          priority
        />
      </BackgroundImageWrapper>
      <Overlay />
      <Content>
        <Title>
          Transform Your Space with <Highlight>Shaurav and Suvam Paint Shop</Highlight>
        </Title>
        <Subtitle>
          Discover a world of colors and quality paints for your home and business in the heart of Kathmandu.
        </Subtitle>
        <ButtonGroup>
          <Button>Explore Our Collection</Button>
          <Button>Color Consultation</Button>
        </ButtonGroup>
        <Stats>
          <StatItem>
            <StatValue>1000+</StatValue>
            <StatLabel>Color Options</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>15+</StatValue>
            <StatLabel>Years of Experience</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>50+</StatValue>
            <StatLabel>Brand Partners</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>100%</StatValue>
            <StatLabel>Customer Satisfaction</StatLabel>
          </StatItem>
        </Stats>
      </Content>
    </HeroSection>
  );
};

export default Hero;