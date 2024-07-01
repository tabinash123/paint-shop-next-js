"use client"
import React from 'react';
import styled from 'styled-components';
import store from '../../../public/assets/paint-store.jpg';
import Image from 'next/image';

const IntroSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background-color: #ffffff;
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
  font-size: 40px;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 20px;
  color: #000000; /* Deep black color */
  @media (max-width: 1024px) {
    font-size: 36px;
  }
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Subheadline = styled.h2`
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 20px;
  color: #5f5f5f;
  @media (max-width: 1024px) {
    font-size: 26px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Mission = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.8;
  max-width: 600px;
  color: #666;
  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Introduction = () => {
  return (
    <IntroSection>
      <TextContainer>
        <Headline>Welcome to Saurav and Shuvam Paint</Headline>
        <Subheadline>Your Trusted Asian Paints Dealer in Kathmandu, Nepal</Subheadline>
        <Mission>
          At Saurav and Shuvam Paint, we’re committed to helping you transform your spaces with the finest quality paints. As a leading Asian Paints dealer in Kathmandu, we offer a wide array of vibrant colors and finishes. Whether you’re a homeowner or a contractor, our expert team is here to provide personalized advice and exceptional service. Visit us and experience why we are Kathmandu’s preferred paint store.
        </Mission>
      </TextContainer>
      <ImageContainer>
        <Image src={store} alt="Saurav and Shuvam Paint Store in Kathmandu" layout="responsive" placeholder="blur" quality={75} />
      </ImageContainer>
    </IntroSection>
  );
};

export default Introduction;
