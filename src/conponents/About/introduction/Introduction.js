import React from 'react';
import styled from 'styled-components';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import PhoneIcon from '@mui/icons-material/Phone';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// Import your shop images
import shop1 from '../../../../public/assets/shop images/shop1.jpg';
import shop2 from '../../../../public/assets/shop images/shop2.jpg';
import shop3 from '../../../../public/assets/shop images/shop3.jpg';
import shop4 from '../../../../public/assets/shop images/shop4.jpg';
import shop5 from '../../../../public/assets/shop images/shop5.jpg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 50px;
    padding: 40px;
  }
`;

const ContentSection = styled.div`
  flex: 1;
  padding-right: 0;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    padding-right: 40px;
    margin-bottom: 0;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  min-height: 200px;

  @media (min-width: 768px) {
    min-height: 300px;
  }

  @media (min-width: 1024px) {
    min-height: 400px;
  }
`;

const Title = styled(Typography)`
  && {
    color: #e91e63;
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 12px;

    @media (min-width: 768px) {
      font-size: 14px;
      margin-bottom: 16px;
    }
  }
`;

const Heading = styled(Typography)`
  && {
    color: #003366;
    font-size: 24px;
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 16px;

    @media (min-width: 768px) {
      font-size: 32px;
      margin-bottom: 24px;
    }

    @media (min-width: 1024px) {
      font-size: 36px;
    }
  }
`;

const Description = styled(Typography)`
  && {
    color: #555555;
    font-size: 14px;
    margin-bottom: 16px;
        font-family: 'Graphik-Regular' !important;

    @media (min-width: 768px) {
      font-size: 16px;
      margin-bottom: 24px;
    }
  }
`;

const ListItem = styled.li`
  color: #555555;
  font-size: 14px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const StyledCheckIcon = styled(CheckIcon)`
  && {
    color: #e91e63;
    margin-right: 8px;
    font-size: 18px;

    @media (min-width: 768px) {
      font-size: 20px;
    }
  }
`;

const PhoneNumber = styled.div`
  display: inline-flex;
  align-items: center;
  color: #003366;
  font-weight: bold;
  font-size: 14px;
  margin-top: 16px;

  @media (min-width: 768px) {
    font-size: 16px;
    margin-top: 24px;
  }
`;

const StyledPhoneIcon = styled(PhoneIcon)`
  && {
    background-color: #f0f0f0;
    border-radius: 50%;
    padding: 6px;
    margin-right: 8px;
    font-size: 18px;

    @media (min-width: 768px) {
      padding: 8px;
      font-size: 20px;
    }
  }
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const StyledCarousel = styled(Carousel)`
  .carousel .slide {
    transition: transform 0.6s ease-in-out;
  }

  .carousel .control-prev.control-arrow:before,
  .carousel .control-next.control-arrow:before {
    color: #e91e63;
    font-size: 2rem;
  }

  .carousel .control-dots .dot {
    background: #e91e63;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }
`;

const AboutIntroduction = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const shopImages = [shop1, shop2, shop3, shop4, shop5];

  return (
    <Container>
      <ContentSection>
        <Title variant="h6">ABOUT SAURAV AND SHUVAM PAINTS</Title>
        <Heading variant="h2">
          Coloring Kathmandu Homes
          <br />
          With Trust and Quality
        </Heading>
        <Description>
          Founded in Kathmandu, Saurav and Shuvam Paints has been brightening homes and businesses 
          across the city since 2010. We are more than just a paint shop – we are your partners in 
          transforming spaces with vibrant, durable, and eco-friendly colors. Our journey began with 
          a simple idea: to provide top-quality paints with unmatched customer service.
        </Description>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <ListItem>
            <StyledCheckIcon />
            Over a decade of experience in the paint industry
          </ListItem>
          <ListItem>
            <StyledCheckIcon />
            Wide range of premium and eco-friendly paint products
          </ListItem>
          <ListItem>
            <StyledCheckIcon />
            Committed to beautifying Kathmandu, one wall at a time
          </ListItem>
        </ul>
        <PhoneNumber>
          <StyledPhoneIcon />
          +977 9851014256
        </PhoneNumber>
      </ContentSection>
      <ImageSection>
        <StyledCarousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          interval={5000}
        >
          {shopImages.map((shop, index) => (
            <div key={index}>
              <CarouselImage style={{ maxHeight: "500px" }} src={shop.src} alt={`Shop Image ${index + 1}`} />
            </div>
          ))}
        </StyledCarousel>
      </ImageSection>
    </Container>
  );
};

export default AboutIntroduction;
