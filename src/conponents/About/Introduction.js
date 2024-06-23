"use client"
import React from 'react';
import styled from 'styled-components';
import Hero from '../Hero';
import store from '../../../public/assets/paint-store.jpg'
import Image from 'next/image';


const IntroSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 50px;
  
  background-color: #f9f9f9;
  color: #333;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 20px;
  @media (max-width: 768px) {
    padding: 10px;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;



const Headline = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
  @media (max-width: 1024px) {
    font-size: 32px;
  }
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Subheadline = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #666;
  @media (max-width: 1024px) {
    font-size: 22px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Mission = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
  max-width: 600px;
  margin: 0 auto 30px;
  @media (max-width: 1024px) {
    font-size: 14px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #ff0049;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  font-weight: 600;

  &:hover {
    background-color: #e60042;
  }

  @media (max-width: 1024px) {
    padding: 8px 18px;
  }
  @media (max-width: 768px) {
    padding: 6px 16px;
  }
`;

const Introduction = () => {
  return (
    <div>
      <Hero />
    <IntroSection>
      <TextContainer>
        <Headline>Who we are </Headline>
        <Subheadline>Innovative paint solutions designed to elevate your living and working spaces.</Subheadline>
        <Mission>Paintmandu is an interior and exterior house painting company in Nepal. We provide professional house painting service to homes, commercial spaces, and even apartment buildings. We are committed to providing high-quality paints and different painting methods so that you can choose the best option according to your need. Our team is well-trained in the art of painting. We have aesthetic sense and creativity that ensures each house painting project turns out beautifully, whether it is an exterior or interior home paint service, or for commercial spaces or apartment buildings. We take great pride in our work.</Mission>
        {/* <CTAButton href="#about-us">Discover our story</CTAButton> */}
      </TextContainer>
      <ImageContainer>
              <Image src={store} alt="color-palette" layout="responsive" />
      </ImageContainer>
    </IntroSection>
    </div>
  );
};

export default Introduction;
