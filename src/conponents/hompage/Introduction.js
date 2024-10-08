import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import shopImage from '../../../public/assets/shop images/shop3.jpg'
import asianPaintLogo from '../../../public/assets/asianpaint.jpg'
// import asianPaintLogo from '../../../public/assets/asian-paints-logo.png'; // Add this import

const IntroSection = styled.section`
  background-color: #ffffff;
  padding: 100px 0;
  color: #222;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 40px;
  }
`;

const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  color: #222;
  margin-bottom: 30px;
  font-weight: 700;
`;

const Highlight = styled.span`
  color: #ff4f4f;
`;

const Description = styled.p`
  font-size: 1.0rem;
  line-height: 1.7;
  margin-bottom: 30px;
  font-weight: 300;
`;

const AuthorizedDealerInfo = styled.p`
  font-size: 1.0rem;
  line-height: 1.6;
  margin-bottom: 20px;
  font-weight: 500;
  color: #ff4f4f;
`;

const LogoWrapper = styled.div`
  width: 300px;
  height: 150px;
  position: relative;
  margin-bottom: 20px;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FeatureItem = styled.li`
  font-size: 0.9rem;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  font-weight: 500;

  &:before {
    content: '✓';
    color: #ff4f4f;
    font-weight: bold;
    margin-right: 15px;
    font-size: 1.3rem;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  position: relative;
  height: 350px;
  width: 100%;

  @media (max-width: 768px) {
    height: 450px;
  }
`;

const Introduction = () => {
  return (
    <IntroSection>
      <Container>
        <ContentWrapper>
          <Title>Welcome to <Highlight>Suvam  and Shaurav Paint Shop</Highlight></Title>
          <Description>
            For over 15 years, we have been Kathmandu premier destination for all your painting needs.
            Our extensive range of high-quality paints, expert color consultation, and unwavering commitment to
            customer satisfaction make us the top choice for homeowners and businesses alike.
          </Description>
          <AuthorizedDealerInfo>
            Proud to be an authorized dealer of Asian Paints Nepal, bringing you the best in quality and innovation.
          </AuthorizedDealerInfo>
          <LogoWrapper>
            <Image
              src={asianPaintLogo}
              alt="Asian Paints Logo"
              layout="fill"
              objectFit="contain"
            />
          </LogoWrapper>
          <FeatureList>
            <FeatureItem>Extensive selection of premium Asian Paints products</FeatureItem>
            <FeatureItem>Expert color consultation and precise matching services</FeatureItem>
            <FeatureItem>Eco-friendly and low-VOC options for conscious consumers</FeatureItem>
            <FeatureItem>Professional-grade tools and accessories for perfect results</FeatureItem>
            <FeatureItem>Competitive pricing and rewarding loyalty programs</FeatureItem>
          </FeatureList>
        </ContentWrapper>
        <ImageWrapper>
          <Image
            src={shopImage}
            alt="Shaurav and Suvam Paint Shop Interior"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </ImageWrapper>
      </Container>
    </IntroSection>
  );
};

export default Introduction;