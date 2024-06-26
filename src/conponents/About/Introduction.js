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
  font-family: 'Poppins', sans-serif;
  margin-bottom: 10px;
  @media (max-width: 1024px) {
    font-size: 32px;
  }
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Subheadline = styled.h2`
  font-size: 24px;
  font-weight: 500;
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
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  max-width: 600px;
  @media (max-width: 1024px) {
    font-size: 15px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Introduction = () => {
  return (
    <IntroSection>
      <TextContainer>
        <Headline>Welcome to SNS Paint</Headline>
        <Subheadline>Your Trusted Paint Store in Kathmandu</Subheadline>
        <Mission>
          Located in the heart of Kathmandu, SNS Paint is your go-to destination for all your painting needs. Our shop is conveniently situated to serve both homeowners and contractors in the vibrant city of Kathmandu, Nepal. We pride ourselves on offering a wide range of high-quality paints, from soothing neutrals to bold, vibrant hues, ensuring you find the perfect color for any project.
          <br/><br/>
          At SNS Paint, we are committed to providing exceptional customer service and expert advice to help you achieve the best results. Our knowledgeable team is here to guide you through every step of your painting journey, from selecting the right products to offering tips on application techniques. Whether you are refreshing a single room or undertaking a major renovation, SNS Paint has everything you need to bring your vision to life.
          <br/><br/>
          Visit us today and discover why SNS Paint is the preferred choice for quality paints and professional service in Kathmandu. Let us work together to create beautiful, inspiring spaces with colors that truly reflect your unique style.
        </Mission>
      </TextContainer>
      <ImageContainer>
        <Image src={store} alt="SNS Paint Store" layout="responsive" />
      </ImageContainer>
    </IntroSection>
  );
};

export default Introduction;
